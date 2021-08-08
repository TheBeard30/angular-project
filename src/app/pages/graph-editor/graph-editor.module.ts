import { NgModule } from '@angular/core';
import { GraphEditorRoutingModule } from './graph-editor-routing.module';
import { ERComponent } from './er/er.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { WorkflowService } from './service/workflow.service';



@NgModule({
  declarations: [
    WorkflowComponent,
    ERComponent,
  ],
  imports: [
    SharedModule,
    GraphEditorRoutingModule, 
  ],
  providers: [
    WorkflowService
  ]
})
export class GraphEditorModule { }
