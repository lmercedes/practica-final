import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';


import { AppComponent } from './app.component';
import { BarChartComponent } from './shared/bar-chart/bar-chart.component';
import { ApiService } from './api-service';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule, MatCardModule, MatTabsModule, MatSelectModule}  from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatSelectModule,
    BrowserAnimationsModule
    
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
