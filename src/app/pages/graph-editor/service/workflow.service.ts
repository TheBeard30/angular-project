import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { GraphEditorModule } from '../graph-editor.module';

@Injectable({
  providedIn: 'root'
})
export class WorkflowService {

  constructor() { }

  subject = new Subject<boolean>();
}
