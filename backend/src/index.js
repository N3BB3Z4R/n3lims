const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const trialsRoutes = require('./routes/trials.routes.js');

const app = express();

app.use(cors())
app.use(morgan('dev'))
app.use(express.json());

app.use(trialsRoutes)

app.use((err, req, res, next) => {
  return res.json({
    message: 'ERROR!!!',
    message: err.message
  })
})

app.listen(3001);
console.log("PostgreSQL Server running on port 3001");
