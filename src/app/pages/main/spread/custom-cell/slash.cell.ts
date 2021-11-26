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
    if(splitTextArray.length == 2){
      this.drawLine(ctx,startPoint,{x: x + w,y: y + h});
      this.drawText(ctx,splitTextArray[0],x + w *7/8, y + h/3);
      this.drawText(ctx,splitTextArray[1],x + w /2, y + h*3/4);
    }else{
      for(let i = 1; i > 2 && i < splitTextArray.length; i++){

        const distance = this.getDistance(h,avgDegree * i);
        let endPoint = {x: x + distance,y: y + h};
        if(distance > w){
          const _h = this.getDistance(w,90 - avgDegree * i);
          endPoint = {x: x + w,y: y + _h};
        }
        this.drawLine(ctx,startPoint,endPoint);
      }
    }

    ctx.restore();
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
  private drawText(ctx: CanvasRenderingContext2D,text: string,x: number,y: number): void{
    ctx.fillText(text,x,y);
  }



}

type Point = {x: number, y: number};
