import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputForm]'
})
export class InputFormDirective {
  constructor(private elementRef: ElementRef) { }

  @HostListener('blur') onBlur() {
    const value = this.elementRef.nativeElement.value;
    this.elementRef.nativeElement.value = value.toUpperCase();
  }
}
