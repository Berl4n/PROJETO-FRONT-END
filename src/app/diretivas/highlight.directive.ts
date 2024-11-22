import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: false,
})
export class HighlightDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.changeBackgroundColor('white');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeBackgroundColor(null); // Reseta a cor de fundo
  }

  private changeBackgroundColor(color: string | null) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}
