import { Component, OnInit } from '@angular/core';
import {Inject} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import { AddAccountPopupComponent } from './user-accounts-view/accounts-display/add-account-popup/add-account-popup.component';

@Component({
  selector: 'app-page-user-home',
  templateUrl: './page-user-home.component.html',
  styleUrls: ['./page-user-home.component.css']
})
export class PageUserHomeComponent implements OnInit {
  
  viewState:number = 1;

  

  constructor(public dialogRef: MatDialog) {}

  ngOnInit(): void {
  }
  changeViewState(viewNum:number){
    this.viewState = viewNum;
  }
  

   




  
}
