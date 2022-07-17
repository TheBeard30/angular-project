import {Component, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.less']
})
export class TestComponent implements OnInit {

  @Input() test: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
