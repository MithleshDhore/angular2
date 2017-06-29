import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { BlankLayoutComponent } from "./layouts/blankLayout.component";
import { BasicLayoutComponent } from "./layouts/basicLayout.component";
import { DashboardComponent } from './dashboard/dashboard.component'
import { VehicleListComponent } from './vehicle-list/vehicle-list.component'
import { VehicleInfoComponent } from './vehicle-info/vehicle-info.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {
    path: 'dashboard', component: BasicLayoutComponent,
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
