import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';


import { AppComponent } from './app.component';
import { BarChartComponent } from './shared/bar-chart/bar-chart.component';
import { ApiService } from './api-service';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule, MatCardModule, MatTableModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TablaDatosComponent } from './shared/tabla-datos/tabla-datos.component';



@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    TablaDatosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatToolbarModule,
    MatTableModule,
    MatCardModule,
    BrowserAnimationsModule
    
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
