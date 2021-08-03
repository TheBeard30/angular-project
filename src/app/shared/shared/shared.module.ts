import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedZorro } from './shared-zorro.module';
import { SpreadSheetsModule } from '@grapecity/spread-sheets-angular';
import { HighlightDirective } from 'src/app/directive/highlight/highlight.directive';
import { PowPipe } from 'src/app/pipe/pow-pipe/pow.pipe';
import { UnlessDirective } from 'src/app/directive/unless/unless.directive';



@NgModule({
  declarations: [
    PowPipe,
    HighlightDirective,
    UnlessDirective
  ],
  imports: [
    ...SharedZorro,
    CommonModule,
    SpreadSheetsModule
  ],
  exports: [
    ...SharedZorro,
    SpreadSheetsModule,
    PowPipe,
    HighlightDirective,
    UnlessDirective
  ]
})
export class SharedModule { }
