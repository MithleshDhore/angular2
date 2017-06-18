import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { NavigationComponent } from './navigation/navigation.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component'
import { BlankLayoutComponent } from './layouts/blankLayout.component';
import { BasicLayoutComponent } from './layouts/basicLayout.component';
import { AlertComponent } from './directives/alert.component';
import { RegisterComponent } from './register/register.component';

import { AppConfig } from './app.config';
import { AuthGuard } from './guard/index';
import { AlertService, AuthenticationService, UserService, DataService } from './services/index';
import { VehicleInfoComponent } from './vehicle-info/vehicle-info.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    TopnavbarComponent,
    NavigationComponent,
    VehicleListComponent,
    AlertComponent,
    RegisterComponent,
    BlankLayoutComponent,
    BasicLayoutComponent,
    VehicleInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    DataService,
    AppConfig,
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
