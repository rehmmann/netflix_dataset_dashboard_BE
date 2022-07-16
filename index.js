const express = require("express");
const app = express();
const pool = require("./db");

// app.get("/", (req, res) => {
//   res.send("HELLO");
// });

app.get("/movies", (req, res) => {
  pool.query(
    "SELECT production,imdb_score FROM titles WHERE imdb_score IS NOT NULL AND type = 'MOVIE' LIMIT 10;",
    (err, result) => {
      if (!err) {
        //   console.log(res.rows);
        res.send(result.rows);
      } else {
        console.log(err.message);
      }
      pool.end;
    }
  );
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to port ${port}`));
