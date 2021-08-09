import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from './shared/shared.module';

import { GeometryRegisterModule } from "@geominfo/geometry-register";


import { GraphEditorModule } from './pages/graph-editor/graph-editor.module';
import { MainModule } from './pages/main/main.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { GridsterModule } from 'angular2gridster';
import { monacoConfig } from './monaco.config';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';



registerLocaleData(zh);
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    GeometryRegisterModule,
    MainModule,
    GraphEditorModule,
    GridsterModule.forRoot(),
    MonacoEditorModule.forRoot(monacoConfig),
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
