import { Component, Inject, Input, OnInit, Optional } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
  accountList;
  errorDisplay: string = '';
  updateAccountList;

  amount: number = 0;
  firstAccount: AccountModel = new AccountModel(0, 0, '', 0, '');
  secondAccount: AccountModel = new AccountModel(0, 0, '', 0, '');

  constructor(
    private dbService: DatabaseConnectionService,
    private router: Router,
    public dialogRef: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.accountList = data.accountList;
    this.updateAccountList = data.updateAccountList;
  }

  ngOnInit(): void {}

  amountOnChange(amount: number) {
    this.amount = parseFloat(amount.toFixed(2));
  }

  submitTransfer() {
    let primaryAccount = this.firstAccount;
    let secondaryAccount = this.secondAccount;

    if (primaryAccount && secondaryAccount) {
      if (this.amount > primaryAccount.account_balance) {
        this.errorDisplay = 'Amount exceeds the balance available.';
      } else if (primaryAccount == secondaryAccount) {
        this.errorDisplay = 'First and Second accounts cannot be the same.';
      } else {
        this.dbService
          .transfer(
            new TransferModel(
              this.firstAccount.account_number,
              this.secondAccount.account_number,
              this.amount,
              `Transfer from Account: ${this.firstAccount.account_number} to Account: ${this.secondAccount.account_number}`
            )
          )
          .subscribe((data) => {
            if (data.status == 200) {
              this.dialogRef.closeAll();
              this.updateAccountList();
            }
          });
      }
    }
  }
}
