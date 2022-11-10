import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/UserModel';
import { LoginCredentialModel } from '../models/loginCredentialModel';

@Injectable({
  providedIn: 'root',
})
export class DatabaseConnectionService {
  constructor(private httpClient: HttpClient) {}

  attemptLogin(credentials: LoginCredentialModel): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type':'application/json'
    }) };

    
      console.log(httpOptions)
    let body = JSON.stringify(credentials);
    return this.httpClient.post<any>(
      'http://localhost:8080/logIn',
      body,
      httpOptions
    );
  }
}
