const { db } = require("./mongodbdatabase"); // Adjust the path to your mongoDB module

async function testMongoDB() {
  try {
    // Example: Query a collection
    const collection = db.collection("lessons"); // Replace with your collection name
    const documents = await collection.find({}).toArray();

    console.log("Documents in collection:", documents);
  } catch (error) {
    console.error("Error testing MongoDB connection or query:", error);
  } finally {
    process.exit(); // Exit after testing
  }
}

testMongoDB();