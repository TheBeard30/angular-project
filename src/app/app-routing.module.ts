import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragComponent } from './pages/main/drag/drag.component';
import { FishboneComponent } from './pages/main/fishbone/fishbone.component';
import { GristerComponent } from './pages/main/grister/grister.component';
import { NgMonacoComponent } from './pages/main/ng-monaco/ng-monaco.component';
import { OtherGridsterComponent } from './pages/main/other-gridster/other-gridster.component';
import { QuillEditorComponent } from './pages/main/quill-editor/quill-editor.component';
import { SpreadComponent } from './pages/main/spread/spread.component';
import { LayoutComponent } from './layout/layout.component';
import { TinymceEditorComponent } from './pages/main/tinymce-editor/tinymce-editor.component';
import { WorkflowComponent } from './pages/graph-editor/workflow/workflow.component';
import { ERComponent } from './pages/graph-editor/er/er.component';

const routes: Routes = [
  {
    path: '', 
    component: LayoutComponent,
    children: [
      {
        path: '', pathMatch: 'full',redirectTo: 'main',
      },
      {
        path: 'main', loadChildren: () => import('./pages/main/main.module').then(mod => mod.MainModule)
      },
      {
        path: 'graph',loadChildren: () => import('./pages/graph-editor/graph-editor.module').then(mod => mod.GraphEditorModule)
      }    
      
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
