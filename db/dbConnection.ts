import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "movierentaldb",
  password: "5502", // change to your password
  port: 5432
});

export default pool;
