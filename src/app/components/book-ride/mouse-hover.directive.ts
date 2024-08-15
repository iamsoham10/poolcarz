import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appMouseHover]',
  standalone: true
})
export class MouseHoverDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onHoverEnter() {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', '#0fbbff');
  }
  @HostListener('mouseleave') onHoverLeaver() {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'white');
  }

}
