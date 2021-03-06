import { AuthGuard } from './auth.guard';

import { StartComponent } from './start/start.component';
import { ResetPassComponent } from './reset-pass/reset-pass.component';
import { CustomerReviewComponent } from './customer-review/customer-review.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [{path:"",component:StartComponent},{path:"login",component:LoginComponent},{path:"login/register",component:RegisterComponent},{path:"login/forgot-pass",component:ForgotPassComponent},{path:"dashboard",component:DashboardComponent,canActivate:[AuthGuard]},{path:"customerReview",component:CustomerReviewComponent},{path:"reset-pass",component:ResetPassComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
