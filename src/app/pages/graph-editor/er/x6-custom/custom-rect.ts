import { Graph, ObjectExt } from '@antv/x6';
import { Node } from '@antv/x6';

export class CustomRect extends Node{
    
}




export function registerCustomNode(){
    CustomRect.config({
        width: 100,
        height: 200,
        markup: [
            {
                tagName: 'rect',
                selector: 'body'
            },
            {
                tagName: 'text',
                selector: 'label'
            }
        ],
        attrs: {
            body: {
                width: 100,
                height: 200,
                fill: '#ffffff',     // 填充颜色
                stroke: '#333333',   // 边框颜色
                strokeWidth: 2,
            },
            label: {
                x: 30,
                y: 20,
                fontSize: 20,
                fill: '#333333',               
                textAnchor: 'middle',
                textVerticalAnchor: 'middle',
            },
        },

        propHooks: (metadata) => {
            console.log(metadata);
            const {label,content, ...others} = metadata;
            if(label){
                ObjectExt.setByPath(others,'attrs/text/text',label);
            }
            return others;
        }
    });


    
    Graph.registerNode('custom-rect',CustomRect);
}