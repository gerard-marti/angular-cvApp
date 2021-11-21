import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ValidatorService} from "../../../shared/validators/validator.service";
import {SessionStorageService} from "../../../services/sessionStorage.service";
import {Observable} from "rxjs";
import {MessagesService} from "../../../services/messages.service";
import {RestService} from "../../../services/rest.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styles: [
  ],
  providers: [MessageService]
})
export class EmailComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    subject: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern(this.vs.emailPattern)]],
    message: ['', Validators.required]
  })

  loading: boolean = false;
  recaptcha: boolean = false;

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
  contactMe: string = '';
  constructor(private fb: FormBuilder,
              private vs: ValidatorService,
              private ms: MessagesService,
              private ss: SessionStorageService,
              private messageServicePnG: MessageService,
              private restService: RestService) { }

  get emailErrorMsg(): string {
    const errors = this.myForm.get('email')?.errors;

    if(errors?.required) {
      return this.ms.transaltions.general.requiredMail;
    } else if(errors?.pattern) {
      return this.ms.transaltions.general.mailFormat;
    }
    return '';
  }

  ngOnInit(): void {
    this.updateTexts();
    this.sessionStorageObservable.subscribe(() => this.updateTexts());
  }

  sendEmail() {
    this.loading = true;
    const name = this.myForm.get('name')?.value;
    const senderMail = this.myForm.get('email')?.value;
    const subject = this.myForm.get('subject')?.value;
    const message = this.myForm.get('message')?.value;

    this.myForm.reset();

    // let bodyMessage = `Hi ha un nou correu de ${name} amb el següent contingut:\n${message} \n\nEl seu correu es: ${sender}`;

    this.restService.sendEmail(subject, name, senderMail, message)
      .subscribe(resp => {
        this.loading = false
        if(resp.ok) {
          this.messageServicePnG.add({key: 'emailResponse', severity: 'success',
            summary: this.ms.transaltions.general.success,
            detail: this.ms.transaltions.mail.successMsg})
        } else {
          this.messageServicePnG.add({key: 'emailResponse', severity: 'error',
            summary: this.ms.transaltions.general.error,
            detail: this.ms.transaltions.mail.errorMsg})
        }
      });

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
    this.contactMe = this.ms.transaltions.mail.contactMe;
  }

  showResponse() {
    this.recaptcha = true;

  }

}
