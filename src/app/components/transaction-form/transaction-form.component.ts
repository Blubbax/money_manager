import { LoginService } from './../../service/login.service';
import { Transaction } from './../../model/transaction';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss']
})
export class TransactionFormComponent implements OnInit {

  @Input() transaction: Transaction | null = null;
  @Output() abortEvent = new EventEmitter<string>();
  @Output() submitEvent = new EventEmitter<Transaction>();

  transactionForm = new FormGroup({
    description: new FormControl('', Validators.required),
    amount: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
  });

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['transaction']) {
      this.getTransactionInputData(this.transaction)
    }
  }

  onAbort() {
    this.abortEvent.emit("");
  }

  onSubmit() {
    if (this.transactionForm.valid) {
      const userId = this.loginService.userValue.id;
      const description = this.transactionForm.value.description;
      const amount = this.transactionForm.value.amount;
      const date = this.transactionForm.value.date;

      if (this.transaction) {
        const id = this.transaction.id;
        this.submitEvent.emit({ userId: userId, id: id, description: description, amount: amount, date: date});
      } else {
        this.submitEvent.emit({ userId: userId, id: -1, description: description, amount: amount, date: date});
      }
    }
  }

  private getTransactionInputData(transaction: Transaction | null): Transaction | null {
    if (transaction) {
      this.transactionForm.patchValue(transaction);
      this.transactionForm.get('date')?.patchValue(this.formatDate(transaction.date));
    }
    return transaction;
  }

  private formatDate(date: Date): string {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }

}
