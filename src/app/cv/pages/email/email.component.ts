import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ValidatorService} from "../../../shared/validators/validator.service";
import {SessionStorageService} from "../../../services/sessionStorage.service";
import {Observable} from "rxjs";
import {MessagesService} from "../../../services/messages.service";

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styles: [
  ]
})
export class EmailComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    subject: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern(this.vs.emailPattern)]],
    message: ['', Validators.required]
  })

  //Internationalization
  sessionStorageObservable: Observable<any> = this.ss.watchStorage();
  name:string = '';
  email:string = '';
  subject:string = '';
  message:string = '';
  namePlaceHolder:string = '';
  emailPlaceHolder:string = '';
  subjectPlaceHolder:string = '';
  messagePlaceHolder:string = '';
  textButton: string = '';
  constructor(private fb: FormBuilder,
              private vs: ValidatorService,
              private ms: MessagesService,
              private ss: SessionStorageService) { }

  get emailErrorMsg(): string {
    const errors = this.myForm.get('email')?.errors;

    if(errors?.required) {
      return 'Email is mandatory';
    } else if(errors?.pattern) {
      return 'Email has an incorrect format';
    }
    return '';
  }

  ngOnInit(): void {
    this.updateTexts();
    this.sessionStorageObservable.subscribe(() => this.updateTexts());
  }

  sendEmail() {

  }

  hasError( field:string ): boolean {
    return (this.myForm.get(field)?.touched
      && this.myForm.get(field)?.invalid)
      || false;
  }

  updateTexts() {

    this.name = this.ms.transaltions.form.name;
    this.email = this.ms.transaltions.form.email;
    this.subject = this.ms.transaltions.form.subject;
    this.message = this.ms.transaltions.form.message;
    this.namePlaceHolder = this.ms.transaltions.form.placeholders.name;
    this.emailPlaceHolder = this.ms.transaltions.form.placeholders.email;
    this.subjectPlaceHolder = this.ms.transaltions.form.placeholders.subject;
    this.messagePlaceHolder = this.ms.transaltions.form.placeholders.message;
    this.textButton = this.ms.transaltions.form.buttons.send_email;
  }

}
