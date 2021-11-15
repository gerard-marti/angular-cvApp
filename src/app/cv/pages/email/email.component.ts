import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ValidatorService} from "../../../shared/validators/validator.service";

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

  constructor(private fb: FormBuilder,
              private vs: ValidatorService) { }

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
  }

  sendEmail() {

  }

  hasError( field:string ): boolean {
    return (this.myForm.get(field)?.touched
      && this.myForm.get(field)?.invalid)
      || false;
  }

}
