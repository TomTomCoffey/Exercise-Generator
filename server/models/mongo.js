const { MongoClient, ObjectId  } = require('mongodb');



const url = process.env.MONGO_URL ?? ""; 
const DB_Name = process.env.MONGO_DB_NAME ?? 'NpFit';

const client = new MongoClient(url);

async function connect() {
    const db = await client.connect();
    console.log(url);
    return db.db(DB_Name);
}

module.exports = {
    connect, ObjectId, DB_Name
}