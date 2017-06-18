import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { BlankLayoutComponent } from "./layouts/blankLayout.component";
import { BasicLayoutComponent } from "./layouts/basicLayout.component";
import { LoginComponent } from './login/login.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { VehicleListComponent } from './vehicle-list/vehicle-list.component'
import { AuthGuard } from './guard/index';
import { RegisterComponent } from './register/register.component';
import { VehicleInfoComponent } from './vehicle-info/vehicle-info.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full', canActivate: [AuthGuard] },
  {
    path: '', component: BlankLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ]
  },
  {
    path: 'dashboard', component: BasicLayoutComponent, canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardComponent },
      { path: 'vehiclelist', component: VehicleListComponent,
      children: [
        {path: ':id', component: VehicleInfoComponent }
      ]
     }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
