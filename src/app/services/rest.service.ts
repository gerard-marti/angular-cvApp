import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {EmailResponseInterface} from "../shared/interfaces/shared.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private _baseUrl: string = environment.baseUrl;
  private _receiver: string = environment.mailReceiver;

  constructor(private http:HttpClient ) { }

  sendEmail(subject: string, name: string, senderMail: string, message: string): Observable<EmailResponseInterface> {
    const url = `${this._baseUrl}/api/send-email`;
    const body = { receiver: this._receiver, senderName: name, senderMail, subject, message };

    return this.http.post<EmailResponseInterface>(url, body);
  }


}
