const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const path = require('path');

let propertiesReader = require("properties-reader");
let propertiesPath = path.resolve(__dirname, "config/mongodb.properties");
let properties = propertiesReader(propertiesPath);
let dbPprefix = properties.get("mongodb.prefix");
//URL-Encoding of User and PWD
//for potential special characters
let dbUsername = encodeURIComponent(properties.get("mongodb.user"));
let dbPwd = encodeURIComponent(properties.get("mongodb.pwd"));
let dbName = properties.get("mongodb.dbName");
let dbUrl = properties.get("mongodb.dbUrl");
let dbParams = properties.get("mongodb.params");
const uri = dbPprefix + dbUsername + ":" + dbPwd + dbUrl + dbParams;
// const uri = properties.get("db.localhost");

const client = new MongoClient(uri, { serverApi: ServerApiVersion.v1 });
let db = client.db(dbName);
console.log("path to properties file:", propertiesPath);
client.connect((error) => {
  if (error) {
    console.error("Failed to connect to MongoDB:", error);
  } else {
    console.log("Connected to MongoDB successfully.");
  }
});

module.exports = { db }; // Export the db to be used in the server file.

// mongodb+srv://karlsam:<db_password>@karlsam.bkn6d.mongodb.net/?retryWrites=true&w=majority&appName=karlsam
// mongodb.prefix = mongodb+srv://
// mongodb.user = karlsam
// mongodb.pwd = kingdom12
// mongodb.dbName = Webstore
// mongodb.dbUrl = @karlsam.bkn6d.mongodb.net/
// mongodb.params = ?retryWrites=true&w=majority&appName=karlsam






// let database;

// // client.connect(dbName);

// const connectDb = async (theObject) => {

//     try{
//         database = client.db(dbName);
//     }catch(err){
//         console.log(err)
//     }
// }

// const getDb = () => {
//     return database;
// }

// module.exports = { connectDb, getDb}