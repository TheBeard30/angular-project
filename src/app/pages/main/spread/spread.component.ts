import { SpreadService } from './../../../service/spread.service';
import { SlashCell } from './custom-cell/slash.cell';
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import * as GC from "@grapecity/spread-sheets";
import '@grapecity/spread-sheets-resources-zh';
import Worksheet = GC.Spread.Sheets.Worksheet;
import Workbook = GC.Spread.Sheets.Workbook;
GC.Spread.Common.CultureManager.culture('zh-cn');
import {BaseData, mockData} from './mock.data';
import { HttpClient } from '@angular/common/http';
import {GridCoordinate} from "./custom-formula/GridCoordinate";


@Component({
	selector: 'app-spread',
	templateUrl: './spread.component.html',
	styleUrls: ['./spread.component.less']
})
export class SpreadComponent implements OnInit {

    // 工作薄
	spread: Workbook;

	// 工作表
	sheet: Worksheet;

	hostStyle = {
		width: '100%',
		height: 'calc(100% - 61px)'
	};

	@ViewChild("statusBar") statusBar: ElementRef;


	drawOpen: boolean = false;


	constructor(
    private spreadService: SpreadService
  ){

	}

	ngOnInit(): void{
	}

	changeDrawStatus(): void{
		this.drawOpen = !this.drawOpen;
	}

	/**
	 * 电子表格初始化
	 * @param {Object} $event
	 */
	workbookInit($event: any) {
		this.spread = $event.spread;
		this.sheet = this.spread.getActiveSheet();
		this.initData(this.sheet);
		this.bindStatus(this.spread);
		this.bindEvents(this.sheet);
		window.requestAnimationFrame(() => this.spread.refresh());
	}

	/**
	 * 将模拟数据填充到电子表格中
	 * @param {Worksheet} sheet 工作表
	 */
	initData(sheet: Worksheet){
		sheet.suspendPaint();
		for(let i = 0; i < mockData.length; i++){
			const rowData = mockData[i];
			for(let j = 0; j < rowData.length; j++){
				sheet.setValue(i,j,rowData[j]);
			}
		}
    sheet.getCell(0,0).cellType(new SlashCell()).value("人员|地区|销量|EE|FF|GG");

    sheet.addSpan(20,6,5,5);

    console.log(sheet.getDefaultStyle());

    sheet.getCell(2,2).font("normal normal 14px 楷体");

    sheet.setValue(1,1,'李豪珣');
    sheet.setValue(2,2,'李豪珣');

    sheet.getStyle(2,2).font = "normal normal 14px 楷体";

    // const style = new GC.Spread.Sheets.Style();
    // style.backColor = "green";
    //
    // sheet.setStyle(20,6,style);


    const gridCoordinate = new GridCoordinate();

    this.sheet.addCustomFunction(gridCoordinate);

    sheet.setFormula(8,8,`gridCoordinate(A1,A2,2)/(A4 + 1)`);

    sheet.resumePaint();
	}

	/**
	 * 将状态栏绑定到电子表格工作薄上
	 * @param {Workbook} spread  工作薄
	 */
	bindStatus(spread: Workbook): void{
		const statusBar = new GC.Spread.Sheets.StatusBar.StatusBar(this.statusBar.nativeElement);
        statusBar.bind(spread);
	}

	/**
	 * 绑定各种响应事件
	 * @param {Worksheet} sheet  工作表
	 */
	bindEvents(sheet: Worksheet): void{
		this.spreadService.bindSelectionChanged(sheet);
	}

	repaint(){
		this.sheet.suspendPaint();
		this.sheet.setValue(0,0,'');
		const value = Math.random() * 1000;
		this.sheet.setValue(0,0,value);
		this.sheet.resumePaint();
	}

  /**
   * 绘制基础数据
   */
  paintBaseData(): void{
    this.sheet.suspendPaint();

    for(let i = 0; i < BaseData.length; i++){
      for(let key in BaseData[i]){
        this.sheet.setValue(i + 7,Number(key),BaseData[i][key]);
      }
    }

    this.sheet.resumePaint();
  }

  clear(): void{
    this.sheet.reset();
  }

  clickMe(key: any,name: string) {
   alert(`${key},${name}`);
  }
}


// const aa = (sheet?: Worksheet) => {

//   return (target: Object, propertyKey: string | symbol, descriptor: any) => {
//     const method = target.value;

//   }
// }





