export default function coverMarkGen(scalable, icon, big_min_size) {
    var ret = [];
    console.log("generating cover");
    ret.push({
        name : "nodelabel",
        zindex : 4,
        type : "text",
        from : { data : "nodes" },
        encode : {
            enter : {
                tooltip : { signal : "merge({ title : datum.detail.display_name }, datum.detail)" },
                text : { signal : "datum.name" },
                fontSize : { value : 12 }
            },
            update : {
                opacity : [
                    { test : "!length(data('selected')) || indata('selected', 'value', datum.type)", value : 1 },
                    { value : 0.05 }
                ],
                fill : scalable ? (icon ? { value : "black" } : [
                    { test : "datum.size * sizeZoom * sizeZoom < " + big_min_size.toString(), value : "black" },
                    { value : "white" }
                ]) : (icon ? { value : "black" } : [
                    { test : "datum.size < " + big_min_size.toString(), value : "black" },
                    { value : "white" }
                ]),
                xc : { scale : "xscale", field : "x" },
                yc : { scale : "yscale", field : "y" },
                align : scalable ? (icon ? { value : "center" } : [
                    { test : "datum.size * sizeZoom * sizeZoom < " + big_min_size.toString(), value : "left" },
                    { value : "center" }
                ]) : (icon ? { value : "center" } : [
                    { test : "datum.size < " + big_min_size.toString(), value : "left" },
                    { value : "center" }
                ]),
                baseline : scalable ? (icon ? { value : "middle" } : [
                    { test : "datum.size * sizeZoom * sizeZoom < " + big_min_size.toString(), value : "top" },
                    { value : "middle" }
                ]) : (icon ? { value : "middle" } : [
                    { test : "datum.size < " + big_min_size.toString(), value : "top" },
                    { value : "middle" }
                ]),
                limit : scalable ? (icon ? { value : 0 } : [
                    { test : "datum.size * sizeZoom * sizeZoom < " + big_min_size.toString(), value : 0 },
                    { signal : "sqrt(datum.size * sizeZoom * sizeZoom) - 5" }
                ]) : (icon ? { value : 0 } : [
                    { test : "datum.size < " + big_min_size.toString(), value : 0 },
                    { signal : "sqrt(datum.size) - 5" }
                ]),
                dx : scalable ? (icon ? { value : 0 } : [
                    { test : "datum.size * sizeZoom * sizeZoom < " + big_min_size.toString(), signal : "sqrt(datum.size * sizeZoom * sizeZoom) / 2 + 1" },
                    { value : 0 }
                ]) : (icon ? { value : 0 } : [
                    { test : "datum.size < " + big_min_size.toString(), signal : "sqrt(datum.size) / 2 + 1" },
                    { value : 0 }
                ]),
                dy : scalable ? (icon ? { signal : 'sqrt(datum.size * sizeZoom * sizeZoom) / 2 + 10' } : [
                    { test : "datum.size * sizeZoom * sizeZoom < " + big_min_size.toString(), signal : "sqrt(datum.size * sizeZoom * sizeZoom) / 2 + 1" },
                    { value : 0 }
                ]) : (icon ? { signal : 'sqrt(datum.size) / 2 + 10' } : [
                    { test : "datum.size < " + big_min_size.toString(), signal : "sqrt(datum.size) / 2 + 1" },
                    { value : 0 }
                ])
            }
        }
    });
    if (icon) {
        ret.push(
            {
                name : "legendLabel",
                zindex : "100",
                type : "text",
                from : { data : "actlegends" },
                encode : {
                    enter : {
                        text : { signal : "scale('emojiscale', datum.label) + ' ' + datum.label" },
                        fontSize : { value : 12 },
                        limit : { value : 96 },
                        tooltip : { signal : "datum.label" },
                        x : { signal : "width - 100" },
                        y : { signal : "indexof(domain('actemoji'), datum.label) * 16" }
                    },
                    update : {
                        opacity : [
                            { test : "!length(data('selected')) || indata('selected', 'value', datum.label)", value : 1 },
                            { value : 0.15 }
                        ]
                    }
                }
            },{
                name : "newLegendLabel",
                zindex : 100,
                type : "text",
                from : { data : "new_legends" },
                encode : {
                    enter : {
                        text : { signal : "'❓ ' + datum.label" },
                        fontSize : { value : 12 },
                        limit : { value : 96 },
                        tooltip : { signal : "datum.label" },
                        x : { signal : "width - 100" },
                        y : { signal : "length(domain('actemoji')) * 16 + (datum.index - 1) * 16" }
                    },
                    update : {
                        opacity : [
                            { test : "!length(data('selected')) || indata('selected', 'value', datum.label)", value : 1 },
                            { value : 0.15 }
                        ]
                    }
                }
            },{
                zindex : 99,
                name : "linkLegendSymbol",
                type : "rule",
                from : { data : "actllegends" },
                encode : {
                    enter : {
                        stroke : { field : "value" },
                        y : { signal : "length(domain('actemoji')) * 16 + 10 + length(data('new_legends')) * 16 + indexof(domain('linkclr'), datum.label) * 16" },
                        y2 : { signal : "length(domain('actemoji')) * 16 + 10 + length(data('new_legends')) * 16 + indexof(domain('linkclr'), datum.label) * 16" },
                        strokeWidth : { value : 2 },
                    },
                    update : {
                        x : { signal : "width - 98" },
                        x2 : { signal : "width - 90" }
                    }
                }
            },{
                zindex : 99,
                name : "linkLegendLabel",
                type : "text",
                from : { data : "actllegends" },
                encode : {
                    enter : {
                        fontSize : { value : 12 },
                        text : { field : "label" },
                        y : { signal : "length(domain('actemoji')) * 16 + 10 + length(data('new_legends')) * 16 + indexof(domain('linkclr'), datum.label) * 16" },
                        baseline : { value : "middle" },
                        align : { value : "left" },
                        limit : { value : 83 },
                        tooltip : { signal : "datum.label" }
                    },
                    update : {
                        x : { signal : "width - 85" }
                    }
                }
            },{
                zindex : 99,
                name : "newLinkLegendSymbol",
                type : "rule",
                from : { data : "new_llegends" },
                encode : {
                    enter : {
                        stroke : { value : "black" },
                        y : { signal : "length(domain('actemoji')) * 16 + 10 + length(domain('linkclr')) * 16 + (datum.index - 1) * 16" },
                        y2 : { signal : "length(domain('actemoji')) * 16 + 10 + length(domain('linkclr')) * 16 + (datum.index - 1) * 16" },
                        strokeWidth : { value : 2 },
                    },
                    update : {
                        x : { signal : "width - 98" },
                        x2 : { signal : "width - 90" }
                    }
                }
            },{
                zindex : 99,
                name : "newLinkLegendLabel",
                type : "text",
                from : { data : "new_llegends" },
                encode : {
                    enter : {
                        fontSize : { value : 12 },
                        text : { field : "label" },
                        y : { signal : "length(domain('actemoji')) * 16 + 10 + length(domain('linkclr')) * 16 + (datum.index - 1) * 16" },
                        baseline : { value : "middle" },
                        align : { value : "left" },
                        limit : { value : 83 },
                        tooltip : { signal : "datum.label" }
                    },
                    update : {
                        x : { signal : "width - 85" }
                    }
                }
            }
        );
    } else {
        console.log("generating legends")
        ret.push(
            {
                zindex : 100,
                name : "legendSymbol",
                type : "symbol",
                from : { data : "actlegends" },
                encode : {
                    enter : {
                        size : { value : 121 },
                        yc : { signal : "indexof(domain('nodeclr'), datum.label) * 16 + 8" },
                        fill : { field : "value" }
                    },
                    update : {
                        xc : { signal : "width - 94" },
                        opacity : [
                           { test : "!length(data('selected')) || indata('selected', 'value', datum.label)", value : 1},
                           { value : 0.15 }
                        ],
                    }
                }
            },{
                zindex : 100,
                name : "legendLabel",
                type : "text",
                from : { data : "actlegends" },
                encode : {
                    enter : {
                        fontSize : { value : 12 },
                        y : { signal : "indexof(domain('nodeclr'), datum.label) * 16 + 8" },
                        baseline : { value : "middle" },
                        align : { value : "left" },
                        text : { field : "label" },
                        limit : { value : 83 },
                        tooltip : { signal : "datum.label" }
                    },
                    update : {
                        x : { signal : "width - 85" },
                        opacity : [
                           { test : "!length(data('selected')) || indata('selected', 'value', datum.label)", value : 1},
                           { value : 0.15 }
                        ],
                    }
                }
            },{
                zindex : 100,
                name : "newLegendSymbol",
                type : "symbol",
                from : { data : "new_legends" },
                encode : {
                    enter : {
                        size : { value : 121 },
                        yc : { signal : "length(domain('nodeclr')) * 16 + datum.index * 16 - 8" },
                        fill : { value : "black" }
                    },
                    update : {
                        xc : { signal : "width - 94" },
                        opacity : [
                           { test : "!length(data('selected')) || indata('selected', 'value', datum.label)", value : 1},
                           { value : 0.15 }
                        ],
                    }
                }
            },{
                zindex : 100,
                name : "newLegendLabel",
                type : "text",
                from : { data : "new_legends" },
                encode : {
                    enter : {
                        fontSize : { value : 12 },
                        y : { signal : "length(domain('nodeclr')) * 16 + datum.index * 16 - 8" },
                        baseline : { value : "middle" },
                        align : { value : "left" },
                        text : { field : "label" },
                        limit : { value : 83 },
                        tooltip : { signal : "datum.label" }
                    },
                    update : {
                        x : { signal : "width - 85" },
                        opacity : [
                           { test : "!length(data('selected')) || indata('selected', 'value', datum.label)", value : 1},
                           { value : 0.15 }
                        ],
                    }
                }
            },{
                zindex : 99,
                name : "linkLegendSymbol",
                type : "rule",
                from : { data : "actllegends" },
                encode : {
                    enter : {
                        stroke : { field : "value" },
                        y : { signal : "length(domain('nodeclr')) * 16 + 10 + length(data('new_legends')) * 16 + indexof(domain('linkclr'), datum.label) * 16" },
                        y2 : { signal : "length(domain('nodeclr')) * 16 + 10 + length(data('new_legends')) * 16 + indexof(domain('linkclr'), datum.label) * 16" },
                        strokeWidth : { value : 2 },
                    },
                    update : {
                        x : { signal : "width - 98" },
                        x2 : { signal : "width - 90" }
                    }
                }
            },{
                zindex : 99,
                name : "linkLegendLabel",
                type : "text",
                from : { data : "actllegends" },
                encode : {
                    enter : {
                        fontSize : { value : 12 },
                        text : { field : "label" },
                        y : { signal : "length(domain('nodeclr')) * 16 + 10 + length(data('new_legends')) * 16 + indexof(domain('linkclr'), datum.label) * 16" },
                        baseline : { value : "middle" },
                        align : { value : "left" },
                        limit : { value : 83 },
                        tooltip : { signal : "datum.label" }
                    },
                    update : {
                        x : { signal : "width - 85" }
                    }
                }
            },{
                zindex : 99,
                name : "newLinkLegendSymbol",
                type : "rule",
                from : { data : "new_llegends" },
                encode : {
                    enter : {
                        stroke : { value : "black" },
                        y : { signal : "length(domain('nodeclr')) * 16 + 10 + length(domain('linkclr')) * 16 + (datum.index - 1) * 16" },
                        y2 : { signal : "length(domain('nodeclr')) * 16 + 10 + length(domain('linkclr')) * 16 + (datum.index - 1) * 16" },
                        strokeWidth : { value : 2 },
                    },
                    update : {
                        x : { signal : "width - 98" },
                        x2 : { signal : "width - 90" }
                    }
                }
            },{
                zindex : 99,
                name : "newLinkLegendLabel",
                type : "text",
                from : { data : "new_llegends" },
                encode : {
                    enter : {
                        fontSize : { value : 12 },
                        text : { field : "label" },
                        y : { signal : "length(domain('nodeclr')) * 16 + 10 + length(domain('linkclr')) * 16 + (datum.index - 1) * 16" },
                        baseline : { value : "middle" },
                        align : { value : "left" },
                        limit : { value : 83 },
                        tooltip : { signal : "datum.label" }
                    },
                    update : {
                        x : { signal : "width - 85" }
                    }
                }
            }
        );
    }
    return ret;
}