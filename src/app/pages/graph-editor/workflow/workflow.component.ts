import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Graph } from '@antv/x6';
import { graphConfig } from './graph.config';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.less']
})
export class WorkflowComponent implements OnInit,AfterViewInit {

  @ViewChild('container') graphContainer: ElementRef;

  graph: Graph;

  constructor(
    private elementRef: ElementRef,
    private renderer2: Renderer2
  ) { }

  ngOnInit(): void { 
  }


  panels = [
    {name: 'li', active: true, disabled: false},
    {name: 'zhang', active: false, disabled: false},
    {name: 'wang', active: false, disabled: false},
  ];

  ngAfterViewInit(): void{
    const wrapper = this.elementRef.nativeElement.querySelector('.wrapper');
    const graph = new Graph({
      container: this.graphContainer.nativeElement,
      width: wrapper.offsetWidth - 200,
      height: wrapper.offsetHeight + 64,
      ...graphConfig
    });
  }

}
