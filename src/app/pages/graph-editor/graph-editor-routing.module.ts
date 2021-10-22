import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ERComponent } from './er/er.component';
import { WhiteBoardComponent } from './white-board/white-board.component';
import { WorkflowComponent } from './workflow/workflow.component';

const routes: Routes = [
  {path: 'workflow', component: WorkflowComponent, data: {title: 'workflow',breadcrumb: '工作流'}},
  {path: 'er', component: ERComponent, data: {title: 'er',breadcrumb: 'ER图'}},
  {path: 'white-board',component: WhiteBoardComponent,data: {title: 'white-board',breadcrumb: '白板'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphEditorRoutingModule { }
