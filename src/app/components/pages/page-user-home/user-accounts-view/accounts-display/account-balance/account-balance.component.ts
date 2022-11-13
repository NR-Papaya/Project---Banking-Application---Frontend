import { Component, Input, OnInit } from '@angular/core';
import { AccountModel } from 'src/app/models/accountModel';

@Component({
  selector: 'app-account-balance',
  templateUrl: './account-balance.component.html',
  styleUrls: ['./account-balance.component.css'],
})
export class AccountBalanceComponent implements OnInit {
  
  @Input()
  currentAccount: any;

  constructor() {}

  ngOnInit(): void {}
}
