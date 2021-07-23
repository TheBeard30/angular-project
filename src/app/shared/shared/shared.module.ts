import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedZorro } from './shared-zorro.module';
import { SpreadSheetsModule } from '@grapecity/spread-sheets-angular';



@NgModule({
  declarations: [],
  imports: [
    ...SharedZorro,
    CommonModule,
    SpreadSheetsModule
  ],
  exports: [
    ...SharedZorro,
    SpreadSheetsModule
  ]
})
export class SharedModule { }
