import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-user-home-nav',
  templateUrl: './user-home-nav.component.html',
  styleUrls: ['./user-home-nav.component.css'],
})
export class UserHomeNavComponent implements OnInit {
  optionsView: number = 1;

  constructor() {}

  ngOnInit(): void {}

  @Output()
  changeViewEvent = new EventEmitter<number>();
  
  toggleView(){
    this.changeViewEvent.emit(this.optionsView);
  }
  
  
  checkViewState() {
    console.log(this.optionsView);
  }
  
}
