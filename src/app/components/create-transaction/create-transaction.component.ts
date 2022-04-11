import { Transaction } from './../../model/transaction';
import { TransactionService } from './../../service/transaction.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.scss']
})
export class CreateTransactionComponent implements OnInit {

  transactionForm = new FormGroup({
    description: new FormControl(''),
    amount: new FormControl('', Validators.required),
    date: new FormControl(''),
  });

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if(this.transactionForm.valid) {
      const description = this.transactionForm.value.description;
      const amount = this.transactionForm.value.amount;
      const date = this.transactionForm.value.date;
      this.transactionService.addTransaction({description: description, amount: amount, date: date, userId: "1", id: 1} as Transaction).subscribe();
    }
  }

}
