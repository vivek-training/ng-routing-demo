import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceRoutingModule } from './finance-routing.module';
import { HomeComponent } from './home/home.component';
import { ReportsComponent } from './reports/reports.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [HomeComponent, ReportsComponent, NotFoundComponent],
  imports: [
    CommonModule,
    FinanceRoutingModule
  ]
})
export class FinanceModule { }
