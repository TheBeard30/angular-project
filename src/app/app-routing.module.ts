import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import {HomeComponent} from "./pages/home/home.component";


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
  {
    path: 'home', component: HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
