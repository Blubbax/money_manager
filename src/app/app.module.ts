import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { TransactionListItemComponent } from './components/transaction-list-item/transaction-list-item.component';
import { CreateTransactionComponent } from './components/create-transaction/create-transaction.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditTransactionComponent } from './components/edit-transaction/edit-transaction.component';
import { TransactionFormComponent } from './components/transaction-form/transaction-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TransactionListItemComponent,
    CreateTransactionComponent,
    TransactionListComponent,
    HeaderComponent,
    DashboardComponent,
    EditTransactionComponent,
    TransactionFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
