import { TransactionService } from './../../service/transaction.service';
import { Transaction } from './../../model/transaction';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {

  transactions: Transaction[] = [];

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
  }

  getTransactions(): void {
    this.transactionService.getTransactions().subscribe(transactions => this.transactions = transactions)
  }

}
