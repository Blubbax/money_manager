import { EditTransactionComponent } from './components/edit-transaction/edit-transaction.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './helper/auth-guard';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTransactionComponent } from './components/create-transaction/create-transaction.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'createTransaction', component: CreateTransactionComponent, canActivate: [AuthGuard]},
  { path: 'editTransaction/:id', component: EditTransactionComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
