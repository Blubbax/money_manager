import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { TransactionListItemComponent } from './components/transaction-list-item/transaction-list-item.component';
import { CreateTransactionComponent } from './components/create-transaction/create-transaction.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TransactionListItemComponent,
    CreateTransactionComponent,
    TransactionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
