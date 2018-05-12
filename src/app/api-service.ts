import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';


import {Observable} from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ApiService {
  apiUrl: string = 'http://localhost:3002';
  
  constructor(private http:HttpClient) { 
    
  }

  getData(countryName, activity) {
    let url = `${this.apiUrl}/data/${countryName}/${activity}`;
    return this.http.get(url);
  }

  getDataPrestamos() {
    //let url = `${this.apiUrl}/prestamos/${countryName}`;
    let url = `${this.apiUrl}/prestamos/`;
    return this.http.get(url);
  }

  getCountriesData() {
    let url = `${this.apiUrl}/countries/`;
    return this.http.get(url);
  }

  getActivitiesData(){
    let url = `${this.apiUrl}/activities/`;
    return this.http.get(url);
  }

  getLoans(): Observable<any> {
    let url = `${this.apiUrl}/loans/`;
    return this.http.get(url);
  }

  getLoansByCountry(countryName)
  {
    let url = `${this.apiUrl}/loansByCountries/${countryName}`;
    return this.http.get(url);

  }

  
}
