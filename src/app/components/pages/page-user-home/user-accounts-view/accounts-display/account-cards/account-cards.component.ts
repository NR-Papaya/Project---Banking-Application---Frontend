import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AccountModel } from 'src/app/models/accountModel';

@Component({
  selector: 'app-account-cards',
  templateUrl: './account-cards.component.html',
  styleUrls: ['./account-cards.component.css']
})
export class AccountCardsComponent implements OnInit {
  
  @Input()
  account:any;
  
  @Output()
  emitAccount = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }
  updateCurrentAccount(accountNumber:number){
    this.emitAccount.emit(accountNumber)
  }
}
