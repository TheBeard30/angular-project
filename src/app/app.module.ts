import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule} from "@angular/forms";
import {MonacoEditorModule} from "ngx-monaco-editor";
import {monacoConfig} from "./monaco.config";
import { GristerComponent } from './pages/grister/grister.component';
// import { GridsterModule } from 'angular-gridster2';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { DragComponent } from './pages/drag/drag.component';
import { OtherGridsterComponent } from './pages/other-gridster/other-gridster.component';
import { GridsterModule } from 'angular2gridster';
import { FishboneComponent } from './pages/fishbone/fishbone.component';
import { QuillEditorComponent } from './pages/quill-editor/quill-editor.component';
import { NgMonacoComponent } from './pages/ng-monaco/ng-monaco.component';
import { SpreadComponent } from './pages/spread/spread.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { CommonModule, registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from './shared/shared/shared.module';

import { GeometryRegisterModule } from "@geominfo/geometry-register";

import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { TinymceEditorComponent } from './pages/tinymce-editor/tinymce-editor.component';
import { WorkflowComponent } from './pages/antv-editor/workflow/workflow.component';
import { ERComponent } from './pages/antv-editor/er/er.component';


registerLocaleData(zh);
@NgModule({
  declarations: [
    AppComponent,
    NgMonacoComponent,
    GristerComponent,
    DragComponent,
    OtherGridsterComponent,
    FishboneComponent,
    QuillEditorComponent,
    SpreadComponent,
    LayoutComponent,
    TinymceEditorComponent,
    WorkflowComponent,
    ERComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    FormsModule,
    GeometryRegisterModule,
    EditorModule,
    // GridsterModule,
    GridsterModule.forRoot(),
    MonacoEditorModule.forRoot(monacoConfig),
    HttpClientModule,
    BrowserAnimationsModule,
    
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
