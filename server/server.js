const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/data', (req, res) => {
  const chartData = [];
  for (let i = 0; i < (8 + Math.floor(Math.random() * 10)); i++) {
    chartData.push([
      `Index ${i}`,
      Math.floor(Math.random() * 100)
    ]);
  }
  res.send(chartData)

})

app.get('/*', (req, res) => res.send('Hello World!'))


app.listen(3001, () => console.log('Example app listening on port 3001!'))