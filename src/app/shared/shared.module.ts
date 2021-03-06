import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedZorro } from './shared-zorro.module';
import { SpreadSheetsModule } from '@grapecity/spread-sheets-angular';
import { HighlightDirective } from 'src/app/directive/highlight/highlight.directive';
import { PowPipe } from 'src/app/pipe/pow-pipe/pow.pipe';
import { UnlessDirective } from 'src/app/directive/unless/unless.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';
import { GridsterModule } from 'angular2gridster';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { DragDropModule } from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [
    PowPipe,
    HighlightDirective,
    UnlessDirective
  ],
  imports: [
    ...SharedZorro,
    CommonModule,
    FormsModule,
    SpreadSheetsModule,
    EditorModule,
  ],
  providers: [
    
  ],
  exports: [
    ...SharedZorro,
    SpreadSheetsModule,
    PowPipe,
    HighlightDirective,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,  
    UnlessDirective,
    EditorModule,
    GridsterModule,
    MonacoEditorModule,
    DragDropModule
  ]
})
export class SharedModule { }
