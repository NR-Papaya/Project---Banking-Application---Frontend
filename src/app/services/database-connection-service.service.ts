import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/UserModel';
import { LoginCredentialModel } from '../models/loginCredentialModel';

@Injectable({
  providedIn: 'root',
})
export class DatabaseConnectionServiceService {
  constructor(private httpClient: HttpClient) {}

  attemptLogin(credintials: LoginCredentialModel): Observable<UserModel> {
    const options = {
      body: LoginCredentialModel,
    };

    return this.httpClient.post<UserModel>(
      'http://localhost:8080/logIn',
      options
    );
  }
}
