const { Client } = require('pg');
require('dotenv').config();

const connectOptions = {
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
};

const pgClient = new Client(connectOptions);

pgClient
  .connect()
  .then(() => {
    console.log(`Connected to ${pgClient.database}`);
  })
  .catch(err => console.error('connection error', err.stack));

// const todos = async() => {
//   const result = await pgClient.query('SELECT * FROM todos');
//   console.log(result.rows);
// };

// todos();

module.exports = {
  db: pgClient,
};
