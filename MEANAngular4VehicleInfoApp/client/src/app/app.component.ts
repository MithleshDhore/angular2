import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  showNav() {
    return (localStorage.getItem('currentUser')) ? true : false;
  }
}
