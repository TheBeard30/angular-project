import { Component, OnInit } from '@angular/core';
import { WorkflowService } from '../service/workflow.service';

@Component({
  selector: 'app-er',
  templateUrl: './er.component.html',
  styleUrls: ['./er.component.less']
})
export class ERComponent implements OnInit {

  constructor(
    // private workflowService: WorkflowService
  ) { }

  ngOnInit(): void {
    // console.log(this.workflowService.aaa);
  }

}
