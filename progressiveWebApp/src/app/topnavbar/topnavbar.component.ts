import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { smoothlyMenu } from '../app.helpers';

declare var jQuery: any;

@Component({
  selector: 'topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.sass']
})
export class TopnavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toggleNavigation(): void {
    jQuery("body").toggleClass("mini-navbar");
    smoothlyMenu();
  }

  logout() {
    //localStorage.clear();
    this.router.navigate(['dashboard']);
  }

}
