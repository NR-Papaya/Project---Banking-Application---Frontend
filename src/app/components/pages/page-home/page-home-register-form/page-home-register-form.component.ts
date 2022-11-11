import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DatabaseConnectionService } from 'src/app/services/database-connection.service';

@Component({
  selector: 'app-page-home-register-form',
  templateUrl: './page-home-register-form.component.html',
  styleUrls: ['./page-home-register-form.component.css']
})
export class PageHomeRegisterFormComponent implements OnInit {
  
  user_name:string = "";
  user_password:string="";
  user_first_name:string="";
  user_last_name:string="";
  user_email:string="";
  
  constructor(private dbService: DatabaseConnectionService) { }

  ngOnInit(): void {
  }

  @Output()
  newViewEvent = new EventEmitter<boolean>();

  toggleEventForm(value: boolean) {
    this.newViewEvent.emit(value);
  }
  
}
