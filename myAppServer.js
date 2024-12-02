const { db } = require("./mongodbdatabase");
const express = require("express");
const morgan = require("morgan");
const fs = require("fs");
const cors = require ("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(express.json());
app.use(morgan('dev'));

app.use(bodyParser.json());

const corsOptions = {
    origin: ['https://750skarlsam.github.io/Website-E-Commence/','http://127.0.0.1:3001'],
    methods: ['GET','POST','PUT','DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
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
//  res.send("lessons");
// });
// app.put("/", function(req, res) {
//  res.send("lessons");
// });
// app.delete("/", function(req, res) {
//  res.send(lessons");
// });
// app.listen(3000, function() {
//  console.log("CRUD app listening on port 3000");
// });

app.post('/collection/:collectionName', async (req, res, next) => {
    const { collectionName } = req.params;
    const newDocument = req.body;

    try {
        const collection = db.collection(collectionName);
        const result = await collection.insertOne(newDocument);
        res.status(201).send({ message: 'Document created successfully', documentId: result.insertedId });
    } catch (err) {
        next(err);
    }
});


const port = process.env.PORT || 3000;
app.listen(port,function () {
    console.log(`App started: ${port} \nhttp:127.0.0.1.3001/ \nhttps://https://750skarlsam.github.io/Website-E-Commence/`);
});


