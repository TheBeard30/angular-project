import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphEditorRoutingModule } from './graph-editor-routing.module';
import { ERComponent } from './er/er.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';



@NgModule({
  declarations: [
    WorkflowComponent,
    ERComponent,
  ],
  imports: [
    GraphEditorRoutingModule,
    SharedModule,
    CommonModule
  ]
})
export class GraphEditorModule { }
