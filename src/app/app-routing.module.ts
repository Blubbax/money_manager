import { EditTransactionComponent } from './pages/edit-transaction/edit-transaction.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './helper/auth-guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTransactionComponent } from './pages/create-transaction/create-transaction.component';

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
