import { environment } from './../../environments/environment.prod';
import { TransactionSummary } from './../model/transaction-summary';
import { Transaction } from './../model/transaction';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private url = environment.transactionApiUrl;

  public dataChanged : Subject<string> = new Subject();

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
    return this.http.get<Transaction>(this.url + "transaction/" + id)
      .pipe(
        catchError(this.handleError<Transaction>('get transaction error'))
      );
  }

  addTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(this.url+"transaction", transaction, this.httpOptions)
    .pipe(
      tap(() => this.dataChanged.next(""))
    );
  }

  deleteTransaction(id: number): Observable<Transaction> {
    return this.http.delete<Transaction>(this.url+"transaction/"+id)
      .pipe(
        tap(() => this.dataChanged.next(""))
      );
  }

  updateTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.put<Transaction>(this.url+"transaction/"+transaction.id, transaction, this.httpOptions)
    .pipe(
      tap(() => this.dataChanged.next(""))
    );
  }

  getSummary(userId: number): Observable<TransactionSummary> {
    return this.http.get<TransactionSummary>(this.url+"summary/"+userId);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
