import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private chartData: Array<any>;



  ngOnInit() {

    // Local Data //////////////////////////////////////////////////////////////////////
    this.generateData();
    // change the data periodically
    //setInterval(() => this.generateData(), 3000);
    // API Data ////////////////////////////////////////////////////////////////////////
    //this._ApiService.getData().subscribe(result => { this.chartData = result })
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
