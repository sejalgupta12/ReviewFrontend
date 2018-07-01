import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{path:"",component:LoginComponent},{path:"register",component:RegisterComponent},{path:"forgot-pass",component:ForgotPassComponent},{path:"register",component:RegisterComponent},{path:"dashboard",component:DashboardComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
