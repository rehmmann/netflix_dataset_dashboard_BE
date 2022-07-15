const express = require('express');
const app = express();
const pool = require("./db");


app.get('/',(req,res) => {
    res.send('HELLO');
})

const port = process.env.PORT || 3000;
app.listen(port,() => console.log(`Listening to port ${port}`));