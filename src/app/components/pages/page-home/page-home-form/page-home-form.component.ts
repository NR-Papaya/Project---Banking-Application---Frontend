import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginCredentialModel } from 'src/app/models/loginCredentialModel';

@Component({
  selector: 'app-page-home-form',
  templateUrl: './page-home-form.component.html',
  styleUrls: ['./page-home-form.component.css'],
})
export class PageHomeFormComponent implements OnInit {
  
  user_name:string = '';
  user_password:string = '';
  
  
  constructor() {}

  ngOnInit(): void {}

  @Output()
  newViewEvent = new EventEmitter<boolean>();

  toggleEventForm(value:boolean) {
    this.newViewEvent.emit(value);
    console.log('event triggered');
  }
  
  submitLogin(){
    const loginCredentials:LoginCredentialModel = new LoginCredentialModel(this.user_name,this.user_password);
    console.log(loginCredentials);
  }

}
