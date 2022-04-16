import { Transaction } from './../model/transaction';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
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
    return this.http.get<Transaction>(this.url + "transaction/" + id)
      .pipe(
        catchError(this.handleError<Transaction>('get transaction error'))
      );
  }

  addTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(this.url+"transaction", transaction, this.httpOptions);
  }

  deleteTransaction(id: number): Observable<Transaction> {
    return this.http.delete<Transaction>(this.url+"transaction/"+id);
  }

  updateTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.put<Transaction>(this.url+"transaction/"+transaction.id, transaction, this.httpOptions);
  }



  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
