import { AuthGuard } from './auth.guard';
import { GraphComponent } from './graph/graph.component';
import { RecordComponent } from './record/record.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

const routes: Routes = [

  {path:'adminlogin',component:AdminLoginComponent},
  {path:'dashboard',component:DashboardComponent, canActivate:[AuthGuard]},
  {path:'record',component:RecordComponent},
  {path:'graph',component:GraphComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
