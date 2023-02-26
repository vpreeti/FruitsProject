// /*This code snippet shows how to connect our application to mongoDB using the native mongoDB node.js driver.*/
// import { MongoClient } from "mongodb";
// // Replace the uri string with your mongoDB deployment's connection string
// const uri = "mongodb://127.0.0.1:27017";
// const client = new MongoClient(uri);
// async function run() {
//   try {
//     await client.connect();
//     /*In our case, mongoDB server is running locally on our maching, so we test the connection by trying to connect
//      to an existing database called shopDB. Inside shopDB we have an existing collection called products. Make sure 
//      the mongoDB server is running before running this app.js.*/

//     // database name and collection name
//     const dbName = "shopDB";
//     const collectionName = "products";
//     const database = client.db(dbName);
//     const products = database.collection(collectionName);

//     // query for a product that has the id of 1
//     const query = {_id: 1};
//     const product = await products.findOne(query);
//     console.log(product);
//   } finally {
//     // ensure that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//require the Mongoose package (after running >npm i mongoose in Hyper to install it)
import { connect, Schema, model } from 'mongoose';
import mongoose from 'mongoose';
 
//connect to MongoDB by specifying port to access MongoDB server
main().catch(err => console.log(err));
 
async function main() {
  mongoose.set("strictQuery", false);
  await connect('mongodb://localhost:27017/FruitsDB');
  }
 
//create a SCHEMA that sets out the fields each document will have and their datatypes
const fruitSchema = new Schema ({
	name: String,
	rating: Number,
	review: String
})
 
//create a MODEL
const Fruit = new model ("Fruit", fruitSchema)
 
//create a DOCUMENT
const fruit = new Fruit ({
	name: "Apple",
	rating: 7,
	review: "Great!"
})
 
//save the document
fruit.save()
 
//**CHALLENGE: Set up a people database with one document and two fields**//
//create a SCHEMA
const personSchema = new Schema({
  name: String,
  age: Number,
});
 
//create a MODEL
const Person = model('Person', personSchema);
 
//create a DOCUMENT
const person = new Person({
  name: "John",
  age: 37
});
 
//Save it
person.save();