import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { TransactionListItemComponent } from './components/transaction-list-item/transaction-list-item.component';
import { CreateTransactionComponent } from './pages/create-transaction/create-transaction.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EditTransactionComponent } from './pages/edit-transaction/edit-transaction.component';
import { TransactionFormComponent } from './components/transaction-form/transaction-form.component';
import { SummaryComponent } from './components/summary/summary.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import localeDe from '@angular/common/locales/de';
import { registerLocaleData } from '@angular/common';
 registerLocaleData(localeDe);

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
    TransactionFormComponent,
    SummaryComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'de-DE'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
