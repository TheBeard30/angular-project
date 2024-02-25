import { DatePipe } from '@angular/common';
import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';


export type Quarter = 'Q1' | 'Q2' | 'Q3' | 'Q4';
@Component({
  selector: 'app-quarter-picker',
  templateUrl: './quarter-picker.component.html',
  styleUrls: ['./quarter-picker.component.less']
})
export class QuarterPickerComponent implements OnInit,OnChanges {

  constructor(
    private datePipe: DatePipe
  ) { }


  @Input() placeHolder = '请选择季度';

  @Input() ngModel: Date;

  @Output() ngModelChange = new EventEmitter();

  selected: boolean = false;

  currentYear: string;

  inputValue: string;

  ngOnInit(): void {
    this.currentYear = this.datePipe.transform(new Date(),'yyyy');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.value && changes.value.currentValue){
      this.currentYear = this.datePipe.transform(this.ngModel,'yyyy');
    }
  }

  focusIn() {
    this.selected = true;
  }

  focusOut() {
    // this.selected = false;
  }

  prev() {
    this.currentYear = String(Number(this.currentYear) - 1);
  }

  next() {
    this.currentYear = String(Number(this.currentYear) + 1);
  }

  selectQuarter(quarter: Quarter){
    this.inputValue = `${this.currentYear}-${quarter}`;
    this.ngModelChange.emit(this.inputValue);
    this.selected = false;

  }

}
