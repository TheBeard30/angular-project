import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { DragComponent } from './drag/drag.component';
import { FishboneComponent } from './fishbone/fishbone.component';
import { GristerComponent } from './grister/grister.component';
import { NgMonacoComponent } from './ng-monaco/ng-monaco.component';
import { OtherGridsterComponent } from './other-gridster/other-gridster.component';
import { QuillEditorComponent } from './quill-editor/quill-editor.component';
import { SpreadComponent } from './spread/spread.component';
import { TinymceEditorComponent } from './tinymce-editor/tinymce-editor.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {TestComponent} from "../../components/test/test.component";
import {QuarterPickerComponent} from "../../components/quarter-picker/quarter-picker.component";
import {NgxTableComponent} from "../../components/ngx-table/ngx-table.component";


@NgModule({
  declarations: [
    NgMonacoComponent,
    GristerComponent,
    DragComponent,
    OtherGridsterComponent,
    FishboneComponent,
    QuillEditorComponent,
    SpreadComponent,
    TinymceEditorComponent,
    TestComponent,
    QuarterPickerComponent,
    NgxTableComponent
  ],
  imports: [
    SharedModule,
    MainRoutingModule,
  ]
})
export class MainModule { }
