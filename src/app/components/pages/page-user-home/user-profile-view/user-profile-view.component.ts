import { Component, OnInit } from '@angular/core';
import { ProfileModel } from 'src/app/models/profileModel';
import { DatabaseConnectionService } from 'src/app/services/database-connection.service';

@Component({
  selector: 'app-user-profile-view',
  templateUrl: './user-profile-view.component.html',
  styleUrls: ['./user-profile-view.component.css']
})
export class UserProfileViewComponent implements OnInit {

  user:ProfileModel = new ProfileModel("","","","","")

  constructor(private userService:DatabaseConnectionService) { }

  ngOnInit(): void {
    this.userService.retrieveUserInfo().subscribe((data) => {
      if(data) {
        this.user = data;
      }
    })
  }

  showEmailBox: boolean = false;
  toggleEmailBox() {
    this.showEmailBox = !this.showEmailBox;
  }

  showPasswordBox: boolean = false;
  togglePasswordBox() {
    this.showPasswordBox = !this.showPasswordBox;
  }

}
