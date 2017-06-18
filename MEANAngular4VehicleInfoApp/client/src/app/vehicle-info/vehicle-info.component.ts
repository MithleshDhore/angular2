import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Chart from 'chart.js';

import { DataService } from '../services/data.service'

@Component({
  selector: 'vehicle-info',
  templateUrl: './vehicle-info.component.html',
  styleUrls: ['./vehicle-info.component.sass']
})
export class VehicleInfoComponent implements OnInit {

  @ViewChild('mileagebarChart') mileage_el: ElementRef;
  @ViewChild('distancebarChart') distance_el: ElementRef;

  vehicleNo: any;
  tripInfo: string[];
  tableData: any[];
  headers: string[];
  values: any[];
  mileageBarData: any;
  distanceBarData: any;
  barOptions: {};
  distanceChart: any;
  mileageChart: any;

  lat: number = 51.678418;
  lng: number = 7.809007;

  private tripInfoUrl = '../assets/trips.json';

  constructor(private dataService: DataService, private rd: Renderer2, private route: ActivatedRoute) { }

  ngOnInit() {

    this.mileageBarData = {
      labels: [],
      datasets: [
        {
          label: "Vehicle 2",
          backgroundColor: 'rgba(26,179,148,0.5)',
          borderColor: "rgba(26,179,148,0.7)",
          pointBackgroundColor: "rgba(26,179,148,1)",
          pointBorderColor: "#fff",
          data: []
        }
      ]
    };

    this.distanceBarData = {
      labels: [],
      datasets: [
        {
          label: "Vehicle 2",
          backgroundColor: 'rgba(26,179,148,0.5)',
          borderColor: "rgba(26,179,148,0.7)",
          pointBackgroundColor: "rgba(26,179,148,1)",
          pointBorderColor: "#fff",
          data: []
        }
      ]
    };

    this.barOptions = {
      responsive: true
    };

    var mileage = this.mileage_el.nativeElement;
    this.mileageChart = new Chart(mileage, { type: 'bar', data: this.mileageBarData, options: this.barOptions });

    var distance = this.distance_el.nativeElement;
    this.distanceChart = new Chart(distance, { type: 'bar', data: this.distanceBarData, options: this.barOptions });

    this.dataService.get(this.tripInfoUrl)
      .subscribe((data) => { this.getTripInfo(data) }, (error) => { console.log(error) });

    this.route.params
      .subscribe(params => {
        this.mileageBarData.datasets[0].label = params['id'];
        this.distanceBarData.datasets[0].label = params['id'];
        this.mileageChart.update();
        this.distanceChart.update();
      });
  }

  getTripInfo = (data) => {
    this.values = data.results;
    let graphPlotValues = [];

    this.values.map((item, index) => {
      let series = item.series;
      series.map((col, index) => {
        let column = col.columns;
        let obj = {};
        column.forEach((scale, index) => {
          let indexToFetch = index;
          let arrayPlot = [];
          col.values.forEach((vol) => {
            arrayPlot.push(vol[indexToFetch]);
          });
          obj[scale] = arrayPlot;
        });
        graphPlotValues.push(obj)
        this.headers = this.values[0].series[0].columns;
        this.tableData = this.values[0].series[0].values;

        for (let i = 0; i < graphPlotValues[0].dist.length; i++) {
          this.mileageBarData.labels.push(new Date(graphPlotValues[0].time[i]).toLocaleDateString());
          this.mileageBarData.datasets[0].data.push(graphPlotValues[0].mileage[i]);
          this.distanceBarData.labels.push(new Date(graphPlotValues[0].time[i]).toLocaleDateString());
          this.distanceBarData.datasets[0].data.push(graphPlotValues[0].dist[i]);
        }
        this.mileageChart.update();
        this.distanceChart.update();
      });
    });
  }

}
