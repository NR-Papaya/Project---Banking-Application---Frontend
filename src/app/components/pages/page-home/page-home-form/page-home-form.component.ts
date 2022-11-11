import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginCredentialModel } from 'src/app/models/loginCredentialModel';
import { DatabaseConnectionService } from 'src/app/services/database-connection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-home-form',
  templateUrl: './page-home-form.component.html',
  styleUrls: ['./page-home-form.component.css'],
})
export class PageHomeFormComponent implements OnInit {
  user_name: string = '';
  user_password: string = '';
  errorMessage: string = '';

  //router imported for nav pushing
  constructor(
    private dbService: DatabaseConnectionService,
    private router: Router
  ) {}

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
    this.dbService.attemptLogin(loginCredentials).subscribe(
      (data) => {
        if ((data.status = 200)) {
          this.router.navigate(['/userhome']);
        }
      },
      (err) => {
        this.errorMessage = 'login failed';
      }
    );
  }
}
