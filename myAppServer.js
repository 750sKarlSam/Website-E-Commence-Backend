const { db } = require("./mongoDB");
const express = require("express");
const morgan = require("morgan");
const fs = require("fs");
const cors = require ("cors");

const app = express();
app.use(express.json());
app.use(morgan('dev'));

const corsOptions = {
    origin: ['https://750skarlsam.github.io/Website-E-Commence/'],
    methods: ['GET','POST','PUT','DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
var express = require("express");
app.get('/collections/lessons', (req, res, next) => {
    // Query the MongoDB 'lessons' collection
    db.collection('lessons')
      .find({})
      .toArray()
      .then(lessons => {
        // Return the lessons as JSON response
        res.status(200).json(lessons);
      })
      .catch(error => {
        // Pass any errors to the error-handling middleware
        next(error);
      });
  }); 
// app.post("/", function(req, res) {
//  res.send("a POST request? Let’s create a new element");
// });
// app.put("/", function(req, res) {
//  res.send(”Ok, let’s change an element");
// });
// app.delete("/", function(req, res) {
//  res.send(”Are you sure??? Ok, let’s delete a record");
// });
// app.listen(3000, function() {
//  console.log("CRUD app listening on port 3000");
// });


const port = process.env.PORT || 3000;
app.listen(port,function () {
    console.log(`App started: ${port} \nhttp:127.0.0.1.3001/ \nhttps://https://750skarlsam.github.io/Website-E-Commence/`);
});


