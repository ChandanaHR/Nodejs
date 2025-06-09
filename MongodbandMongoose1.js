//Connect with DB and queries
//There are essentially two alternatives when constructing a Node application that has to connect to a MongoDB database:
//1) Using native MongoDB driver
  //Step1 : Create your project directory and move to the directory:
            mkdir project directory
            cd project directory
 //Step2 : nitialize the Node npm init and yes to all the options:
            npm init -y
//Step3 : Install the MongoDB driver dependency:
          npm install --save mongodb
//Step4 : Create one js file to write code
//Step5 : 
        const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'carDB';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the server
client.connect(function (err) {
    assert.equal(null, err);
    console.log("The server was successfully connected.");

    const db = client.db(dbName);

    insertDocuments(db, function () {
        client.close();
    });
});

const insertDocuments = function (db, callback) {

    // Get the documents collection
    const collection = db.collection('cars');

    // Insert some docuents
    collection.insertMany([
        {
            name: "Grand i10 Nios",
            color: "Aqua Teal",
            cc: 1145
        },
        {
            name: "Swift Desire",
            color: "moon white",
            cc: 1087
        }, {
            name: "Creta",
            color: "Shine Black",
            cc: 1480
        }
    ], function (err, result) {
        assert.equal(err, null);
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        console.log("3 documents were added to the collection.");
        callback(result);
    });
}

//OR
const Mongoclient = require('mongodb').MongoClient
//const assert = require('assert')
const url = 'mongodb://localhost:27017';
const dbname = 'Cars';
const client = new Mongoclient(url);
async function run() {
    try {
        await client.connect();
        console.log("Connected successfully to the server");
        const db = client.db(dbname);
        const collection = db.collection('Cardetails');
        const insertone = await collection.insertOne({name:"tatamotors",price:20000});
        console.log("One document inserted successfully",insertone.insertedId);
        const insertMany = await collection.insertMany([
      { name: "Benz", price: 30000 },
      { name: "Audi", price: 35000 }
    ]);
    console.log("Multiple documents inserted successfully",insertMany.insertedCount);
    }
    catch(err) {
        console.error(err);
    }
    finally {
        client.close();
    }
}
run();

//Second method to communicate with mongodb
//Mongoose is an Object Data Modeling (ODM) library for MongoDB. It defines a strongly-typed-schema with default values and schema validations 
//which are later mapped to a MongoDB document. It allows your Node.js application which understands JavaScript objects, to communicate with your MongoDB database, 
//which understands docs, collections, and databases.
//Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a higher-level, schema-based solution to model your MongoDB documents using JavaScript.
//Step1 : Install mongoose
          npm install mongoose
//Step2 : Define schema and model
          //In model.js
          const mongoose = require('mongoose');
          const carschema = new mongoose.Schema({  //Define the schema
                name : String,
                color: String,
                cc : number
          })
