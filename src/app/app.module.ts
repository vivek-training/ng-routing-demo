import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Topic1Component } from './topic1/topic1.component';
import { Topic2Component } from './topic2/topic2.component';
import { Topic3Component } from './topic3/topic3.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { AdminModule } from './admin/admin.module';
import { FinanceModule } from './finance/finance.module';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { FinanceRoutingModule } from './finance/finance-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Topic1Component,
    Topic2Component,
    Topic3Component,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
