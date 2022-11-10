import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { UserModel } from '../models/UserModel';
import { LoginCredentialModel } from '../models/loginCredentialModel';

@Injectable({
  providedIn: 'root',
})
export class DatabaseConnectionService {
  constructor(private httpClient: HttpClient) {}

  attemptLogin(credentials: LoginCredentialModel): Observable<any> {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    });

    let body = JSON.stringify(credentials);

    return this.httpClient
      .post<any>('http://localhost:8080/logIn', body, {
        headers,
        observe: 'response',
      })
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => error);
  }
}
