/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Graph } from '@antv/x6';

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
  }

  ngAfterViewInit(): void{
    this.graph = new Graph({
      container: this.er.nativeElement,
      width: 1160,
      height: 550,
      grid: true,
      background: {
          color: 'rgba(255, 255, 128, 0.5)'
      }
    });
  
  }

}
