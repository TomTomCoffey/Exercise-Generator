const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb+srv://scott_klein23:Scottscott123@cluster0.uxbryam.mongodb.net/test';
const client = new MongoClient(url);

// Database Name
const dbName = 'NpFit';

async function main() {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('users');


  searchUser('scott@scott')
    .then ((user) => {
        console.log(user);
    })
    .catch((err) => {
        console.error(err);
    });
    
  //find all users
  /*
  const findResult = await collection.find({}).toArray();
  console.log('Found documents =>', findResult);
  
  var cursor = await db.collection('users').find({password: 'scott' }).toArray(function(err,arr){
    return arr;
 });
 
 console.log(cursor);
  */
}

async function searchUser(email){
    
    try {
        const db = client.db(dbName);
        const collection = db.collection('users');
        const query = {email: email};
        console.log('query', query);
        const user = await collection.findOne(query);
        return user;
    } finally {
        await client.close();
    }
    
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

  /*
searchUser('scott@scott')
    .then ((user) => {
        console.log(user);
    })
    .catch((err) => {
        console.error(err);
    });
    */