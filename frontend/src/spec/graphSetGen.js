export default function graphSetGen(scalable, big_min_size, icon) {
    var ret = [];
    ret.push({
        name : "node_o"
    });
    if (scalable) {
        ret.push({
            name : "nodes",
            source : "node_o",
            transform : [
                {
                    type : "formula",
                    expr : "datum.size * layoutZoom * layoutZoom", as : "size"
                }
            ]
        });
    } else {
        ret.push({
            name : "nodes",
            source : "node_o"
        });
    }
    ret.push({
        name : "links",
        transform : [
            {
                type : "lookup",
                from : "nodes",
                key : "index",
                fields : [ "source", "target" ],
                as : [ "s", "t" ]
            },{
                type : "filter",
                expr : "datum.s && datum.t"
            },{
                type : "project",
                fields : [ "s", "t", "s.x", "s.y", "t.x", "t.y", "linkType", "s.index", "t.index" ],
                as : [ "s", "t", "sx", "sy", "tx", "ty", "type", "si", "ti" ]
            }
        ]
    });
    return ret;
}