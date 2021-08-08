import { Component, OnInit } from '@angular/core';
import {option} from "./monaco.config";

@Component({
  selector: 'app-ng-monaco',
  templateUrl: './ng-monaco.component.html',
  styleUrls: ['./ng-monaco.component.less']
})
export class NgMonacoComponent implements OnInit {

  constructor() { }

  editorOptions = option;
  code: string = 'select * from dual';



  ngOnInit(): void {

  }

  monacoInit($event: any) {
    console.log($event);
  }
}
