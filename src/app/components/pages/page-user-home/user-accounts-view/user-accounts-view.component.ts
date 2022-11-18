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
  tableName:string="All Transactions"

  constructor(private dbService: DatabaseConnectionService) {}

  ngOnInit(): void {
    this.changeAllTransactionsbtnStyle();

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
  
  updateTable=(table:TransactionModel[])=>{
    this.currentTransactionList=table;
  }
 
  updateAccountList=()=>{
    this.dbService.retrieveAccounts().subscribe((data) => {
      this.accountList = data; 
      if (data.length) {
        this.accountList = data; 
        
      }
    });  
  }

  setExpenses(){
    this.tableName="Expenses";
    let debitList = this.transactionList.filter((transaction:TransactionModel)=> transaction.tx_type == "debit")
    if(debitList.length){
      this.currentTransactionList = debitList;
    }
  }
  
  setDeposits(){
    this.tableName="Deposits";
    let creditList = this.transactionList.filter((transaction:TransactionModel)=> transaction.tx_type == "credit")
    if(creditList.length){
      this.currentTransactionList = creditList;
    }
    
  }
  
  setAllTransactions(){
    this.tableName="All Transactions";
    this.currentTransactionList = this.transactionList;
  }

  changeAllTransactionsbtnStyle(){
    let btn2 = document.getElementById('btn1');
    //make this button current style
    btn2?.classList.remove("btn-primary");
    btn2?.classList.add("currentbtn");

    //make other buttons not selected
    let btn1 = document.getElementById('btn2');
    btn1?.classList.add('btn-primary');

    let btn3 = document.getElementById('btn3');
    btn3?.classList.add('btn-primary'); 
  }

  changeExpensesbtnStyle(){
    let btn2 = document.getElementById('btn2');
    //make this button current style
    btn2?.classList.remove("btn-primary");
    btn2?.classList.add("currentbtn");
    //make other buttons not selected
    let btn1 = document.getElementById('btn1');
   
    btn1?.classList.add('btn-primary');

    let btn3 = document.getElementById('btn3');
    btn3?.classList.add('btn-primary'); 
  }

  changeDepositsbtnStyle(){
    let btn2 = document.getElementById('btn3');
    //make this button current style
    btn2?.classList.remove("btn-primary");
    btn2?.classList.add("currentbtn");
    //make other buttons not selected
    let btn1 = document.getElementById('btn1');
    btn1?.classList.add('btn-primary');

    let btn3 = document.getElementById('btn2');
    btn3?.classList.add('btn-primary'); 
  }

}
