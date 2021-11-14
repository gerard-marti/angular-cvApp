import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styles: [
  ]
})
export class EmailComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  sendEmail() {

  }

  hasError( field:string ): boolean {
    return this.myForm.get(field)?.invalid || false;
  }

}
