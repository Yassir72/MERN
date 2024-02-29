const {MongoClient} = require('mongodb');

const url = "mongodb://localhost:27017";

const client = new MongoClient(url);
async function main(){
await client
    .connect()
    .then(()=>console.log("connected to the db"))
    .catch((error)=>console.log("Error : ",error));

const db = client.db('mydb');
const collection = db.collection('users');

await collection
    .insertMany([{name : "yassir",age : "23"},{name : "mohammed",age : "22"},{name : "othmane",age : "25"}])
    .then((user)=>console.log("User created successfully :",user))
    .catch((error)=>console.log("Error: ",error));

await collection
    .find().toArray()
    .then((user) => console.log(user))
    .catch((error) => console.log("Error: ", error));

}

main();