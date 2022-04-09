import { Transaction } from './../model/transaction';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private url = 'api/user';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
    // TODO
  }

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.url);
  }

  getTransaction(id: number): Observable<Transaction> {
    return this.http.get<Transaction>(this.url);
  }

  /*
  addTransaction(transaction: Transaction): Observable<Transaction> {
    return null;
  }

  deleteTransaction(id: number): Observable<Transaction> {
    return null;
  }

  updateTransaction(transaction: Transaction): Observable<Transaction> {
    return null;
  }
*/

}
