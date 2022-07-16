const Pool = require("pg").Pool;

const pool = new Pool({
  user: "rehmmann",
  host: "netflix-dataset.postgres.database.azure.com",
  port: 5432,
  password: "Scdf@54321",
  database: "postgres",
  ssl: true
});

pool.connect();
// pool.query("Select * from titles", (err, res) => {
//   if (!err) {
//     console.log(res.rows);
//   } else {
//     console.log(err.message);
//   }
//   pool.end;
// });

module.exports = pool;
