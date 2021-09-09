import { Graph } from "@antv/x6";

export class ERUtil{

  /**
   * 添加节点
   * @param {Graph}  graph  图对象 
   * @param {Array}  nodes  节点数组
   */  
  static addNodes(graph: Graph,nodes: Array<{[p: string]: any}>): void{
    nodes.forEach((node,index) => {
      graph.addNode({
        id: node.id,
        shape: 'custom-rect',
        x: node.x,
        y: node.y,
        label: `${node.label}${index}` ,
        content: node.content
      });
    });
  }

  /**
   * 添加边
   * @param {Graph}  graph     图对象
   * @param {Array}  edgeList  边数组
   */
  static addEdge(graph: Graph,edgeList: Array<{source: string,target: string}>): void{
    
    edgeList.forEach(edge => {
      graph.addEdge({
        shape: 'edge',
        source: edge.source,
        target: edge.target
      });
    });
  }
}