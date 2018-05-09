import { Component, OnInit } from '@angular/core';
import { ApiService } from './api-service';
import { MatToolbar } from '@angular/material' ;
import {FormControl, FormGroupDirective, NgForm, Validators, ReactiveFormsModule} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Country } from './interfaces/interfaces' ; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Práctica Final';
  private chartData;
  private countries;
  private activities;
  selectedCountry : string = 'Colombia';
  selectedActivity : string = 'Farming';

  constructor(private _ApiService: ApiService){}


  ngOnInit() {

    // Local Data //////////////////////////////////////////////////////////////////////
    //this.generateData();
    // change the data periodically
    //setInterval(() => this.generateData(), 3000);
    // API Data ////////////////////////////////////////////////////////////////////////
    //setInterval(() => this._ApiService.getData().subscribe(result => { this.chartData = result; }), 3000);
    this.getData();
    this._ApiService.getCountriesData().subscribe(r => { this.countries = r; });
    this._ApiService.getActivitiesData().subscribe(r => { this.activities = r;});
  }

  selected = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  generateData() {
    this.chartData = [];
    for (let i = 0; i < (8 + Math.floor(Math.random() * 10)); i++) {
      this.chartData.push([
        `Index ${i}`,
        Math.floor(Math.random() * 100)
      ]);
    }
  }

  
getData() {
  if(this.selectedCountry && this.selectedActivity) {
  //this._ApiService.getData(this.selectedCountry, this.selectedActivity).subscribe(result => { this.chartData = result; });
  this._ApiService.getDataPrestamos(this.selectedCountry).subscribe(result => { this.chartData = result; });
  }
}

isEmptyObject(obj) {
  return (obj && (Object.keys(obj).length === 0));
}

}
