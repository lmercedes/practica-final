import { Component, OnInit } from '@angular/core';
import { ApiService } from './api-service';
import { MatToolbar } from '@angular/material' ;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Práctica Final';
  private chartData;

  constructor(private _ApiService: ApiService){}


  ngOnInit() {

    // Local Data //////////////////////////////////////////////////////////////////////
    //this.generateData();
    // change the data periodically
    //setInterval(() => this.generateData(), 3000);
    // API Data ////////////////////////////////////////////////////////////////////////
    setInterval(() => this._ApiService.getData().subscribe(result => { this.chartData = result; }), 3000);
    
  }


  generateData() {
    this.chartData = [];
    for (let i = 0; i < (8 + Math.floor(Math.random() * 10)); i++) {
      this.chartData.push([
        `Index ${i}`,
        Math.floor(Math.random() * 100)
      ]);
    }
  }

}
