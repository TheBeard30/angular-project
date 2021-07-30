import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Quill from "quill";

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
    const toolbarOptions = [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],
    
      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction
    
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],
    
      ['clean'],                                       // remove formatting button
      ['image']
    ];
    const quill = new Quill(this.container.nativeElement,{
      theme: 'snow',
      modules: {
        toolbar: toolbarOptions
      }
    });

    // this.container.nativeElement.querySelector('.ql-editor').addEventListener('click', (event) => {
    //   event.stopPropagation();
    //   const height = this.container.nativeElement.offsetHeight - 101;
    //   this.container.nativeElement.previousSibling.style.top = `${height}px`;
    //   this.container.nativeElement.previousSibling.style.visibility = 'visible';
    // });
    // this.elementRef.nativeElement.querySelector('.editor').onclick = ($event) => {
    //   $event.stopPropagation();
    // }

    // this.elementRef.nativeElement.querySelector(':not(.ql-editor,.ql-toolbar)').onclick = ($event) => {
    //   $event.stopPropagation();
    //   this.container.nativeElement.previousSibling.style.visibility = 'hidden';
    // }
  }



  clickTextEditor($event){
    $event.stopPropagation();
    
  }

}
