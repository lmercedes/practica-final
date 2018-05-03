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
app.get('/data/:country/:year', (req, res) => {

  fs.readFile('datos/data.json','utf8' ,function(err, loans) {
    var countryName = req.params.country;
    var year = req.params.year;

    var d = JSON.parse(loans);
    filteredData = filter.where(d, { country:countryName, disbursed_year: year});
    res.send(filteredData)
  });
});

app.get('/*', (req, res) => res.send('Hello World!'))


app.listen(3002, () => console.log('Example app listening on port 3002!'))