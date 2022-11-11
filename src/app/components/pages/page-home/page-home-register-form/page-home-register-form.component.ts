import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RegisterModel } from 'src/app/models/registerModel';
import { DatabaseConnectionService } from 'src/app/services/database-connection.service';

@Component({
  selector: 'app-page-home-register-form',
  templateUrl: './page-home-register-form.component.html',
  styleUrls: ['./page-home-register-form.component.css'],
})
export class PageHomeRegisterFormComponent implements OnInit {
  user_name: string = '';
  user_password: string = '';
  user_first_name: string = '';
  user_last_name: string = '';
  user_email: string = '';

  errorMessage: string = '';

  constructor(private dbService: DatabaseConnectionService) {}

  ngOnInit(): void {}

  @Output()
  newViewEvent = new EventEmitter<boolean>();

  toggleEventForm(value: boolean) {
    this.newViewEvent.emit(value);
  }

  registerNewUser() {
    const regUser: RegisterModel = new RegisterModel(
      this.user_name,
      this.user_password,
      this.user_first_name,
      this.user_last_name,
      this.user_email
    );

    this.dbService.registerUser(regUser).subscribe(
      (data) => {
        console.log(data);
        if (data.status == 201) {
          this.newViewEvent.emit(false);
        }
      },
      (error) => {
        this.errorMessage = 'Unable to register account.';
      }
    );
  }
}
