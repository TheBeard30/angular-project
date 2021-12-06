import * as GC from "@grapecity/spread-sheets";

/**
 * @description 自定义的斜线单元格
 * @author      TheBeard
 * @date        2021/11/26
 */
export class SlashCell extends GC.Spread.Sheets.CellTypes.Text{



  constructor(){
    super();
    this.typeName = 'slash';
  }

  /**
   * Paint a slash cell on the canvas.
   * @override
   * @param {CanvasRenderingContext2D} ctx The canvas's two-dimensional context.
   * @param {Object} value The cell's value.
   * @param {number} x <i>x</i>-coordinate relative to the canvas.
   * @param {number} y <i>y</i>-coordinate relative to the canvas.
   * @param {number} w The cell's width.
   * @param {number} h The cell's height.
   * @param {GC.Spread.Sheets.Style} style The cell's actual style.
   * @param {Object} context The context associated with the cell type. See the Remarks for more information.
   */
  paint(ctx: CanvasRenderingContext2D,  value: any,  x: number,  y: number,  w: number,  h: number,  style: GC.Spread.Sheets.Style,  context?: any): void{
    if(!ctx) return;
    ctx.save();
    const splitTextArray = value.split("|");
    const avgDegree = 90 / splitTextArray.length;
    ctx.font = style.font;
    const startPoint = {x,y};
    for(let i = 1; i < splitTextArray.length; i++){
      const endPoint = this.getConnectPoint(startPoint,w,h,i,splitTextArray.length);
      this.drawLine(ctx,startPoint,endPoint);
    }

    // splitTextArray.forEach((element,index) => {
    //   this.drawText(ctx,element,x + 100,y + 100,avgDegree * index);
    // });

    ctx.restore();
  }


  /**
   * 获取连接点
   * @param {Point}  startPoint  开始点
   * @param {number} w           宽
   * @param {number} h           高
   * @param {number} count       占总面积的个数
   * @param {number} total       总面积的个数
   * @returns
   */
  private getConnectPoint(startPoint: Point,w: number,h: number,count: number,total: number): Point{
    const halfArea = w * h / 2;
    const singleArea = w * h / total;
    let portionArea = singleArea * count;
    const getLine = (x: number, area: number) => area * 2 / x;
    if(portionArea <= halfArea){
      return {x: startPoint.x + w,y: startPoint.y + getLine(w,portionArea)};
    }else{
      portionArea = singleArea * (total - count);
      return {x: startPoint.x + getLine(h,portionArea),y: startPoint.y + h};
    }
  }

  /**
   * 获取横向画线距离
   * @param {number} height  高度
   * @param {number} degree  度数
   * @returns {number}
   */
  private getDistance(height: number,degree: number): number{
    /**
     *  Math.tan() 等于 对边除以临边
     *     |\
     *     | \
     *    h|  \
     *     |   \
     *     |____\
     *       ?
     */
    return Math.ceil(height * Math.tan(degree * (Math.PI / 180)));
  }

  /**
   * 画线
   * @param {CanvasRenderingContext2D}  ctx          canvas上下文
   * @param {Point}                     startPoint   开始点
   * @param {Point}                     endPoint     结束点
   */
  private drawLine(ctx: CanvasRenderingContext2D,startPoint: Point,endPoint: Point): void{
    ctx.beginPath();
    ctx.moveTo(startPoint.x,startPoint.y);
    ctx.lineTo(endPoint.x,endPoint.y);
    ctx.stroke();
    ctx.closePath();
  }

  /**
   * 画文本
   * @param {CanvasRenderingContext2D}  ctx     canvas上下文
   * @param {string}                    text    文本
   * @param {number}                    x       x坐标
   * @param {number}                    y       y坐标
   */
  private drawText(ctx: CanvasRenderingContext2D,text: string,x: number,y: number, degree: number): void{
    ctx.fillText(text,x,y);
    if(degree > 0)
      ctx.rotate(degree * (Math.PI / 180));
  }



}

type Point = {x: number, y: number};
