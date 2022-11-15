import { Component, Input, OnInit } from '@angular/core';
import { TransactionModel } from 'src/app/models/TransactionModel';

@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.css']
})
export class TransactionsTableComponent implements OnInit {

  @Input()
  transactionList:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
