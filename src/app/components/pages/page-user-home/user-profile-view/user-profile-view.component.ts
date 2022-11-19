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
  email: string = "";
  password: string = "" 
  showPasswordBox: boolean = false;
  showEmailBox: boolean = false;

  constructor(private userService:DatabaseConnectionService) { }

  ngOnInit(): void {
    // this.userService.retrieveUserInfo().subscribe((data) => {
    //   if(data) {
    //     this.user = data;
        
    //   }
    // })
    this.updateUserInfo();
  }

  updateUserInfo(): void{
    this.userService.retrieveUserInfo().subscribe((data) => {
      if(data) {
        this.user = data;
        this.email=data.user_email;
      }
    })
  }

  

  toggleEmailBox() {
    this.showEmailBox = !this.showEmailBox;
  }

  enterPressedonEmailInput(){
    console.log("enterPressedonEmailInput: started");
 
    this.userService.changeEmail(this.email).subscribe(
      (data)=>{
        console.log("returning from change email request");
        this.updateUserInfo();
        this.toggleEmailBox(); 
      } 
    ) 
  }

  togglePasswordBox() {
    this.showPasswordBox = !this.showPasswordBox;
  }


  enterPressedonPasswordInput(){
    console.log("Password: started");
 
    this.userService.changePassword(this.password).subscribe(
      (data)=>{
        console.log("returning from change password request");
        this.updateUserInfo();
        this.togglePasswordBox(); 
      } 
    ) 
  }

 

}
