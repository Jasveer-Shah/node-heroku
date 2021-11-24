const express = require("express");
const app = express();


app.get("/", function(req, res) {
    res.send("got the response from express!");
})

app.listen(process.env.PORT || 5000);