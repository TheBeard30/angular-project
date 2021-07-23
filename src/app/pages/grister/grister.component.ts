import { Component, OnInit } from '@angular/core';
// import { CompactType, DisplayGrid, GridsterConfig, GridsterItem, GridType } from 'angular-gridster2';

@Component({
  selector: 'app-grister',
  templateUrl: './grister.component.html',
  styleUrls: ['./grister.component.less']
})
export class GristerComponent implements OnInit {

  // options: GridsterConfig = {
  //   compactType: CompactType.CompactUp,
  //   displayGrid: DisplayGrid.Always,
  //   gridType: GridType.VerticalFixed,
  //   minCols: 24,
  //   maxCols: 24,
  //   minRows: 1,
  //   maxRows: 999,
  //   maxItemCols: 24,
  //   minItemCols: 1,
  //   minItemRows: 1,
  //   fixedRowHeight: 30,
  //   // disablePushOnDrag: true,
  //   pushItems: true,
  //   swap: true,
  //   // swapWhileDragging: true,
  //   draggable: {
  //     enabled: true,
  //     // dropOverItems: true,
  //     // dropOverItemsCallback: (sourceItem, targetItem, grid) => {
  //     //   let sourceX = sourceItem.x;
  //     //   let sourceY = sourceItem.y;
  //     //   sourceItem.x = targetItem.x;
  //     //   sourceItem.y = targetItem.y;
  //     //   targetItem.x = sourceX;
  //     //   targetItem.y = sourceY;
  //     //   let sourceIndex = this.gridsterList.findIndex(val => val.label == sourceItem.label);
  //     //   let targetIndex = this.gridsterList.findIndex(val => val.label == targetItem.label);

  //     //   let temp;
  //     //   temp = this.gridsterList[sourceIndex];
  //     //   this.gridsterList[sourceIndex] = this.gridsterList[targetIndex];
  //     //   this.gridsterList[targetIndex] = temp;
  //     //   // this.gridsterList = this.gridsterList.slice();
        
  //     //   // console.log(this.gridsterList);
  //     //   // console.log(sourceItem);
  //     //   // console.log(targetItem);
  //     //   // console.log(grid);

        
  //     //   // this.gridsterList = this.gridsterList.slice();
  //     //   console.log(this.gridsterList);
  //     // }

  //   },
  //   resizable: {
  //     enabled: true
  //   },
    
  // };


  // gridsterList:Array<GridsterItem | any> = [
  //     {cols: 24, rows: 2,label: 'test1'},
  //     {cols: 24, rows: 2,label: 'test2'},
  //     {cols: 24, rows: 2,label: 'test3'},
  //     {cols: 24, rows: 2,label: 'test4'},
  //     {cols: 24, rows: 2,label: 'test5'},
  //     {cols: 24, rows: 2,label: 'test6'},
  // ];

  constructor() { }

  ngOnInit(): void {
  }

}
