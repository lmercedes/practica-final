import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';


import { AppComponent } from './app.component';
import { BarChartComponent } from './shared/bar-chart/bar-chart.component';
import { ApiService } from './api-service';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule, MatCardModule, MatTabsModule, MatSelectModule, MatListModule,MatProgressBarModule}  from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LineChartComponent } from './shared/line-chart/line-chart.component';




@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatSelectModule,
    MatListModule,
    MatProgressBarModule,
    BrowserAnimationsModule
    
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
