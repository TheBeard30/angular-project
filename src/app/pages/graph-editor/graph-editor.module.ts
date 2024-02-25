import { ModuleWithProviders, NgModule } from '@angular/core';
import { GraphEditorRoutingModule } from './graph-editor-routing.module';
import { ERComponent } from './er/er.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { WorkflowService } from './service/workflow.service';
import { WhiteBoardComponent } from './white-board/white-board.component';
import { DataTableWidget,ToolbarWidget,UndoWidget,RedoWidget } from './er/components';


const ER_COMPONENTS = [
  ERComponent,
  DataTableWidget,
  ToolbarWidget,
  UndoWidget,
  RedoWidget,
];



@NgModule({
  declarations: [
    ...ER_COMPONENTS,
    WorkflowComponent,
    WhiteBoardComponent,
  ],
  imports: [
    SharedModule,
    GraphEditorRoutingModule,
  ],
  providers: []
})
export class GraphEditorModule {
  // 测试forRoot功能
  static forRoot(): ModuleWithProviders<GraphEditorModule> {
    return {
      ngModule: GraphEditorModule,
      providers: [
        WorkflowService
      ]
    };
  }

}
