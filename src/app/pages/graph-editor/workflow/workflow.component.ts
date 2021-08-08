import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Graph } from '@antv/x6';
import { WorkflowService } from '../service/workflow.service';
import { GraphConfig } from './graph.config';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.less']
})
export class WorkflowComponent implements OnInit,AfterViewInit {

  @ViewChild('container') graphContainer: ElementRef;

  graph: Graph;

  // 抽屉是否显示
  drawerVisible: boolean = false;

  originWidth: number;

  constructor(
    private elementRef: ElementRef,
    private renderer2: Renderer2,
    private workflowService: WorkflowService
  ) { }

  ngOnInit(): void{ 
    this.workflowService.subject.subscribe(
      (ev: boolean) => this.graph && this.graph.resizeGraph()
    );
    
  }


  ngAfterViewInit(): void{
    setTimeout(this.graphInit.bind(this),16);
  }


  graphInit(){
    const wrapper = this.elementRef.nativeElement.querySelector('.wrapper');
    const graph = new Graph({
      container: this.graphContainer.nativeElement,
      width: wrapper.offsetWidth,
      height: wrapper.offsetHeight,
      ...GraphConfig
    });

    this.originWidth = wrapper.offsetWidth;
    this.graph = graph;
  }

  changeDrawerVisible(ev){
    ev.stopPropagation();
    this.drawerVisible = !this.drawerVisible;
  }

}
