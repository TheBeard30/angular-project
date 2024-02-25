import {AfterViewInit, Component, ElementRef, Injector, OnInit, Renderer2, ViewChild} from '@angular/core';
import { Graph } from '@antv/x6';
import {ER_MOCK_DATA, erData, erEdge} from '../mock/er.data';
import { registerCustomNode } from './x6-custom';
import {getConfig, labelContentSubject} from './graph.config';
import '@antv/x6-angular-shape';
import {DataTableWidget} from "./components";
import {TableData} from "./types";


@Component({
  selector: 'app-er',
  templateUrl: './er.component.html',
  styleUrls: ['./er.component.less']
})
export class ERComponent implements OnInit,AfterViewInit {

  graph!: Graph;

  @ViewChild('er', {static: true,read: ElementRef}) er: ElementRef;
  @ViewChild('minimap',{static: true,read: ElementRef}) minimapRef: ElementRef;

  labelContent: HTMLElement;

  constructor(
    private elementRef: ElementRef,
    private renderer2: Renderer2,
    private injector: Injector
  ) { }

  ngOnInit(): void {
    registerCustomNode();
    this.registerPortLayout();
    this.registerAngularNode();
    labelContentSubject.subscribe(content => {
      this.labelContent = content;
    });
  }

  ngAfterViewInit(): void{
    setTimeout(() => {
      this.graph = new Graph(getConfig(this.er.nativeElement,this.minimapRef.nativeElement));
      ER_MOCK_DATA.forEach((v,i) => {
        this.graph.addNode({
          data: {
            ngArguments: {
              data: v
            }
          },
          x: 300 * (i + 1),
          y: 100 ,
          width: 160,
          height: 30,
          shape: 'angular-shape',
          componentName: 'table-widget',
          ports: this.getNodePorts(v as any),
        });
      });
      this.edgeConnectListener(this.graph);
    });


  }

  /**
   * @description 注册angular类型的自定义节点
   */
  registerAngularNode(){
    Graph.registerAngularContent('table-widget',{
      injector: this.injector,
      content: DataTableWidget
    });
  }

  /**
   * @description 注册连接桩的布局方式
   */
  registerPortLayout(){
    Graph.registerPortLayout('portPosition',(args): any => {
      return args.map((_, index) => {
        return {
          position: {
            x: 0,
            y: 32 + index * 33,
          },
          angle: 0,
        }
      })
    },true);
  }

  /**
   * @description 获取节点的连接桩
   * @param table
   */
  getNodePorts(table: TableData): any{
    const groups = {} as any;
    groups[`group`] = {
      markup: [
        {
          tagName: 'rect',
          selector: 'left',
        },
      ],
      zIndex: -1,
      attrs: {
        left: {
          x: -2,
          width: 164,
          height: 30,
          fillOpacity: 0,
          stroke: 'rgba(255,255,255,0)',
          magnet: true,
          fill: 'rgba(255,255,255,0)',
        }
      },
      position: 'portPosition'
    };
    const items = [];
    table.fieldList.forEach((f,i) => {
      const item = {
        id: `port-${f.name}-${i + 1}`,
        group: `group`
      };
      items.push(item);
    });
    return {groups,items};
  }


  edgeConnectListener(graph: Graph): void{
    graph.on('edge:connected',(args) => {
      const container = document.createElement('div');
      container.style.padding = '10px';
      container.classList.add('edge-label-container');
      const element = document.createElement('div');
      element.classList.add('diamond');
      container.appendChild(element);

      const rightElement = document.createElement('div');
      rightElement.classList.add('diamond');
      rightElement.classList.add('right');
      const subElement = document.createElement('div');
      subElement.classList.add('cross');
      rightElement.appendChild(subElement);
      container.appendChild(rightElement);

      this.labelContent.appendChild(container);
    });
  }

  openCamera() {
    const element = this.elementRef.nativeElement.querySelector('#video');
    navigator.mediaDevices.getUserMedia({video: true}).then(stream =>{
      element.srcObject = stream
      element.onloadedmetadata = function(e) {
        element.play();
        element.muted = true;
      };
    } );
  }

  export() {
    const json = this.graph.toJSON();
    console.log(json);
  }
}
