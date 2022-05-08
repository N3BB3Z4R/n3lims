const { Pool } = require('pg');

const db = new Pool({
  user: 'postgres',
  password: 'radiohead',
  host: 'localhost',
  port: 5432,
  database: 'n3lims',
})
module.exports = db;