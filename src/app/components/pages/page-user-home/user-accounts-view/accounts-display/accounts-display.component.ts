import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  Input,
  Inject,
} from '@angular/core';
import { AccountModel } from 'src/app/models/accountModel';
import { DatabaseConnectionService } from 'src/app/services/database-connection.service';
import { MatDialog } from '@angular/material/dialog';

import { AddAccountPopupComponent } from './add-account-popup/add-account-popup.component';
import { TransactionModel } from 'src/app/models/TransactionModel';

@Component({
  selector: 'app-accounts-display',
  templateUrl: './accounts-display.component.html',
  styleUrls: ['./accounts-display.component.css'],
})
export class AccountsDisplayComponent implements OnInit {
  activeAccount: AccountModel = new AccountModel(0, 0, '', 0, '');

  showTransfer: boolean = false;

  constructor(
    private dbService: DatabaseConnectionService,
    public dialogRef: MatDialog
  ) {}

  ngOnInit(): void {}

  @Output()
  accountChangeEvent = new EventEmitter();

  @Input()
  accountList!: AccountModel[];
  @Input()
  updateTablePassedFun!: (table: TransactionModel[]) => void;

  @Input()
  updateAccountListPassedFun!: () => void;

  @Input()
  account_number?: number;

  updateActiveAccount(accountNumber: number) {
    let currentAccount = this.accountList.find(
      (account) => account.account_number == accountNumber
    );
    if (currentAccount) {
      this.activeAccount = currentAccount;
      this.accountChangeEvent.emit(currentAccount);
    }
  }

  openDialog() {
    this.dialogRef.open(AddAccountPopupComponent, {
      data: {
        updateTablePassedFun: this.updateTablePassedFun,
        account_numer: this.account_number,
        updateAccountListPassedFun: this.updateAccountListPassedFun,
      },
    });
  }
}
