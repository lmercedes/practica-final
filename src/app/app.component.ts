import { Component, OnInit } from '@angular/core';
import { ApiService } from './api-service';
import {FormControl, FormGroupDirective, NgForm, Validators, ReactiveFormsModule} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Country } from './interfaces/interfaces' ; 

import 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Práctica Final';
  private chartData;
  private loanData;
  private loanCountryData
  private countries;
  selectedCountry : string;
  loading = false;

  constructor(private _ApiService: ApiService){}


  ngOnInit() {
    this._ApiService.getCountriesData().subscribe(r => { this.countries = r; });
    this.getData();
    this.getLoansByCountry();
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

  
getData() {
  this._ApiService.getDataPrestamos().subscribe(result => { this.chartData = result; });
  this._ApiService.getLoans().subscribe(result => { this.loanData = result } );
}

  
  getLoansByCountry() {
    if(this.selectedCountry)
    {
      this.loading = true;
      this._ApiService.getLoansByCountry(this.selectedCountry).subscribe(result => { this.loanCountryData = result; this.loading = false;} );
    }
  }
  isEmptyObject(obj) {
  return (obj && (Object.keys(obj).length === 0 && (Object.keys(obj).length > 1)) );
}
}
