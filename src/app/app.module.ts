import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import {registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from './shared/shared/shared.module';

import { GeometryRegisterModule } from "@geominfo/geometry-register";


import { GraphEditorModule } from './pages/graph-editor/graph-editor.module';
import { MainModule } from './pages/main/main.module';


registerLocaleData(zh);
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    GeometryRegisterModule,
    GraphEditorModule,
    MainModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
