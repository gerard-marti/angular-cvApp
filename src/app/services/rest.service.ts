import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ResponseInterface} from "../shared/interfaces/shared.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private _baseUrl: string = environment.baseUrl;
  private _receiver: string = environment.mailReceiver;

  constructor(private http:HttpClient ) { }

  sendEmail(subject: string, name: string, senderMail: string, message: string): Observable<ResponseInterface> {
    const url = `${this._baseUrl}/api/send-email`;
    const body = { receiver: this._receiver, senderName: name, senderMail, subject, message };

    return this.http.post<ResponseInterface>(url, body);
  }

  uploadCv(fileUploaded: File): Observable<ResponseInterface> {
    const url = `${this._baseUrl}/api/upload-cv`;

    const formData: FormData = new FormData();
    formData.append("file", fileUploaded, fileUploaded.name);

    let headers = new HttpHeaders();
    console.log(url, formData);

    return this.http.post<ResponseInterface>(url, formData, { headers });
  }


}
