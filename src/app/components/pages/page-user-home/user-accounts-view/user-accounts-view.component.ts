import { Component, OnInit } from '@angular/core';
import { AccountModel } from 'src/app/models/accountModel';
import { TransactionModel } from 'src/app/models/TransactionModel';
import { DatabaseConnectionService } from 'src/app/services/database-connection.service';

@Component({
  selector: 'app-user-accounts-view',
  templateUrl: './user-accounts-view.component.html',
  styleUrls: ['./user-accounts-view.component.css'],
})
export class UserAccountsViewComponent implements OnInit {
  transactionList: TransactionModel[] = [];
  currentTransactionList: TransactionModel[] = [];
  accountList: AccountModel[] = [];
  activeAccount: AccountModel = new AccountModel(0, 0, '', 0, '');

  constructor(private dbService: DatabaseConnectionService) {}

  ngOnInit(): void {
    this.dbService.retrieveAccounts().subscribe((data) => {
      this.accountList = data;

      if (data.length) {
        this.accountList = data;
        this.activeAccount = data[0];
        this.dbService
          .retrieveTransactions(this.activeAccount.account_number)
          .subscribe((data) => {
            if (data.length) {
              this.transactionList = data;
              this.currentTransactionList = data;
            }
          });
      }
    });
  }

  updateActiveAccount(account: AccountModel) {
    this.activeAccount = account;
    this.dbService
      .retrieveTransactions(account.account_number)
      .subscribe((data) => {
        if (data.length) {
          this.transactionList = data;
          this.currentTransactionList = data;
        }
      });
  }
  
  setDebits(){
    let debitList = this.transactionList.filter((transaction:TransactionModel)=> transaction.tx_type == "debit")
    if(debitList.length){
      this.currentTransactionList = debitList;
    }
  }
  
  setCredits(){
    let creditList = this.transactionList.filter((transaction:TransactionModel)=> transaction.tx_type == "credit")
    if(creditList.length){
      this.currentTransactionList = creditList;
    }
  }
  
  setAllTransactions(){
    this.currentTransactionList = this.transactionList;
  }
}
