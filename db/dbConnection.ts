import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "movierentaldb",
  password: "P@ssword1", // change to your password
  port: 5432
});

export default pool;
