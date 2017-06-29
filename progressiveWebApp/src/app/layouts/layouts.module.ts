import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";

import {BasicLayoutComponent} from "./basicLayout.component";
import {BlankLayoutComponent} from "./blankLayout.component";

import {NavigationComponent} from "./../navigation/navigation.component";
import {TopnavbarComponent} from "../topnavbar/topnavbar.component";

@NgModule({
  declarations: [
    BasicLayoutComponent,
    BlankLayoutComponent,
    NavigationComponent,
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
    TopnavbarComponent,
  ],
})

export class LayoutsModule {}
