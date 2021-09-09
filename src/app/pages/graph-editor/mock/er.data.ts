const erData = [
    {
        id: 'node_1',
        x: 60,
        y: 40,
        label: '开始',
        content: '测试1'
    },
    {
        id: 'node_2',
        x: 200,
        y: 40,
        label: '中间',
        content: '测试2',
    },
    {
        id: 'node_3',
        x: 400,
        y: 40,
        label: '结束',
        content: '测试3'
    }
];

const erEdge = [
    {source: 'node_1', target: 'node_2'},
    {source: 'node_2', target: 'node_3'}
]; 

export {erData,erEdge};