const mongoose = require("mongoose");

const config = require("config");

const db = config.get("mongoURI");

dbs =
  "mongodb+srv://chin123:E550VabxNsjndBwl@contactkeeper.yzqgh.mongodb.net/test?retryWrites=true&w=majority";

const connectDB = () => {
  mongoose
    .connect(dbs, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    .then(() => console.log("Mongo connecto"))
    .catch((err) => {
      console.error(err.message);
      process.exit(1);
    });
};

module.exports = connectDB;
