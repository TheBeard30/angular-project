/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Graph } from '@antv/x6';
import { erData, erEdge } from '../mock/er.data';
import { registerCustomNode } from './custom-rect.node';
import { ERUtil } from './er.util';
import { erConfig } from './graph.config';

@Component({
  selector: 'app-er',
  templateUrl: './er.component.html',
  styleUrls: ['./er.component.less']
})
export class ERComponent implements OnInit,AfterViewInit {

  graph: Graph;


  @ViewChild('er') er: ElementRef;

  constructor(
    private elementRef: ElementRef,
    private renderer2: Renderer2,
  ) { }

  ngOnInit(): void {
    registerCustomNode();
  }

  ngAfterViewInit(): void{
    setTimeout(() => {
      const erElement = this.er.nativeElement;

      const rect: DOMRect = erElement.getBoundingClientRect();

      this.graph = new Graph({
        container: this.er.nativeElement,
        width: rect.width,
        height: rect.height,
        ...erConfig
      });
      ERUtil.addNodes(this.graph,erData);
      ERUtil.addEdge(this.graph,erEdge);
    })
  
  }


  

}
