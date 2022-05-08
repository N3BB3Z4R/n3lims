const express = require('express');
const morgan = require('morgan');

const studiesRoutes = require('./routes/studies.routes.js');

const app = express();

app.use(morgan('dev'))
app.use(express.json());

app.use(studiesRoutes)

app.use((err, req, res, next) => {
  return res.json({
    message: 'ERROR!!!',
    message: err.message
  })
})

app.listen(3001);
console.log("PostgreSQL Server running on port 3001");
