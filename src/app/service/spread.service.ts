import { Injectable } from '@angular/core';
import * as GC from "@grapecity/spread-sheets";
import Worksheet = GC.Spread.Sheets.Worksheet;
import Workbook = GC.Spread.Sheets.Workbook;

@Injectable({
  providedIn: 'root'
})
export class SpreadService {

  constructor() { }


  /**
	 * 绑定选择改变事件
	 * @param {Worksheet} sheet  工作表
	 */
	bindSelectionChanged(sheet: Worksheet): void{
		let previousDependentTree: TreeNode,previousPrecedentTree: TreeNode;
		sheet.bind(GC.Spread.Sheets.Events.SelectionChanged,(event:{[p: string]: any},data: {[p: string]: any}) => {
			if(previousDependentTree || previousPrecedentTree){
				if(previousPrecedentTree.precedentChildNodes){
					this.paintPrecedentCells(sheet,previousPrecedentTree,true);
				}
				if(previousDependentTree.dependentChildNodes){
					this.paintDependentCells(sheet,previousDependentTree,true);
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
			previousDependentTree = dependentTree;

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
			sheet.setStyle(node.row,node.col,node.originStyle);
		}else{
			sheet.getCell(node.row,node.col).backColor(precedentLevelColor[node.level]);
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
			sheet.setStyle(node.row,node.col,node.originStyle);
		}else{
			sheet.getCell(node.row,node.col).backColor(dependentLevelColor[node.level]);
		}
		if(node.dependentChildNodes){
			node.dependentChildNodes.forEach(child => this.paintDependentCells(sheet,child,clear));
		}
		sheet.resumePaint();
	}

}

const precedentLevelColor = ['#FFFFFF', '#19E093', '#09E8DB', '#12A0D1', '#096CE8', '#0926DE'];
const dependentLevelColor = ['#FFFFFF', '#ADDE0B', '#E8DD0C', '#D1AD00', '#E8A90C', '#E08804'];

interface TreeNode{
	row: number;
	col: number;
	level: number;
	originStyle?: any;
	precedentChildNodes?: Array<TreeNode>;
	dependentChildNodes?: Array<TreeNode>;
}
