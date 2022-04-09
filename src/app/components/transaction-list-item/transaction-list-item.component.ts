import { Transaction } from './../../model/transaction';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-transaction-list-item',
  templateUrl: './transaction-list-item.component.html',
  styleUrls: ['./transaction-list-item.component.scss']
})
export class TransactionListItemComponent implements OnInit {

  @Input() transaction: Transaction | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  delete(): void {

  }

}
