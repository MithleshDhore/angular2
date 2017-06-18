import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { DataService } from '../services/data.service'

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.sass']
})
export class VehicleListComponent implements OnInit {

  vehicleData: string[];

  private vehicleDataUrl = '../assets/vehicleInfo.json';

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {

    this.dataService.get(this.vehicleDataUrl)
      .subscribe((data) => { this.getvehicleData(data) }, (error) => { console.log(error) });
  }

  getvehicleData = (data) => {
    this.vehicleData = Object.keys(data).map(val => data[val]);
    console.log("vehicleData : ", this.vehicleData);
  }

  onVehicleSelect(selected) {
    this.router.navigate(['dashboard/vehiclelist/', selected]);
  }

}
