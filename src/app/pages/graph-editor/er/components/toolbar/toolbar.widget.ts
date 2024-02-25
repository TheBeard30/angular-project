import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Graph} from "@antv/x6";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.widget.html',
  styleUrls: ['./toolbar.widget.less']
})
export class ToolbarWidget implements OnInit,OnChanges {

  @Input() graph!: Graph;

  undoStatus: boolean = false;

  redoStatus: boolean = false;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.graph && changes.graph.currentValue){
      this.graph.history.on('change',() => {
        this.undoStatus = this.graph.canUndo();
        this.redoStatus = this.graph.canRedo();
      });
    }
  }

  ngOnInit(): void {
  }

  undo() {
    this.graph.undo();
  }

  redo() {
    this.graph.redo();
  }


}
