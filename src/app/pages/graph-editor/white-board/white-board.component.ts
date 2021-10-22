import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

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

  constructor(

  ) { }

  ngOnInit(): void {
    console.log();
  }

  ngAfterViewInit(): void{
    const canvasElement = this.canvasRef.nativeElement;
    const context = canvasElement.getContext('2d');
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
