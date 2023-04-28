const mongo = require('mongodb').MongoClient;
const express = require('express');
const app = express();

const uri = "mongodb://localhost:27017";

async function connect() {
  try {
    await mongo.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}

app.listen(3000,()=>{
  console.log("on port 3000")
})



/*
async function connect(){
  /**
   * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
   * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
   */
//const uri = "mongodb+srv://scott_klein23:Scottscott123@cluster0.uxbryam.mongodb.net/test";
/*


  const client = new MongoClient(uri);

  try {
      // Connect to the MongoDB cluster
      await client.connect();

      // Make the appropriate DB calls
      await  listDatabases(client);

  } catch (e) {
      console.error(e);
  } finally {
      await client.close();
  }
}

connect().catch(console.error);
*/

/*
async function listDatabases(client){
  const cursor = db.collection('users').find({ email: 'scott@scott' });

  console.log(cursor);
}
const cursor = db.collection('users').find({});

//use this function to test your conecting

async function listDatabases(client){
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};
*/