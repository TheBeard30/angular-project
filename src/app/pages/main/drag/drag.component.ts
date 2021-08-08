import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag',
  templateUrl: './drag.component.html',
  styleUrls: ['./drag.component.less']
})
export class DragComponent implements OnInit {

  constructor() { }

  list = [
    {id: 1, name: 'zhangsan'},
    {id: 2, name: 'lisi'},
    {id: 3, name: 'wangmazi'}
  ]

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.list, event.previousIndex, event.currentIndex);
  }

}
