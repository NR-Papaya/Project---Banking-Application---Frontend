import { Component, OnInit } from '@angular/core';
import { AccountModel } from 'src/app/models/accountModel';
import { TransactionModel } from 'src/app/models/TransactionModel';
import { DatabaseConnectionService } from 'src/app/services/database-connection.service';

@Component({
  selector: 'app-user-accounts-view',
  templateUrl: './user-accounts-view.component.html',
  styleUrls: ['./user-accounts-view.component.css']
})
export class UserAccountsViewComponent implements OnInit {

  transactionList: TransactionModel[]=[];
  accountList: AccountModel[] = [];
  activeAccount: AccountModel = new AccountModel(0, 0, '', 0, '');

  constructor(private dbService: DatabaseConnectionService ) { }

  ngOnInit(): void {
    this.dbService.retrieveAccounts().subscribe(
      (data) => {
      this.accountList = data;

      if (data.length) {
        this.accountList = data;
        this.activeAccount = data[0];   
        this.dbService.retrieveTransactions(this.activeAccount.account_number).subscribe(
          (data) => {
            this.transactionList = data; 
            console.log(data);
            if (data.length) {
              console.log(data[0]); 
            }
        });
      }
    });
    
  }

}
