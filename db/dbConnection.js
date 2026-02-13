const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "movierentaldb",
  password: "5502", // Change this to your PostgreSQL password
  port: 5432
});

module.exports = pool;