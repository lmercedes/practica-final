import { Component, OnInit, OnChanges, ViewChild, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';
import { Temperatures } from '../../shared/data';
import { Loan } from '../../interfaces/interfaces'; 



@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  @ViewChild('chart') private chartContainer: ElementRef;
  @Input() private data: Array<Loan>;
  @Input() private selectedCountry: string;


  title: string = 'D3.js with Angular 2!';
  subtitle: string = 'Multi-Series Line Chart';

  svg: any;
  margin = {top: 20, right: 80, bottom: 30, left: 50};
  g: any;
  width: number;
  height: number;
  x;
  y;
  z;
  line;
  dataGroup: Array<any>;
  private parseYear: any;
  fechas;

  constructor() {
    this.parseYear = d3.timeParse("%Y");
   }

  ngOnInit() {
    
    this.initChart();
    this.drawAxis();
    this.drawPath();  
  }
  setup() {
    this.initChart();
    this.drawAxis();
    this.drawPath(); 
  }

  ngOnChanges(): void {
    if (this.svg) {
      this.svg.selectAll("*").remove()
      this.setup();
    }
  }

  private initChart(): void {

    this.parseData();

    this.dataGroup = d3.nest()
    .key(function(d) {
        return d['country'];
    })
    .entries(this.data); 

    this.fechas = this.dataGroup.map((v) => v['values'].map((v) => v.disbursed_year ))[0];
    
    const element = this.chartContainer.nativeElement;
    this.width = element.offsetWidth - this.margin.left - this.margin.right;
    this.height = element.offsetHeight - this.margin.top - this.margin.bottom;

    this.svg = d3.select(element).select('svg')
      .attr('width', element.offsetWidth)
      .attr('height', element.offsetHeight)
  
    this.g = this.svg.append("g").attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");

    this.x = d3Scale.scaleTime().range([0, this.width]);
    this.y = d3Scale.scaleLinear().range([this.height, 0]);
    this.z = d3Scale.scaleOrdinal(d3.schemeCategory10);

    this.line = d3Shape.line()
                       .curve(d3Shape.curveBasis)
                       .x( (d: any) => this.x(d.disbursed_year) )
                       .y( (d: any) => this.y(d.cantidad_prestamos) );
                       let parseYear = d3.timeParse("%Y");

    this.x.domain(d3Array.extent(this.fechas, (d: Date) => d ));

    this.y.domain([
      d3Array.min(this.dataGroup, function(c) { return d3Array.min(c.values, function(d) { return d['cantidad_prestamos']; }); }),
      d3Array.max(this.dataGroup, function(c) { return d3Array.max(c.values, function(d) { return d['cantidad_prestamos']; }); })
    ]);

    this.z.domain(this.dataGroup.map(function(c) { return c.country; }));
  }

  private drawAxis(): void {
     this.g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + this.height + ")")
      .call(d3Axis.axisBottom(this.x));

    this.g.append("g")
      .attr("class", "axis axis--y")
      .call(d3Axis.axisLeft(this.y))
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("fill", "#000")
      .text("Cantidad de Préstamos");
  }

  private drawPath(): void {

    let country = this.g.selectAll(".country")
      .data(this.dataGroup)
      .enter().append("g")
      .attr("class", "country");



    country.append("path")
      .attr("class", "line")
      .attr("d", (d) => this.line(d.values) )
      .style("stroke", (d) => this.z(d.key) );

      country.append("text")
      .datum(function(d) { return {country: d.key, value: d.values[d.values.length - 1]}; })
      .attr("transform", (d) => "translate(" + this.x((d.value.disbursed_year)) + "," + this.y(d.value.cantidad_prestamos) + ")" )
      .attr("x", 3)
      .attr("dy", "0.35em")
      .style("font", "10px sans-serif")
      .text(function(d) { return d.country });
      
  }

  private parseData()
  {
    this.data = this.data.map(res => this.reviver(res));
  }

  private reviver(res):any
  {
    let parseYear = d3.timeParse("%Y");

    res['disbursed_year'] = parseYear(res['disbursed_year']);
    return res;
  }

}
