import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseConnectionService } from 'src/app/services/database-connection.service';

@Component({
  selector: 'app-user-home-nav',
  templateUrl: './user-home-nav.component.html',
  styleUrls: ['./user-home-nav.component.css'],
})
export class UserHomeNavComponent implements OnInit {
  optionsView: number = 1;

  constructor(
    private router: Router,
    private dbService: DatabaseConnectionService,
  ) {}

  ngOnInit(): void {}

  @Output()
  changeViewEvent = new EventEmitter<number>();
  
  toggleView(){
    this.changeViewEvent.emit(this.optionsView);
  }
  
  
  checkViewState() {
    console.log(this.optionsView);
  }

  onLogOut(){
    console.log("logging out")

    this.dbService.logOut().subscribe(
      ()=>{//updateAccountList after adding newAccount
        console.log("logged out")
        this.router.navigateByUrl('/');
      } 
    );



   

  }
  
}
