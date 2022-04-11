import { Transaction } from './../model/transaction';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private url = 'http://localhost:8080/api/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.url + "transaction");
  }

  getTransaction(id: number): Observable<Transaction> {
    return this.http.get<Transaction>(this.url + "transaction/" + id);
  }

  addTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(this.url+"transaction", transaction, this.httpOptions);
  }

  deleteTransaction(id: number): Observable<Transaction> {
    return this.http.delete<Transaction>(this.url+"transaction/"+id);
  }

  /*


  updateTransaction(transaction: Transaction): Observable<Transaction> {
    return null;
  }


  */


}
