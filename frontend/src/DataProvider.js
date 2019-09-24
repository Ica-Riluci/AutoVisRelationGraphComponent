export default function DataProvider(index) {
    const data = [
        {"links":[{"source" : "135809", "target" : "72179", "linkType" : "属于"},{"source" : "94954", "target" : "72179", "linkType" : "属于"},{"source" : "94954", "target" : "135809", "linkType" : "包含" }],"node_o":[{"cover":2,"detail":{"display_name":"当前所在地区:河北唐山市迁安市马兰庄新水村,水厂村附近","domain_name":"维修服务","type":"当前所在地区","value":"河北唐山市迁安市马兰庄新水村,水厂村附近"},"index":"72179","name":"河北唐山市迁安市马兰庄新水村,水厂村附近","size":1500,"type":"部件","weight":1,"x":0.9482416045960672,"y":0.05882358315943396},{"cover":2,"detail":{"display_name":"当前所在地区:河北唐山市滦南县","domain_name":"维修服务","type":"当前所在地区","value":"河北唐山市滦南县"},"index":"94954","name":"河北唐山市滦南县","size":2900,"type":"当前所在地区","weight":1,"x":0.4999999689108916,"y":0.9411764588319316},{"cover":2,"detail":{"display_name":"客户:唐山个体","domain_name":"维修服务","type":"部件","value":"D4498697FC4F3645BA08FDA3AC0BBB7B","住所位置":"","办公地位置":"河北省唐山市唐山市辖区","客户号":"TC20190411110557989","客户名称":"唐山个体","工地位置":""},"index":"135809","name":"唐山个体","size":10000,"type":"客户","weight":1,"x":0.051758395403932705,"y":0.05882354116806838}]},
        {"table":[
            {"category": "A", "amount": 28},
            {"category": "B", "amount": 55},
            {"category": "C", "amount": 43},
            {"category": "D", "amount": 91},
            {"category": "E", "amount": 81},
            {"category": "F", "amount": 53},
            {"category": "G", "amount": 19},
            {"category": "H", "amount": 87}
        ]}
    ];
    index = typeof index !== 'undefined' ? index : 0;
    if (index >= data.length) {
        console.log("No such data");
        return {};
    }
    return data[index];
}