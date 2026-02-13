const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",           // your PostgreSQL username
  host: "localhost",
  database: "movierentaldb",   // your database name
  password: "5502",           // your PostgreSQL password
  port: 5432,
});

module.exports = pool;
