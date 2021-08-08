import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { GridListItem, GridsterComponent, IGridsterOptions } from 'angular2gridster';

@Component({
  selector: 'app-other-gridster',
  templateUrl: './other-gridster.component.html',
  styleUrls: ['./other-gridster.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class OtherGridsterComponent implements OnInit {

  constructor() { }

  @ViewChild('ngx_gridster') gridster: GridsterComponent;

  widgets: Array<any> = [
    // {x: 0, y: 0, w: 12, h: 6, label: 'test1'},
    // {x: 12, y: 0, w: 12, h: 6, label: 'test2'},
    // {x: 0, y: 0, w: 12, h: 6, label: 'test3'},
    // {x: 12, y: 0, w: 12, h: 6, label: 'test4'},
  ];
  gridsterOptions: IGridsterOptions = {
    lanes: 24, // how many lines (grid cells) dashboard has
    direction: 'vertical', // items floating direction: vertical/horizontal/none
    floating: true, // default=true - prevents items to float according to the direction (gravity)
    dragAndDrop: true, // possible to change items position by drag n drop
    resizable: true, // possible to resize items by drag n drop by item edge/corner
    useCSSTransforms: true, // Uses CSS3 translate() instead of position top/left - significant performance boost.
    shrink: false,
    cellWidth:40,
    cellHeight: 40,
    widthHeightRatio: 1,
    resizeHandles: {
        s: true,
        e: true,
        n: true,
        w: true,
        se: true,
        ne: true,
        sw: true,
        nw: true,
    },
    responsiveView: true, // turn on adopting items sizes on window resize and enable responsiveOptions
    responsiveDebounce: 500, // window resize debounce time
    responsiveSizes: true,
    lines: {
      visible: true,
      always: true,
      width: 2
    }
  };

  test = 0;

  ngOnInit(): void {
  }


  addWidget(){

    setTimeout(() => this.test++);
    const gridsterItem = {};
    gridsterItem['w'] = 12;
    gridsterItem['h']  = 6;
    gridsterItem['label'] = `test${this.widgets.length + 1}`;
    this.widgets.push(gridsterItem);
    this.gridster.reload();
  }

  itemEnd($event){
    console.log('测试中>>>',$event);
  }


  deleteWidget(index: number){
    this.widgets.splice(index,1);
  }

}
