export default function specInit(param, icon) {
    var graph = {
        $schema : "https://vega.github.io/schema/vega/v5.json",
        width : param.canvas_width,
        height : param.canvas_height,
        padding : param.padding,
        autosize : "none",
        config : {
            axis : {
                domain : false,
                tickSize : 3,
                tickColor : "#888",
                labelFont : "Monaco, Courier New"
            }
        },
        signals : [
            {
                name : "layoutZoom",
                update : "if(width < 400, width / 400, if(width > 1000, width / 1000, 1))"
            },
            {
                name : "xoffset",
                update : "-(height + padding.bottom)"
            },{
                name : "yoffset",
                update : "-(width + padding.left)"
            },{
                name : "xrange",
                update : "[0, width]"
            },{
                name : "yrange",
                update : "[height, 0]"
            },{
                name : "down",
                value : null,
                on : [
                    { events : "mousedown", update : "xy()" }
                ]
            },{
                name : "delta",
                value : [0, 0],
                on : [
                    {
                        events : [
                            {
                                source : "window",
                                type : "mousemove",
                                consume : true,
                                between : [
                                    { type : "mousedown" },
                                    { source : "window", type : "mouseup" }
                                ]
                            }
                        ],
                        update : "down ? [down[0]-x(), y()-down[1]] : [0, 0]"
                    }
                ]
            },{
                name : "anchor",
                value : [0, 0],
                on : [
                    {
                        events : "wheel",
                        update : "[invert('xscale', x()), invert('yscale', y())]"
                    }
                ]
            },{
                name : "zoom",
                value : 1,
                on : [
                    {
                        events : "wheel!",
                        force : true,
                        update : "pow(1.001, event.deltaY * pow(16, event.deltaMode))"
                    }
                ]
            },{
                name : "xdom",
                update : "slice([0,1])",
                on : [
                    {
                        events : { signal : "delta" },
                        update : "[xcur[0] + span(xcur) * delta[0] / width, xcur[1] + span(xcur) * delta[0] / width]"
                    },{
                        events : { signal : "zoom" },
                        update : "[anchor[0] + (xdom[0] - anchor[0]) * zoom, anchor[0] + (xdom[1] - anchor[0]) * zoom]"
                    }
                ]
            },{
                name : "ydom",
                update : "slice([0,1])",
                on : [
                    {
                        events : { signal : "delta" },
                        update : "[ycur[0] + span(ycur) * delta[1] / height, ycur[1] + span(ycur) * delta[1] / height]"
                    },{
                        events : { signal : "zoom" },
                        update : "[anchor[1] + (ydom[0] - anchor[1]) * zoom, anchor[1] + (ydom[1] - anchor[1]) * zoom]"
                    }
                ]
            },{
                name : "sizeZoom",
                update : 1,
                on : [
                    {
                        events : { signal : "xdom" },
                        update : "1 / (xdom[1] - xdom[0])"
                    }
                ]
            },{
                name : "xcur",
                value : null,
                on : [ { events : "mousedown", update : "slice(xdom)" } ]
            },{
                name : "ycur",
                value : null,
                on : [ { events : "mousedown", update : "slice(ydom)" } ]
            },{
                name : "nodehover",
                value : null,
                on : [
                    {
                        events : icon ? "@nodelabel:mouseover, @iconnode:mouseover" :"@nodelabel:mouseover, @node:mouseover",
                        update : "datum.index"
                    },{
                        events : icon ? "nodelabel:mouseout, @iconnode:mouseout" : "@nodelabel:mouseout, @node:mouseout",
                        update : "null"
                    }
                ]
            },{
                name : "nodefocus",
                value : null,
                on : [
                    {
                        events : icon ? "@nodelabel:click, @iconnode:click" : "@nodelabel:click, @node:click",
                        update : "datum.index"
                    },{
                        events : "mouseup[!event.item]",
                        update : "null"
                    }
                ]
            },{
                name : "noderearrange",
                value : null,
                on : [
                    { events : icon ? "@nodelabel:dblclick, @iconnode:dblclick" : "@nodelabel:dblclick, @node:dblclick", update : "datum.index" },
                    { events : "mouseup[!event.item]", update : "null" }
                ]
            },{
                name : "blankclick",
                value : true,
                on : [
                    {
                        events : "mouseup[!event.item]",
                        update : "true",
                        force : true
                    }
                ]
            },{
                name : "shiftstatus",
                value : false,
                on : [
                    {
                        events : "@legendSymbol:click, @legendLabel:click",
                        update : "event.shiftKey",
                        force : true
                    }
                ]
            },{
                name : "legendclick",
                value : null,
                on : [
                    {
                        events : "@legendSymbol:click, @legendLabel:click, @newLegendSymbol:click, @newLegendLabel:click",
                        update : "{value : datum.label}",
                        force : true
                    }
                ]
            }
        ],
        data : [
            {
                name : "selected",
                on : [
                    { trigger : "blankclick", remove : true },
                    { trigger : "!shiftstatus", remove : true },
                    { trigger : "!shiftstatus && legendclick", "insert" : "legendclick" },
                    { trigger : "shiftstatus && legendclick", "toggle" : "legendclick" }
                ]
            }
        ],
        scales : [
            { name : "xscale", zero : false, domain : { signal : "xdom" }, range : { signal : "xrange" } },
            { name : "yscale", zero : false, domain : { signal : "ydom" }, range : { signal : "yrange" } }
        ],
        marks : [
        ],
        axes : [
            {
                scale : "xscale",
                orient : "top",
                offset : { signal : "xoffset" },
                tickOpacity : { value : 0 },
                labelOpacity : { value : 0 }
            },{
                scale : "yscale",
                orient : "right",
                offset : { signal : "yoffset" },
                tickOpacity : { value : 0 },
                labelOpacity : { value : 0 }
            }
        ]
    };
    return graph;
}