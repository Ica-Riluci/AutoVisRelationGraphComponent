export default function legendSetGen(emoji) {
    var ret = [];
    if (!emoji) {
        ret.push({
            name : "legends",
            values : [
                { label : "S类故障", value : "#c37d36" },
                { label : "部件", value : "#9f5554" },
                { label : "问题", value : "#d99bcb" },
                { label : "检查项目", value : "#6ce66b" },
                { label : "故障诊断", value : "#1a9185" },
                { label : "故障起因", value : "#7ec1bb" },
                { label : "问题和检查项目", value : "#07e364" },
                { label : "故障代码类故障", value : "#8d3638" },
                { label : "故障内容", value : "#d0b165" },
                { label : "机器故障", value : "#122599"},
                { label : "控制器反应", value : "#3be774" },
                { label : "相关信息", value : "#da19ea" },
                { label : "诊断操作", value : "#c3d9cc" },
                { label : "相关图片", value : "#bbccee" },
                { label : "标准值", value : "#9d8e1c" },
                { label : "检查系统", value : "#971130" },
                { label : "故障状态", value : "#031597" },
                { label : "诊断前检查", value : "#d990e8" },
                { label : "客户", value : "#3c3d76" },
                { label : "客户类型", value : "#54559f" },
                { label : "客户等级", value : "#6c6ecb" },
                { label : "联系人", value : "#9b9ddb" },
                { label : "工单", value : "#69783f" },
                { label : "工单处理时长", value : "#91a158" },
                { label : "故障解决的去现场次数", value : "#bbce71" },
                { label : "作业形态", value : "#d1da9e" },
                { label : "方案", value : "#836d38" },
                { label : "质保状态", value : "#b39c43" },
                { label : "故障描述", value : "#d0b156" },
                { label : "出库单", value : "#dfc996" },
                { label : "零件", value : "#744e3b" },
                { label : "技术前台", value : "#974b4b" },
                { label : "业务前台", value : "#c7616a" },
                { label : "服务派工", value : "#d3959a" },
                { label : "现场工作", value : "#6e4370" },
                { label : "仓储人员", value : "#925291" },
                { label : "现场服务人员", value : "#b76cb9" },
                { label : "故障一次解决率", value : "#cd9cd3" },
                { label : "服务数量", value : "#b0dce4" },
                { label : "终端报警", value : "#6cbccd" },
                { label : "O2O", value : "#c6c6c6" },
                { label : "挖掘机", value : "#e6b5d0" },
                { label : "服务区", value : "#b89a93" },
                { label : "当前所在地区", value : "#609f3a" },
                { label : "吨级", value : "#e38e24" },
                { label : "机型", value : "#b4c6e6" },
                { label : "车龄", value : "#39a89b" },
                { label : "工作种类", value : "#a0f963" },
                { label : "品牌", value : "#ee3284" },
                { label : "代理店", value : "#d9aeff" },
                { label : "服务成本", value : "#123456" },
                { label : "人", value : "#654321" }
            ]
        });
    } else {
        ret.push({
            name : "legends",
            values : [
                { label : "S类故障", value : "🔖" },
                { label : "部件", value : "⚙️" },
                { label : "问题", value : "🙋" },
                { label : "检查项目", value : "🔍" },
                { label : "故障诊断", value : "💊" },
                { label : "故障起因", value : "💡" },
                { label : "问题和检查项目", value : "🧐" },
                { label : "故障代码类故障", value : "🏷" },
                { label : "故障内容", value : "📋" },
                { label : "机器故障", value : "⚠️"},
                { label : "控制器反应", value : "🕹" },
                { label : "相关信息", value : "ℹ️" },
                { label : "诊断操作", value : "🛠" },
                { label : "相关图片", value : "🏙" },
                { label : "标准值", value : "📏" },
                { label : "检查系统", value : "🖥" },
                { label : "故障状态", value : "📉" },
                { label : "诊断前检查", value : "🔨" },
                { label : "客户", value : "🤵"},
                { label : "客户类型", value : "⛳" },
                { label : "客户等级", value : "💎" },
                { label : "联系人", value : "📗" },
                { label : "工单", value : "📝" },
                { label : "工单处理时长", value : "⌛" },
                { label : "故障解决的去现场次数", value : "⛑️" },
                { label : "作业形态", value : "⚓" },
                { label : "方案", value : "📖" },
                { label : "质保状态", value : "📜" },
                { label : "故障描述", value : "🖊" },
                { label : "出库单", value : "📃" },
                { label : "零件", value : "🔩" },
                { label : "技术前台", value : "💁‍♂️" },
                { label : "业务前台", value : "💁" },
                { label : "服务派工", value : "🌯" },
                { label : "现场工作", value : "🎬" },
                { label : "仓储人员", value : "💂" },
                { label : "现场服务人员", value : "👷" },
                { label : "故障一次解决率", value : "💯" },
                { label : "服务数量", value : "#️⃣" },
                { label : "终端报警", value : "🚨" },
                { label : "O2O", value : "🔗" },
                { label : "挖掘机", value : "🚛" },
                { label : "服务区", value : "🗺️" },
                { label : "当前所在地区", value : "📍" },
                { label : "吨级", value : "⚖️" },
                { label : "机型", value : "🔑" },
                { label : "车龄", value : "📅" },
                { label : "工作种类", value : "🗃" },
                { label : "品牌", value : "®️" },
                { label : "代理店", value : "🎩" },
                { label : "服务成本", value : "💸" },
                { label : "人", value : "👤" }
            ]
        });
    }
    ret.push({
        name : "actlegends",
        source : "legends",
        transform : [
            {
                type : "filter",
                expr : "indata('nodes', 'type', datum.label)"
            }
        ]
    },{
        name : "llegends",
        values : [
            { label : '产生于', value : '#9ccbd6' },
            { label : '因为', value : '#d07d28' },
            { label : '对应', value : '#e1b776' },
            { label : '确认', value : '#658f4a' },
            { label : '包含', value : '#99c778' },
            { label : '导致', value : '#aa9531' },
            { label : '表现为', value : '#e8cc64' },
            { label : '状态为', value : '#649792' },
            { label : '参见', value : '#95bab5' },
            { label : '属于', value : '#c75757' },
            { label : '发生于', value : '#e89b96' },
            { label : '检查', value : '#756967' },
            { label : '诊断', value : '#b5aeab' },
            { label : '具有', value : '#bf7192' },
            { label : '使用', value : '#ecbcd1' },
            { label : '消耗', value : '#a3789f' },
            { label : '施工', value : '#c8a3b6' },
            { label : '隶属于', value : '#937560' },
            { label : '产生', value : '#ceb7a4' },
            { label : '管理', value : '#5c78a5' },
            { label : '考核', value : '#9c2bf6' },
            { label : '指导', value : '#e07dc8' },
            { label : '处理', value : '#e17b01' },
            { label : '创建', value : '#a11f4a' },
            { label : '备货', value : '#ca41d9' },
            { label : '领料', value : '#aacc3f' },
            { label : '指派', value : '#22cc64' },
            { label : '处于', value : '#642df9' },
            { label : '来源', value : '#b59a3e' },
            { label : '生成', value : '#57c775' },
            { label : '执行', value : '#98eb69' }
        ]
    },{
        name : "actllegends",
        source : "llegends",
        transform : [
            { type : "filter", expr : "indata('links', 'type', datum.label)" }
        ]
    });
    return ret;
}