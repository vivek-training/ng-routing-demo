import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Topic1Component } from './topic1/topic1.component';
import { Topic2Component } from './topic2/topic2.component';
import { Topic3Component } from './topic3/topic3.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'topic1',
    children: [
      {
        path: '',
        component: Topic1Component
      },
      {
        path: ':year',
        component: Topic1Component
      },
      {
        path: ':year/:city',
        component: Topic1Component
      },
      {
        path: '**',
        component: HomeComponent
      }
    ]
  },
  {
    path: 'topic2',
    component: Topic2Component
  },
  {
    path: 'topic3',
    component: Topic3Component
  },
  {
    path: 'finance',
    loadChildren: () =>
      import('./finance/finance.module').then(m => m.FinanceModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
