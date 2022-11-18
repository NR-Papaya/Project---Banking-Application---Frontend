import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog'
import {MatDialog} from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field'
import { AccountModel } from 'src/app/models/accountModel';
import { TransactionModel } from 'src/app/models/TransactionModel';
import { DatabaseConnectionService } from 'src/app/services/database-connection.service';


@Component({
  selector: 'app-add-account-popup',
  templateUrl: './add-account-popup.component.html',
  styleUrls: ['./add-account-popup.component.css']
})
export class AddAccountPopupComponent implements OnInit {
  
  accountType:string="";
  accountName:string="";

  updateTable;
  updateAccountListPassedFun;
  account_numer:number;
 
  constructor(public dialogRef: MatDialog ,
    private dbService: DatabaseConnectionService,
    @Inject(MAT_DIALOG_DATA) public data : any
    ) { 
      this.updateTable=data.updateTablePassedFun;
      this.account_numer=data.account_numer;
      this.updateAccountListPassedFun=data.updateAccountListPassedFun;
      
    }

  ngOnInit(): void {
  }

  ngOnChanges(){
    console.log(this.accountType);
  }

  onCancel(): void {
     
    this.dialogRef.closeAll();
  } 

  changeAccountNameOption(value:string):void {
    this.accountType=value;
  }

  createAccount(): void {
    let newAccount:AccountModel=new AccountModel(0,0,'',0,'');
    newAccount.account_type= this.accountType; 
    newAccount.account_name= this.accountName;
    

    this.dbService.addAccount(newAccount).subscribe(
      ()=>{//updateAccountList after adding newAccount
        this.updateAccountListPassedFun(); 
      } 
    );  
    this.dialogRef.closeAll();

  }

}
