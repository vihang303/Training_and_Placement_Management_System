import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RecordComponent } from './record/record.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GraphComponent } from './graph/graph.component';
// import { FilterPipe } from './dashboard/filter.pipe';
// import { FilterCompanyPipe } from './dashboard/filter-company.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [
    DashboardComponent,
    AdminLoginComponent,
    RecordComponent,
    SidebarComponent,
    GraphComponent,
    // FilterPipe,
    // FilterCompanyPipe
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgChartsModule,
    FormsModule,
    Ng2SearchPipeModule
  ]
  // exports:[
  //   DashboardComponent
  // ]
})
export class AdminModule { }
