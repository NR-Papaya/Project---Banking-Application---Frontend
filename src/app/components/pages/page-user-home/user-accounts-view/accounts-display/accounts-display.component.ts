import { Component, OnInit } from '@angular/core';
import { AccountModel } from 'src/app/models/accountModel';
import { DatabaseConnectionService } from 'src/app/services/database-connection.service';

@Component({
  selector: 'app-accounts-display',
  templateUrl: './accounts-display.component.html',
  styleUrls: ['./accounts-display.component.css'],
})
export class AccountsDisplayComponent implements OnInit {
  accountList: AccountModel[] = [];
  activeAccount: AccountModel = new AccountModel(0, 0, '', 0, '');

  constructor(private dbService: DatabaseConnectionService) {}

  ngOnInit(): void {
    this.dbService.retrieveAccounts().subscribe((data) => {
      this.accountList = data;

      if (data.length) {
        this.accountList = data;
        this.activeAccount = data[0];
      }
    });
  }
}
