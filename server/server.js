const express = require('express')
const cors = require('cors')
const app = express()
var fs = require('fs')
var filter = require('underscore');


app.use(cors())

app.get('/data', (req, res) => {

  fs.readFile('~/datos/data.json','utf8' ,function(err, data) {

    res.send(JSON.parse(data))
  });
 
});
app.get('/data/:country/:activity', (req, res) => {

  fs.readFile('datos/data.json','utf8' ,function(err, loans) {
    var countryName = req.params.country;
    var activity = req.params.activity;

    var d = JSON.parse(loans);
    filteredData = filter.where(d, { country:countryName});
    res.send(filteredData)
  });
});

app.get('/prestamos/', (req, res) => {

  fs.readFile('datos/cant_prestamos_pais.json','utf8' ,function(err, loans) {

    var d = JSON.parse(loans);
    res.send(d)
  });
});


app.get('/countries', (req, res) => {

  fs.readFile('datos/countries.json','utf8' ,function(err, countries) {
    var countriesData = JSON.parse(countries);
    res.send(countriesData)
  });
});


app.get('/loans', (req, res) => {

  fs.readFile('datos/loans.json','utf8' ,function(err, loans) {
    var loansData = JSON.parse(loans);
    res.send(loansData)
  });
});


app.get('/loansByCountries/:country', (req, res) => {
  var countryName = req.params.country;

  fs.readFile('datos/loansAll.json','utf8' ,function(err, loans) {
    var d = JSON.parse(loans);
    filteredData = filter.where(d, { country:countryName});
    res.send(filteredData)
  });
});



app.get('/*', (req, res) => res.send('API KIVA LOANS!'))


app.listen(3002, () => console.log('Example app listening on port 3002!'))