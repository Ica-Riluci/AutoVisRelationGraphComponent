export default function graphSetGen(scalable, big_min_size, icon) {
    var ret = [];
    ret.push({
        name : "node_o"
    });
    if (scalable) {
        ret.push({
            name : "nodes",
            source : "node_o"
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
    ret.push(
        {
            name : "bignodes",
            source : "nodes",
            transform : [
                {
                    type : "filter",
                    expr : "datum.size >= " + big_min_size.toString()
                }
            ]
        },{
            name : "smallnodes",
            source : "nodes",
            transform : [
                {
                    type : "filter",
                    expr : "datum.size < " + big_min_size.toString()
                }
            ]
        }
    );
    if (icon) {
        ret.push({
            name : "iconnodes",
            source : "nodes",
            transform : [
                {
                    type : "filter",
                    expr : "indexof(domain('emojiscale'), datum.type) >= 0"
                }
            ]
        });
    }
    return ret;
}