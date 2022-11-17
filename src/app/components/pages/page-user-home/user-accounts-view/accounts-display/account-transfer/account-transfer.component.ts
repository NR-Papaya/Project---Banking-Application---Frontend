import { Component, Input, OnInit } from '@angular/core';
import { AccountModel } from 'src/app/models/accountModel';

@Component({
  selector: 'app-account-transfer',
  templateUrl: './account-transfer.component.html',
  styleUrls: ['./account-transfer.component.css'],
})
export class AccountTransferComponent implements OnInit {
  @Input()
  accountList: AccountModel[] = [];

  amount: number = 0.0;
  firstAccount: number = 0;
  secondAccount: number = 0;

  firstBalance: number = 0.0;
  secondBalance: number = 0.0;
  
  errorDisplay:string = ""
  
  constructor() {}

  ngOnInit(): void {}

  onFirstAccountChange() {
    let accountSelected = this.accountList.find(
      (account) => account.account_number == this.firstAccount
    );
    if (accountSelected) {
      this.firstBalance = accountSelected.account_balance;
    } else {
      this.firstBalance = 0.0;
    }
  }
  onSecondAccountChange() {
    let accountSelected = this.accountList.find(
      (account) => account.account_number == this.secondAccount
    );
    if (accountSelected) {
      this.secondBalance = accountSelected.account_balance;
    } else {
      this.secondBalance = 0.0;
    }
  }
  submitTransfer() {
    let primaryAccount = this.accountList.find(
      (account) => account.account_number == this.firstAccount
    );

    if (primaryAccount) {
      if (this.amount > primaryAccount.account_balance) {
        this.errorDisplay = "Amount exceeds amount available for this account."
      }
    }
  }
}
