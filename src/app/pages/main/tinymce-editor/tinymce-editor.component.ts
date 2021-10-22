/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Editor } from 'tinymce';
import {boldTest, insertDimension, openDialog, registerCustomTest, TinyMceConfig} from './tinymce.config';


@Component({
  selector: 'app-tinymce-editor',
  templateUrl: './tinymce-editor.component.html',
  styleUrls: ['./tinymce-editor.component.less']
})
export class TinymceEditorComponent implements OnInit,AfterViewInit {

  constructor(
  ) { }

  // 编辑器内容
  editorContent = `123456`;



  editorSetup = (editor: Editor) => {
    insertDimension(editor);
    boldTest(editor);
    openDialog(editor);
    registerCustomTest(editor,this.customPanel.nativeElement);
  };

  // 编辑器配置
  editorConfig = {
    ...TinyMceConfig,
    setup: this.editorSetup
  };

  //
  @ViewChild('customPanel') customPanel: ElementRef;

  ngOnInit(): void {
    
  }

  ngAfterViewInit(){
  }


  editorClick($event){
  }

}
