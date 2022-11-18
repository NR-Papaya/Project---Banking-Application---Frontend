import { Component, Inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountModel } from 'src/app/models/accountModel';
import { TransferModel } from 'src/app/models/TransferModel';
import { DatabaseConnectionService } from 'src/app/services/database-connection.service';

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

  errorDisplay: string = '';

  constructor(
    private dbService: DatabaseConnectionService,
    private router: Router,
  ) {}

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
    let secondaryAccount = this.accountList.find(
      (account) => account.account_number == this.secondAccount
    );

    if (primaryAccount && secondaryAccount) {
      if (this.amount > primaryAccount.account_balance) {
        this.errorDisplay = 'Amount exceeds amount available for this account.';
      } else {
        //do service call to api here pass in transferModel
        this.dbService
          .transfer(
            new TransferModel(
              this.firstAccount,
              this.secondAccount,
              this.amount,
              `Transfer from Account:${this.firstAccount} to Account:${this.secondAccount}`
            )
          )
          .subscribe((data) => {
            if (data.status == 200){
              this.router.navigate(['/userhome']);
            }
          });
      }
    }
  }
}
