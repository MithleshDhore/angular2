import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";

// import {BsDropdownModule} from 'ngx-bootstrap';

import {BasicLayoutComponent} from "./basicLayout.component";
import {BlankLayoutComponent} from "./blankLayout.component";
import {TopNavigationLayoutComponent} from "./topNavigationlayout.component";

import {NavigationComponent} from "./../navigation/navigation.component";
// import {FooterComponent} from "./../footer/footer.component";
import {TopnavbarComponent} from "../topnavbar/topnavbar.component";
// import {TopNavigationNavbarComponent} from "./../topnavbar/topnavigationnavbar.component";


@NgModule({
  declarations: [
    BasicLayoutComponent,
    BlankLayoutComponent,
    NavigationComponent,
    TopNavigationLayoutComponent,
    TopnavbarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
  ],
  exports: [
    BasicLayoutComponent,
    BlankLayoutComponent,
    NavigationComponent,
    TopNavigationLayoutComponent,
    TopnavbarComponent,
  ],
})

export class LayoutsModule {}
