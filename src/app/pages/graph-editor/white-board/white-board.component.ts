import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-white-board',
  templateUrl: './white-board.component.html',
  styleUrls: ['./white-board.component.less']
})
export class WhiteBoardComponent implements OnInit,AfterViewInit {

  isDrawing: boolean = false;

  @ViewChild("canvas") canvasRef: ElementRef;

  x: number;

  y: number;

  canvasWidth: number = 300;

  canvasHeight: number = 150;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    console.log();
  }

  ngAfterViewInit(): void{
    
    
    const canvasElement = this.canvasRef.nativeElement;
    const context = canvasElement.getContext('2d');

    setTimeout(() => {
      const wrapper: HTMLElement = this.elementRef.nativeElement.querySelector('.board');
      const {width,height} = wrapper.getBoundingClientRect();
      this.canvasWidth = width;
      this.canvasHeight = height - 2;
    });

    
    canvasElement.addEventListener('mousedown', e => {
      this.x = e.offsetX;
      this.y = e.offsetY;
      this.isDrawing = true;
    });
    
    canvasElement.addEventListener('mousemove', e => {
      
      if (this.isDrawing) {
  
        this.drawLine(context, this.x, this.y, e.offsetX, e.offsetY);
        this.x = e.offsetX;
        this.y = e.offsetY;
      }
    });
    
    window.addEventListener('mouseup', e => {
      if (this.isDrawing) {
        this.drawLine(context, this.x, this.y, e.offsetX, e.offsetY);
        this.x = 0;
        this.y = 0;
        this.isDrawing = false;
      }
    });
  }


  /**
   * 
   * @param {CanvasRenderingContext2D}  context   上下文
   * @param {number}                    x1        开始点x坐标
   * @param {number}                    y1        开始点y坐标
   * @param {number}                    x2        结束点x坐标
   * @param {number}                    y2        结束点y坐标
   */
  drawLine(context: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number) {
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 1;
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.closePath();
  }

}
