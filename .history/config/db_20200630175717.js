const mongoose = require("mongoose");

const config = require("config");

const db = config.get("mongoURI");

dbs =
  "mongodb+srv://chin123:E550VabxNsjndBwl@contactkeeper.yzqgh.mongodb.net/test?retryWrites=true&w=majority";

// const connectDB = () => {
//   mongoose
//     .connect(dbs, {
//       useNewUrlParser: true,
//       useCreateIndex: true,
//       useFindAndModify: false,
//     })
//     .then(() => console.log("Mongo connecto"))
//     .catch((err) => {
//       console.error(err.message);
//       process.exit(1);
//     });
// };

const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://chin123:<password>@contactkeeper.yzqgh.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
const connectDB = () => {
  client.connect((err) => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
  });
};
module.exports = connectDB;
