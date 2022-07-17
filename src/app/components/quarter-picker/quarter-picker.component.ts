import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-quarter-picker',
  templateUrl: './quarter-picker.component.html',
  styleUrls: ['./quarter-picker.component.less']
})
export class QuarterPickerComponent implements OnInit {

  constructor() { }

  @Input() placeHolder = '请选择季度';

  selected: boolean = false;

  ngOnInit(): void {
  }

  focusIn() {
    this.selected = true;
  }

  focusOut() {
    this.selected = false;
  }

}
