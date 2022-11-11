import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { UserModel } from '../models/UserModel';
import { LoginCredentialModel } from '../models/loginCredentialModel';
import { RegisterModel } from '../models/registerModel';
import { AccountModel } from '../models/accountModel';

@Injectable({
  providedIn: 'root',
})
export class DatabaseConnectionService {
  constructor(private httpClient: HttpClient) {}

  attemptLogin(credentials: LoginCredentialModel): Observable<any> {
    let body = JSON.stringify(credentials);
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    });

    return this.httpClient
      .post<any>('http://localhost:8080/logIn', body, {
        headers,
        observe: 'response',
      })
      .pipe(catchError(this.handleError));
  }

  registerUser(userReg: RegisterModel): Observable<any> {
    let body = JSON.stringify(userReg);
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    });

    return this.httpClient
      .post<any>('http://localhost:8080/register', body, {
        headers,
        observe: 'response',
      })
      .pipe(catchError(this.handleError));
  }

  retrieveAccounts(): Observable<AccountModel[]> {
    return this.httpClient.get<AccountModel[]>(
      'http://localhost:8080/Accounts'
    );
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => error);
  }
}