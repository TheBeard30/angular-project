import { Component, OnInit } from '@angular/core';
import {option} from "./monaco.config";
import {monacoSqlAutocomplete} from "./monaco-plugin";
declare const monaco: any;

@Component({
  selector: 'app-ng-monaco',
  templateUrl: './ng-monaco.component.html',
  styleUrls: ['./ng-monaco.component.less']
})
export class NgMonacoComponent implements OnInit {

  constructor() { }

  editorOptions = option;
  code: string = '';



  ngOnInit(): void {

  }

  monacoInit(editor: any) {
    monacoSqlAutocomplete(monaco, editor);
  }
}
