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

const options = {
  autoIndex: DEBUG,
  autoReconnect: true,
  useNewUrlParser: true,
};

const connectDB = mongoose.createConnection(dbs, options);

connectDB.on("open", () => console.log("DB connection open"));
connectDB.on("error", (err) =>
  console.log(`DB connection error : ${err.message}`, err)
);
connectDB.on("close", () => console.log("DB connection closed"));
module.exports = connectDB;
