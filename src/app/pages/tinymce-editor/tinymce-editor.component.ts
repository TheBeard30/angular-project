import { Component, OnInit } from '@angular/core';
import {TinyMceConfig} from './tinymce.config';

declare const tinymce;

@Component({
  selector: 'app-tinymce-editor',
  templateUrl: './tinymce-editor.component.html',
  styleUrls: ['./tinymce-editor.component.less']
})
export class TinymceEditorComponent implements OnInit {

  constructor() { }

  // 编辑器内容
  editorContent = `123456`;

  // 编辑器配置
  editorConfig = TinyMceConfig;

  ngOnInit(): void {
    console.log(tinymce);
  }


  editorClick($event){
    // console.log($event);
  }

}
