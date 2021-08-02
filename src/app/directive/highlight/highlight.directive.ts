import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') highLightColor: string;

  constructor(private el: ElementRef) {
  }

  @HostListener('mouseenter')
  onMouserEnter(){
    this.highlight(this.highLightColor || 'yellow');
  }

  @HostListener('mouseleave')
  onMouserLeave(){
    this.highlight(null);
  }



  private highlight(color: string){
    this.el.nativeElement.style.backgroundColor = color;
  }

}
