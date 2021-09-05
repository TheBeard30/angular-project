/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import {TinyMceConfig} from './tinymce.config';


@Component({
  selector: 'app-tinymce-editor',
  templateUrl: './tinymce-editor.component.html',
  styleUrls: ['./tinymce-editor.component.less']
})
export class TinymceEditorComponent implements OnInit {

  constructor(
  ) { }

  // 编辑器内容
  editorContent = `123456`;

  // 编辑器配置
  editorConfig = TinyMceConfig;

  ngOnInit(): void {

  }


  editorClick($event){
    // console.log($event);
  }

}
