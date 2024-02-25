import {Component, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-ngx-table',
  templateUrl: './ngx-table.component.html',
  styleUrls: ['./ngx-table.component.less']
})
export class NgxTableComponent implements OnInit {

  constructor(
    private viewContainer: ViewContainerRef
  ) { }

  @Input() template: TemplateRef<{key: number,name: string}>;


  tableData: Array<any> = [
    {test: '测试1',key: 2,name: '张三'},
    {test: '测试2',key: 3,name: '李四'}
  ];

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {}

}
