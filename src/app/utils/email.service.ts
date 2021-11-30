import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Email } from './email.model';
import { SEND_EMAIL_GENERAL_TEXT } from './constants';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  sendGeneralTextEmail(data: Email): Observable<any> {
    return this.http.post<any>(SEND_EMAIL_GENERAL_TEXT, data);
  }
}
