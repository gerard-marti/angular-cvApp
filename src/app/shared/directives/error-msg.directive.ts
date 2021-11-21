import {Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MessagesService} from "../../services/messages.service";
import {SessionStorageService} from "../../services/sessionStorage.service";
import {Observable} from "rxjs";

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  private _color: string = 'red';
  sessionStorageObservable: Observable<any> = this.ss.watchStorage();
  private _msg: string = this.ms.transaltions.general.requiredField;
  requiredField: string = this.ms.transaltions.general.requiredField;

  htmlElement: ElementRef<HTMLElement>;
  @Input() set color( value: string ) {
    this._color = value;
    this.setColor();
  }
  @Input() set msg ( value: string ) {
    if(value && value != '') {
      this._msg = value;
      this.setMessage();
    }
  }
  @Input() set valid ( value: boolean ) {
    this.htmlElement.nativeElement.hidden = !value;
  }

  constructor(private el: ElementRef<HTMLElement>,
              private ms: MessagesService,
              private ss: SessionStorageService) {
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
    this.sessionStorageObservable.subscribe(() => this.updateTexts());
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

  updateTexts() {
    if(this._msg.includes('field') || this._msg.includes('camp')) {
      this._msg = this.ms.transaltions.general.requiredField;
    }
  }

}
