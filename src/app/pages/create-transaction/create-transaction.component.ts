import { Router } from '@angular/router';
import { Transaction } from '../../model/transaction';
import { TransactionService } from '../../service/transaction.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.scss']
})
export class CreateTransactionComponent implements OnInit {

  constructor(
    private transactionService: TransactionService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  submit(transaction: Transaction): void {
    this.transactionService.addTransaction(transaction).subscribe();
    this.router.navigate(['']);
  }

  abort(): void {
    this.router.navigate(['']);
  }

}
