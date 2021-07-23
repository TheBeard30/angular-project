import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {fishboneData} from './fishbone.data';

// import * as d3 from 'd3';
declare const d3;

@Component({
  selector: 'app-fishbone',
  templateUrl: './fishbone.component.html',
  styleUrls: ['./fishbone.component.less']
})
export class FishboneComponent implements OnInit {

  @ViewChild('fish') fishboneEle: ElementRef; 

  constructor() { }

  ngOnInit(): void {

    
  }

  ngAfterViewInit(){
    // create the configurable selection modifier
    //@ts-ignore
    const fishbone = d3.fishbone();

    
      
    // load the data
    //@ts-ignore
    // the most reliable way to get the screen size
    const size = (function(){
      return {width: this.offsetWidth, height: 900};
    }).bind(this.fishboneEle.nativeElement),
  
    svg = d3.select(this.fishboneEle.nativeElement)
    .append("svg")
    // firefox needs a real size
    .attr(size())
    // set the data so the reusable chart can find it
    //@ts-ignore
    .datum(fishboneData)
    // set up the default arrowhead
    .call(fishbone.defaultArrow)
    // call the selection modifier
    .call(fishbone);
    
    // this is the actual `force`: just start it
    fishbone.force().start();
    setTimeout(() => {
      fishbone.force()
        .size([size().width, size().height])
        .start();
      svg.attr(size())
    },16);
  
  
  // handle resizing the window
  d3.select(window).on("resize", function(){
    fishbone.force()
      .size([size().width, size().height])
      .start();
    svg.attr(size())
  });
  }

}
