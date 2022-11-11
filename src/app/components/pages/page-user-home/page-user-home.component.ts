import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-user-home',
  templateUrl: './page-user-home.component.html',
  styleUrls: ['./page-user-home.component.css']
})
export class PageUserHomeComponent implements OnInit {
  
  viewState:number = 1;
  
  constructor() { }

  ngOnInit(): void {
  }
  
  changeViewState(viewNum:number){
    this.viewState = viewNum;
  }
}
