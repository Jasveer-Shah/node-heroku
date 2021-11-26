const http = require("http")
const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require('./routes/admin');
const shopRoute = require('./routes/shop')
const app = express();


           // handling different routes
  app.use(bodyParser.urlencoded({extended: false}));
  app.use("/admin", adminRoutes);
  app.use(shopRoute);
//   app.use("/", (req, res, next) => {
//       console.log("this always runs");
//       next();
//   })
  
  


//   app.use("/", (req, res, next) => {

//     console.log("main url")
//       res.send("<h2>got the response from express!</h2>");
//     // next();
// })


app.use((req, res, next) => {           // in the last after all routes we are declaring here for 404 req
    res.status(404)
       .send('<h2>Page not found</h2>')
})

// const server = http.createServer(app)
// app.listen(process.env.PORT || 5000);
// server.listen(3003);
app.listen(3003)