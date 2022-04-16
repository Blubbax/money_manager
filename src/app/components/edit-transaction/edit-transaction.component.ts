import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TransactionService } from './../../service/transaction.service';
import { Transaction } from './../../model/transaction';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-transaction',
  templateUrl: './edit-transaction.component.html',
  styleUrls: ['./edit-transaction.component.scss']
})
export class EditTransactionComponent implements OnInit {

  // transactionForm = new FormGroup({
  //   description: new FormControl('', Validators.required),
  //   amount: new FormControl('', Validators.required),
  //   date: new FormControl('', Validators.required),
  // });

  transaction: Transaction | null = null;
  errorMsg: String = "";

  private routeSubscription: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private transactionService: TransactionService
  ) { }

  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe((params: { [x: string]: string | number; }) => {
      const id = +params['id'];
      this.transactionService.getTransaction(id).subscribe(transaction => {
        this.transaction = transaction;
        if (!this.transaction) {
          this.errorMsg = "Die Transaktion konnte nicht gefunden werden.";
        }
      });
    })
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

  submit(transaction: Transaction) : void {
    this.transactionService.updateTransaction(transaction).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  abort() : void {
    this.router.navigate(['']);
  }

}
