export default function legendScaleGen(emoji) {
    var ret = [];
    if (emoji) {
        ret.push(
            { name : "emojiscale", type : "ordinal", domain : { data : "legends", field : "label" }, range : { data : "legends", field : "value" } },
            { name : "actemoji", type : "ordinal", domain : { data : "actlegends", field : "label" }, range : "category" }
        );
    } else {
        ret.push(
            { name : "nodeclr", type : "ordinal", domain : { data : "actlegends", field : "label" }, range : { data : "actlegends", field : "value" } }
        );
    }
    ret.push(
        { name : "linkclr", type : "ordinal", domain : { data : "actllegends", field : "label"}, range : { data : "actllegends", field : "value" } }
    );
    return ret;
}