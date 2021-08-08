import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragComponent } from './drag/drag.component';
import { FishboneComponent } from './fishbone/fishbone.component';
import { GristerComponent } from './grister/grister.component';
import { NgMonacoComponent } from './ng-monaco/ng-monaco.component';
import { OtherGridsterComponent } from './other-gridster/other-gridster.component';
import { QuillEditorComponent } from './quill-editor/quill-editor.component';
import { SpreadComponent } from './spread/spread.component';
import { TinymceEditorComponent } from './tinymce-editor/tinymce-editor.component';

const routes: Routes = [
  {path: '',pathMatch: 'full', redirectTo: 'spread'},
  {path: 'monaco', component: NgMonacoComponent , data: {title: 'monaco',breadcrumb: 'monaco'}},
  {path: 'gridster', component: GristerComponent , data: {title: 'gridster',breadcrumb: 'gridster'}},
  {path: 'drag', component: DragComponent, data: {title: 'drag',breadcrumb: 'drag'}},
  {path: 'other-gridster', component: OtherGridsterComponent, data: {title: 'other-gridster',breadcrumb: 'other-gridster'}},
  {path: 'fishbone', component: FishboneComponent , data: {title: 'fishbone',breadcrumb: 'fishbone'}},
  {path: 'quill', component: QuillEditorComponent, data: {title: 'quill',breadcrumb: 'quill'}},
  {path: 'spread', component: SpreadComponent, data: {title: 'spread',breadcrumb: '电子表格'}},
  {path: 'tinymce', component: TinymceEditorComponent, data: {title: 'tinymce',breadcrumb: 'tinymce'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
