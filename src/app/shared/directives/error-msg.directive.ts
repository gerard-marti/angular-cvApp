import {Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  private _color: string = 'red';
  private _msg: string = 'This field is required';

  htmlElement: ElementRef<HTMLElement>;
  @Input() set color( value: string ) {
    this._color = value;
    this.setColor();
  }
  @Input() set msg ( value: string ) {
    this._msg = value;
    this.setMessage();
  }
  @Input() set valid ( value: boolean ) {
    this.htmlElement.nativeElement.hidden = !value;
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ( changes.msg ){
      this.htmlElement.nativeElement.innerText = changes.msg.currentValue;
    }
    if (changes.color) {
      this.htmlElement.nativeElement.style.color = changes.color.currentValue;
    }
  }

  ngOnInit(): void {
    this.setClasses();
    this.setColor();
    this.setMessage();
  }

  setClasses(): void {
    this.htmlElement.nativeElement.classList.add('form-text')
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMessage(): void {
    this.htmlElement.nativeElement.innerText = this._msg;
  }

}
