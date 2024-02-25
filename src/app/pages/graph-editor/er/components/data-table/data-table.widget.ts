import { Component, Input, OnInit } from '@angular/core';
import {TableData} from "../../types";

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.widget.html',
  styleUrls: ['./data-table.widget.less']
})
export class DataTableWidget implements OnInit {

  @Input() data!: TableData;

  indeterminate: boolean = false;

  allChecked: boolean = false;



  constructor() { }

  ngOnInit(): void {
  }

  // trackByField = (index: number, field: {name: string,type: string}) => {
  //   return field.name;
  // }

  allCheckedChange(checked: boolean){
    this.data.fieldList.forEach(v => v.checked = checked);
    this.indeterminate = false;
  }

  fieldCheckedChange(checked: boolean){
    if(this.data.fieldList.length){
      this.allChecked = this.data.fieldList.every(v => v.checked);
      this.indeterminate = !this.data.fieldList.every(v => v.checked) && !this.data.fieldList.every(v => !v.checked);
    }
  }

}
