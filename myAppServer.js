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

const port = process.env.PORT || 3000;
app.listen(port,function () {
    console.log(`App started: ${port} \nhttp:127.0.0.1.3001/ \nhttps://https://750skarlsam.github.io/Website-E-Commence/`);
});