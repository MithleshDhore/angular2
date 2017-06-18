import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'jquery-slimscroll';

declare var jQuery:any;

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {
  userData: any;
  userName: any;

  constructor(private router: Router) {}

  ngOnInit() {
  }

  getUserDetails(){
    this.userData = JSON.parse(localStorage.getItem('currentUser'));
    return this.userData.username;
  }

  ngAfterViewInit() {
    jQuery('#side-menu').metisMenu();

    if (jQuery("body").hasClass('fixed-sidebar')) {
      jQuery('.sidebar-collapse').slimscroll({
        height: '100%'
      })
    }
  }

  activeRoute(routename: string): boolean{
    return this.router.url.indexOf(routename) > -1;
  }


}
