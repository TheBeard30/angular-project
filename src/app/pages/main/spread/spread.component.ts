/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import * as GC from "@grapecity/spread-sheets";
import '@grapecity/spread-sheets-resources-zh';
import Worksheet = GC.Spread.Sheets.Worksheet;
import Workbook = GC.Spread.Sheets.Workbook;
GC.Spread.Common.CultureManager.culture('zh-cn');
import {mockData} from './mock.data';
import { HttpClient } from '@angular/common/http';

const precedentLevelColor = ['#FFFFFF', '#19E093', '#09E8DB', '#12A0D1', '#096CE8', '#0926DE'];
const dependentLevelColor = ['#FFFFFF', '#ADDE0B', '#E8DD0C', '#D1AD00', '#E8A90C', '#E08804'];

interface TreeNode{
	row: number;
	col: number;
	level: number;
	orginStyle?: any;
	precedentChildNodes?: Array<TreeNode>;
	dependentChildNodes?: Array<TreeNode>;
}


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


	constructor(){

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
		this.bindSelectionChanged(sheet);
	}


	/**
	 * 绑定选择改变事件
	 * @param {Worksheet} sheet  工作表 
	 */
	bindSelectionChanged(sheet: Worksheet): void{
		let previousDenpendentTree: TreeNode,previousPrecedentTree: TreeNode;
		sheet.bind(GC.Spread.Sheets.Events.SelectionChanged,(event:{[p: string]: any},data: {[p: string]: any}) => {
			if(previousDenpendentTree || previousPrecedentTree){
				if(previousPrecedentTree.precedentChildNodes){
					this.paintPrecedentCells(sheet,previousPrecedentTree,true);
				}
				if(previousDenpendentTree.dependentChildNodes){
					this.paintDependentCells(sheet,previousDenpendentTree,true);
				}
			}

			const row = data.newSelections[0].row;
			const col = data.newSelections[0].col;

			const precedentTree = this.createPrecedentTree(sheet,row,col);
			previousPrecedentTree = precedentTree;

            if(precedentTree.precedentChildNodes){
				this.paintPrecedentCells(sheet,precedentTree);
			}

			const dependentTree = this.createDependentTree(sheet,row,col);
			previousDenpendentTree = dependentTree;

            if(dependentTree.dependentChildNodes){
				this.paintDependentCells(sheet,dependentTree);
			}
			
		});
		
	}


	/**
	 * 生成引用单元格的树结构
	 * @param {Worksheet} sheet  工作表 
	 * @param {number}    row    行索引
	 * @param {number}    col    列索引
	 * @param {number}	  level  树结构的深度
	 * @returns {TreeNode}
	 */
	createPrecedentTree(sheet: Worksheet,row: number,col: number,level?: number): TreeNode{
		if(level == undefined){
			level = 0;
		}
        const style = sheet.getStyle(row,col);
		const node = {
			row: row,
			col: col,
			originStyle: style,
			level: level,
			precedentChildNodes: undefined
		};
		const childNodes = this.addPrecedentChildNodes(sheet,row,col,level);
		if(childNodes.length > 0){
			node.precedentChildNodes = childNodes;
		}

		return node;

	}


	/**
	 * 生成从属单元格的树结构
	 * @param {Worksheet} sheet  工作表 
	 * @param {number}    row    行索引
	 * @param {number}    col    列索引
	 * @param {number}	  level  树结构的深度
	 * @returns {TreeNode}
	 */
	 createDependentTree(sheet: Worksheet,row: number,col: number,level?: number): TreeNode{
		if(level == undefined){
			level = 0;
		}
        const style = sheet.getStyle(row,col);
		const node = {
			row: row,
			col: col,
			originStyle: style,
			level: level,
			dependentChildNodes: undefined
		};
		const childNodes = this.addDependentChildNodes(sheet,row,col,level);
		if(childNodes.length > 0){
			node.dependentChildNodes = childNodes;
		}

		return node;

	}


	/**
	 * 生成引用单元格树的子节点
	 * @param {Worksheet} sheet  工作表 
	 * @param {number}    row    行索引
	 * @param {number}    col    列索引
	 * @param {number}	  level  树结构的深度 
	 * @returns {Array<TreeNode>}
	 */
	addPrecedentChildNodes(sheet: Worksheet,row: number, col: number,level: number): Array<TreeNode>{
		const nodeList = [];
		const cellRangeList = sheet.getPrecedents(row,col);
		if(cellRangeList.length > 0){
			level++;
			for(let i = 0; i < cellRangeList.length; i++){
				const cell = cellRangeList[i];
				const row = cell.row;
				const col = cell.col;
				const rowCount = cell.rowCount;
				const colCount = cell.colCount;
				if(rowCount > 1 || colCount > 1){
					for(let j = row; j < row + rowCount; j++){
						for(let k = col; k < col + colCount; k++){
							const node = this.createPrecedentTree(sheet,j,k,level);
							nodeList.push(node);
						}
					}
				}else{
					const node = this.createPrecedentTree(sheet,row,col,level);
					nodeList.push(node);
				}
				
			}

		}
		return nodeList;
	}



	/**
	 * 生成从属单元格树的子节点
	 * @param {Worksheet} sheet  工作表 
	 * @param {number}    row    行索引
	 * @param {number}    col    列索引
	 * @param {number}	  level  树结构的深度 
	 * @returns {Array<TreeNode>}
	 */
	 addDependentChildNodes(sheet: Worksheet,row: number, col: number,level: number): Array<TreeNode>{
		const nodeList = [];
		const cellRangeList = sheet.getDependents(row,col);
		if(cellRangeList.length > 0){
			level++;
			for(let i = 0; i < cellRangeList.length; i++){
				const cell = cellRangeList[i];
				const row = cell.row;
				const col = cell.col;
				const rowCount = cell.rowCount;
				const colCount = cell.colCount;
				if(rowCount > 1 || colCount > 1){
					for(let j = row; j < row + rowCount; j++){
						for(let k = col; k < col + colCount; k++){
							const node = this.createDependentTree(sheet,j,k,level);
							nodeList.push(node);
						}
					}
				}else{
					const node = this.createDependentTree(sheet,row,col,level);
					nodeList.push(node);
				}
				
			}

		}
		return nodeList;
	}
	

	/**
	 * 改变引用单元格的背景颜色
	 * @param {Worksheet} sheet  工作表 
	 * @param {TreeNode}  node   树节点
	 * @param {boolean}   clear  是否清除
	 */
	paintPrecedentCells(sheet: Worksheet,node: TreeNode,clear: boolean = false): void{
		sheet.suspendPaint();
		if(clear){
			this.sheet.setStyle(node.row,node.col,node.orginStyle);
		}else{
			this.sheet.getCell(node.row,node.col).backColor(precedentLevelColor[node.level]);
		}
		if(node.precedentChildNodes){
			node.precedentChildNodes.forEach(child => this.paintPrecedentCells(sheet,child,clear));
		}
		sheet.resumePaint();  

	}


	/**
	 * 改变从属单元格的背景颜色
	 * @param {Worksheet} sheet  工作表 
	 * @param {TreeNode}  node   树节点
	 * @param {boolean}   clear  是否清除
	 */
	paintDependentCells(sheet: Worksheet,node: TreeNode,clear: boolean = false){
		sheet.suspendPaint();
		if(clear){
			this.sheet.setStyle(node.row,node.col,node.orginStyle);
		}else{
			this.sheet.getCell(node.row,node.col).backColor(dependentLevelColor[node.level]);
		}
		if(node.dependentChildNodes){
			node.dependentChildNodes.forEach(child => this.paintDependentCells(sheet,child,clear));
		}
		sheet.resumePaint();  
	}



	repaint(){
		this.sheet.suspendPaint();
		this.sheet.setValue(0,0,'');
		const value = Math.random() * 1000; 
		this.sheet.setValue(0,0,value);
		this.sheet.resumePaint();
	}

}





