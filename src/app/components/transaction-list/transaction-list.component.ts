import { LoginService } from './../../service/login.service';
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
  private dataChangedSubscription: any;

  constructor(
    private transactionService: TransactionService,
    private loginService: LoginService
    ) { }

  ngOnInit(): void {
    this.getTransactions();
    this.dataChangedSubscription = this.transactionService.dataChanged.subscribe(() => this.getTransactions());
  }

  ngOnDestroy() {
    this.dataChangedSubscription.unsubscribe();
  }


  getTransactions(): void {
    this.transactionService.getTransactions(this.loginService.userValue.id).subscribe(transactions => this.transactions = transactions)
  }

}
