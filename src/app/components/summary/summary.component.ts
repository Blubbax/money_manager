import { TransactionSummary } from './../../model/transaction-summary';
import { LoginService } from './../../service/login.service';
import { TransactionService } from './../../service/transaction.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  transactionSummary: TransactionSummary | null = null;
  private dataChangedSubscription: any;

  constructor(
    private transactionService: TransactionService,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.dataChanged();
    this.dataChangedSubscription = this.transactionService.dataChanged.subscribe(() => this.dataChanged());
  }

  ngOnDestroy() {
    this.dataChangedSubscription.unsubscribe();
  }

  dataChanged() {
    this.transactionService.getSummary(this.loginService.userValue.id).subscribe(transactionSummary => {this.transactionSummary = transactionSummary; console.log(transactionSummary);});
  }

}
