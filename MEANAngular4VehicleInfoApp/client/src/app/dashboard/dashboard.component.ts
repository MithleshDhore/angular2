import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  userData: any;
  userName: any;

  constructor() { }

  ngOnInit() {
  }

  getUserDetails(){
    this.userData = JSON.parse(localStorage.getItem('currentUser'));
    return this.userData.username;
  }

}
