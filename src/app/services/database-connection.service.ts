import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { UserModel } from '../models/UserModel';
import { LoginCredentialModel } from '../models/loginCredentialModel';
import { RegisterModel } from '../models/registerModel';
import { AccountModel } from '../models/accountModel';
import { TransactionModel } from '../models/TransactionModel';
import { TransferModel } from '../models/TransferModel';

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
        withCredentials: true,
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
        withCredentials: true,
      })
      .pipe(catchError(this.handleError));
  }

  retrieveAccounts(): Observable<AccountModel[]> {
    return this.httpClient.get<AccountModel[]>(
      'http://localhost:8080/Accounts',
      { withCredentials: true }
    );
  }

  retrieveTransactions(accountNumber: number): Observable<TransactionModel[]> {
    let myparams = new HttpParams().set('tx_account_number', accountNumber);

    let url = 'http://localhost:8080/MyAccount/Transactions';

    return this.httpClient.get<TransactionModel[]>(url, {
      params: myparams,
      withCredentials: true,
    });
  }

  transfer(transferModel: TransferModel): Observable<any> {
    let body = JSON.stringify(transferModel);
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    });
    return this.httpClient
      .put<any>('http://localhost:8080/Accounts/Transfer', body, {
        headers,
        observe: 'response',
        withCredentials: true,
      })
      .pipe(catchError(this.handleError));
  }

  addAccount(account: AccountModel): Observable<any> {
    let body = JSON.stringify(account);

    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    });

    return this.httpClient
      .post<any>('http://localhost:8080/Accounts/Add', body, {
        headers,
        observe: 'response',
        withCredentials: true,
      })
      .pipe(catchError(this.handleError));
  }
  handleError(error: HttpErrorResponse) {
    return throwError(() => error);
  }
}
