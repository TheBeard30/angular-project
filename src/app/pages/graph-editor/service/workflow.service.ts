import { Injectable } from '@angular/core';
import { GraphEditorModule } from '../graph-editor.module';

@Injectable({
  providedIn: GraphEditorModule
})
export class WorkflowService {

  constructor() { }

  aaa = 'test>>>>>';
}
