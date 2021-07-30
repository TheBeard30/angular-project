import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragComponent } from './pages/drag/drag.component';
import { FishboneComponent } from './pages/fishbone/fishbone.component';
import { GristerComponent } from './pages/grister/grister.component';
import { NgMonacoComponent } from './pages/ng-monaco/ng-monaco.component';
import { OtherGridsterComponent } from './pages/other-gridster/other-gridster.component';
import { QuillEditorComponent } from './pages/quill-editor/quill-editor.component';
import { SpreadComponent } from './pages/spread/spread.component';
import { LayoutComponent } from './layout/layout.component';
import { TinymceEditorComponent } from './pages/tinymce-editor/tinymce-editor.component';

const routes: Routes = [
  {
    path: '', 
    component: LayoutComponent,
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'spread'},
      {path: 'monaco', component: NgMonacoComponent , data: {title: 'monaco',breadcrumb: 'monaco'}},
      {path: 'gridster', component: GristerComponent , data: {title: 'gridster',breadcrumb: 'gridster'}},
      {path: 'drag', component: DragComponent, data: {title: 'drag',breadcrumb: 'drag'}},
      {path: 'other-gridster', component: OtherGridsterComponent, data: {title: 'other-gridster',breadcrumb: 'other-gridster'}},
      {path: 'fishbone', component: FishboneComponent , data: {title: 'fishbone',breadcrumb: 'fishbone'}},
      {path: 'quill', component: QuillEditorComponent, data: {title: 'quill',breadcrumb: 'quill'}},
      {path: 'spread', component: SpreadComponent, data: {title: 'spread',breadcrumb: '电子表格'}},
      {path: 'tinymce', component: TinymceEditorComponent, data: {title: 'tinymce',breadcrumb: 'tinymce'}}
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
