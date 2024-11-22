import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTextColor]',
  standalone: false,
})
export class TextColorDirective {
  @Input() set appTextColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}
}
