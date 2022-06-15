import { Pagination } from './../model/pagination';
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
  public pagination : Pagination | null = null;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  getTransactions(userId: number): Observable<Transaction[]> {
    return this.getTransactionsPage("/api/transaction/user/"+userId+"?size=5");
  }

  getTransactionsPage(url : any): Observable<Transaction[]> {
    return this.http.get<any>(this.url + url).pipe(
      map(result=> {
        this.pagination = new Pagination(
          result._links.prev?.href,
          result._links.next?.href,
          result._links.first?.href,
          result._links.last?.href,
          result.page.size,
          result.page.totalElements,
          result.page.totalPages,
          result.page.number
        );
        return result._embedded.transactions;
      })
    );
  }



  getTransaction(id: number): Observable<Transaction> {
    return this.http.get<Transaction>(this.url + "/api/transaction/" + id)
      .pipe(
        catchError(this.handleError<Transaction>('get transaction error'))
      );
  }

  addTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(this.url+"/api/transaction", transaction, this.httpOptions)
    .pipe(
      tap(() => this.dataChanged.next(""))
    );
  }

  deleteTransaction(id: number): Observable<Transaction> {
    return this.http.delete<Transaction>(this.url+"/api/transaction/"+id)
      .pipe(
        tap(() => this.dataChanged.next(""))
      );
  }

  updateTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.put<Transaction>(this.url+"/api/transaction/"+transaction.id, transaction, this.httpOptions)
    .pipe(
      tap(() => this.dataChanged.next(""))
    );
  }

  getSummary(userId: number): Observable<TransactionSummary> {
    return this.http.get<TransactionSummary>(this.url+"/api/summary/"+userId);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
