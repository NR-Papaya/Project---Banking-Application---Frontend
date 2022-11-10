import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginCredentialModel } from 'src/app/models/loginCredentialModel';
import { DatabaseConnectionService } from 'src/app/services/database-connection.service';

@Component({
  selector: 'app-page-home-form',
  templateUrl: './page-home-form.component.html',
  styleUrls: ['./page-home-form.component.css'],
})
export class PageHomeFormComponent implements OnInit {
  user_name: string = '';
  user_password: string = '';
  errorMessage: string = '';
  
  
  constructor(private dbService: DatabaseConnectionService) {}

  ngOnInit(): void {}

  @Output()
  newViewEvent = new EventEmitter<boolean>();

  toggleEventForm(value: boolean) {
    this.newViewEvent.emit(value);
  }

  submitLogin() {
    const loginCredentials: LoginCredentialModel = new LoginCredentialModel(
      this.user_name,
      this.user_password
    );
    this.dbService
      .attemptLogin(loginCredentials)
      .subscribe((data) => console.log(data),(err)=>{this.errorMessage = "login failed"});
  }
}
