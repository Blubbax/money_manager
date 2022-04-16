import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TransactionService } from './../../service/transaction.service';
import { Transaction } from './../../model/transaction';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-transaction-list-item',
  templateUrl: './transaction-list-item.component.html',
  styleUrls: ['./transaction-list-item.component.scss']
})
export class TransactionListItemComponent implements OnInit {

  @Input() transaction: Transaction | undefined;

  transactionForm = new FormGroup({
    description: new FormControl('', Validators.required),
    amount: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
  });

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
  }

  delete(): void {
    if (this.transaction) {
      this.transactionService.deleteTransaction(this.transaction.id).subscribe();
      this.transaction = undefined;
    }
  }

}
