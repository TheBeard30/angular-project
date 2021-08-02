import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Quill from "quill";
import {quillConfig} from './quill.config';

@Component({
  selector: 'app-quill-editor',
  templateUrl: './quill-editor.component.html',
  styleUrls: ['./quill-editor.component.less']
})
export class QuillEditorComponent implements OnInit {


  @ViewChild("container") container: ElementRef; 


  constructor(
    private elementRef: ElementRef
  ) {

  }

  ngOnInit(): void {

  }

  ngAfterViewInit(){
    
  
    const quill = new Quill(this.container.nativeElement,quillConfig);
  }



  clickTextEditor($event){
    $event.stopPropagation();
    
  }

}
