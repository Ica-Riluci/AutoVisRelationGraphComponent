export default function graphMarkGen(icon) {
    var ret = [];
    ret.push(
        {
            name : "bignode",
            zindex : 3,
            type : "symbol",
            from : { data : "bignodes" },
            encode : {
                enter : {
                    tooltip : { signal : "merge({ title : datum.detail.display_name }, datum.detail)" },
                    size : { field : "size" },
                    fill : icon ? { value : "white" } : { scale : "nodeclr", field : "type" },
                    stroke : { scale : "nodeclr", field : "type" }
                },
                update : {
                    strokeWidth : icon ? { value : 0} : [
                        { test : "datum.index === nodehover || datum.index === nodefocus", value : 7 },
                        { value : 0 }
                    ],
                    opacity : [
                        { test : "!length(data('selected')) || indata('selected', 'value', datum.type)", value : 1 },
                        { value : 0.2 }
                    ],
                    xc : { scale : "xscale", field : "x" },
                    yc : { scale : "yscale", field : "y" }}
            }
        },{
            name : "smallnode",
            zindex : 3,
            type : "symbol",
            from : { data : "smallnodes" },
            encode : {
                enter : {
                    tooltip : { signal : "merge({ title : datum.detail.display_name }, datum.detail)" },
                    size : { field : "size" },
                    fill : icon ? { value : "white" } : { scale : "nodeclr", field : "type" },
                    stroke : { scale : "nodeclr", field : "type" }
                },
                update : {
                    strokeWidth : icon ? { value : 0 } : [
                        { test : "datum.index === nodehover || datum.index === nodefocus", value : 2 },
                        { value : 0 }
                    ],
                    opacity : [
                        { test : "!length(data('selected')) || indata('selected', 'value', datum.type)", value : 1 },
                        { value : 0.2 }
                    ],
                    xc : { scale : "xscale", field : "x" },
                    yc : { scale : "yscale", field : "y" }
                }
            }
        }
    );
    console.log('insert circle marks', ret);
    if (icon) {
        ret.push({
            name : "iconnode",
            zindex : 4,
            type : "text",
            from : { data : "nodes" },
            encode : {
                enter : {
                    tooltip : { signal : "merge({ title : datum.detail.display_name }, datum.detail)" },
                    text : [
                        { test : "indexof(domain('emojiscale'), datum.type) >= 0", scale : "emojiscale", field : "type" },
                        { value : "❓" }
                    ],
                    align : { value : "center" },
                    baseline : { value : "middle" }
                },
                update : {
                    opacity : [
                        { test : "!length(data('selected')) || indata('selected', 'value', datum.type)", value : 1 },
                        { value : 0.2 }
                    ],
                    xc : { scale : "xscale", field : "x" },
                    yc : { scale : "yscale", field : "y" },
                    fontSize : [
                        { test : "datum.index === nodehover || nodefocus == datum.index", signal : "sqrt(datum.size) * 0.9" },
                        { signal : "sqrt(datum.size) * 0.8" }
                    ]
                }
            }
        });
        console.log('insert emoji marks', ret);
    }
    ret.push({
        zindex : 1,
        name : "link",
        type : "rule",
        from : { data : "links" },
        encode : {
            enter : {
                stroke : { scale : "linkclr", field : "type" },
                strokeWidth : { value : 2 }
            },
            update : {
                x : { scale : "xscale", field : "sx" },
                x2 : { scale : "xscale", field : "tx" },
                y : { scale : "yscale", field : "sy" },
                y2 : { scale : "yscale", field : "ty" },
                strokeOpacity : [
                    { test : "nodehover === null && nodefocus == null && !length(data('selected'))", value : 0.8 },
                    { test : "!length(data('selected')) && (datum.si === nodehover || datum.ti === nodehover || datum.si === nodefocus || datum.ti === nodefocus)", value : 1 },
                    { test : "indata('selected', 'value', datum.s.type) && indata('selected', 'value', datum.t.type)", value : 1},
                    { value : 0.07 }
                ]
            }
        }
    },{
        zindex : 2,
        name : "arrow",
        type : "symbol",
        from : { data : "links" },
        encode : {
            enter : {
                shape : { value : "triangle" },
                size : { value : 100 },
                fill : { scale : "linkclr", field : "type" }
            },
            update : {
                opacity :[
                    { test : "nodehover === null && nodefocus == null && !length(data('selected'))", value : 0.8 },
                    { test : "!length(data('selected')) && (datum.si === nodehover || datum.ti === nodehover || datum.si === nodefocus || datum.ti === nodefocus)", value : 1 },
                    { test : "indata('selected', 'value', datum.s.type) && indata('selected', 'value', datum.t.type)", value : 1},
                    { value : 0.07 }],
                xc : [
                    { test : "datum.sx === datum.tx", signal : "scale('xscale', datum.tx)" },
                    { test : "datum.sx < datum.tx", signal : "scale('xscale', datum.tx) - (sqrt(datum.t.size) / 2 + 10 / 3 * sqrt(3)) * sin(PI / 2 - atan2(-scale('yscale', datum.ty) + scale('yscale', datum.sy), scale('xscale', datum.tx) - scale('xscale', datum.sx)))" },
                    { signal : "scale('xscale', datum.tx) - (sqrt(datum.t.size) / 2 + 10 / 3 * sqrt(3)) * sin(-PI / 2 - atan2(scale('yscale', datum.ty) - scale('yscale', datum.sy), scale('xscale', datum.sx) - scale('xscale', datum.tx)))" }
                ],
                yc : [
                    { test : "datum.sy < datum.ty && datum.sx === datum.tx", signal : "scale('yscale', datum.ty) + sqrt(datum.t.size) / 2" },
                    { test : "datum.sy > datum.ty && datum.sx === datum.ty", signal : "scale('yscale', datum.ty) - sqrt(datum.t.size) / 2" },
                    { test : "datum.sx < datum.tx", signal : "scale('yscale', datum.ty) + (sqrt(datum.t.size) / 2 + 10 / 3 * sqrt(3)) * cos(PI / 2 - atan2(-scale('yscale', datum.ty) + scale('yscale', datum.sy), scale('xscale', datum.tx) - scale('xscale', datum.sx)))" },
                    { signal : "scale('yscale', datum.ty) + (sqrt(datum.t.size) / 2 + 10 / 3 * sqrt(3)) * cos(-PI / 2 - atan2(scale('yscale', datum.ty) - scale('yscale', datum.sy), scale('xscale', datum.sx) - scale('xscale', datum.tx)))" }
                ],
                angle : [
                    { test : "datum.sx === datum.tx && datum.ty > datum.sy", value : 0},
                    { test : "datum.sx === datum.tx && datum.ty < datum.sy", value : 180},
                    { test : "datum.sx < datum.tx", signal : "90 - atan2(-scale('yscale', datum.ty) + scale('yscale', datum.sy), scale('xscale', datum.tx) - scale('xscale', datum.sx)) * 180 / PI" },
                    { test : "datum.sx > datum.tx", signal : "-90 - atan2(scale('yscale', datum.ty) - scale('yscale', datum.sy), scale('xscale', datum.sx) - scale('xscale', datum.tx)) * 180 / PI" }
                ]
            }
        }
    });
    return ret;
}