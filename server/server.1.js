const express = require('express')
const cors = require('cors')
const app = express()
var fs = require('fs'), JSONStream = require('JSONStream');
var filter = require('underscore');


app.use(cors())

app.get('/data', (req, res) => {

  fs.readFile('~/datos/data.json','utf8' ,function(err, data) {

    res.send(JSON.parse(data))
  });
  /*const chartData = [];
  for (let i = 0; i < (8 + Math.floor(Math.random() * 10)); i++) {
    chartData.push([
      `Index ${i}`,
      Math.floor(Math.random() * 100)ß
    ]);
  }
  res.send(chartData)*/

});
app.get('/data/:country/:activity', (req, res) => {

  fs.readFile('datos/data.json','utf8' ,function(err, loans) {
    var countryName = req.params.country;
    //var year = req.params.year;
    var activity = req.params.activity;

    var d = JSON.parse(loans);
    //filteredData = filter.where(d, { country:countryName,activity: activity});
    filteredData = filter.where(d, { country:countryName});
    res.send(filteredData)
  });
});

app.get('/prestamos/:country', (req, res) => {

  fs.readFile('datos/datos_tema.json','utf8' ,function(err, loans) {
    var countryName = req.params.country;

    var d = JSON.parse(loans);
    filteredData = filter.where(d, { country:countryName});
    res.send(d)
  });
});


app.get('/countries', (req, res) => {

  fs.readFile('datos/countries.json','utf8' ,function(err, countries) {
    var countriesData = JSON.parse(countries);
    res.send(countriesData)
  });
});

app.get('/activities', (req, res) => {

  fs.readFile('datos/activities.json','utf8' ,function(err, activities) {
    var activitiesData = JSON.parse(activities);
    res.send(activitiesData)
  });
});


app.get('/*', (req, res) => res.send('Hello World!'))


app.listen(3002, () => console.log('Example app listening on port 3002!'))