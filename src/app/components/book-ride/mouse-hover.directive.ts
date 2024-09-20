import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appMouseHover]',
  standalone: true,
})
export class MouseHoverDirective {
  private isClicked = false;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onHoverEnter() {
    if (!this.isClicked) {
      this.renderer.setStyle(
        this.element.nativeElement,
        'background-color',
        '#0fbbff'
      );
    }
  }
  @HostListener('mouseleave') onHoverLeaver() {
    if (!this.isClicked) {
      this.renderer.setStyle(
        this.element.nativeElement,
        'background-color',
        'white'
      );
    }
  }
  @HostListener('click') onClick() {
    this.isClicked = !this.isClicked;
    if (this.isClicked) {
      this.renderer.setStyle(
        this.element.nativeElement,
        'background-color',
        '#0fbbff'
      );
    } else {
      this.renderer.setStyle(
        this.element.nativeElement,
        'background-color',
        'white'
      );
    }
  }
}
