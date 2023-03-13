const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "otautomation",
  password: "pasindu",
  port: 5432,
});

module.exports = pool;
