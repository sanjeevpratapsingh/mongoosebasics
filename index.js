const mongodbconnection = require("mongoose");
mongodbconnection.connect("mongodb://127.0.0.1:27017/mongoosepractice", {
  useNewUrlParser: true
});
const connection = mongodbconnection.connection;
connection.once("open", function() {
  console.log("*** MongoDB got connected ***");
  console.log(`Our Current Database Name : ${connection.db.databaseName}`);
  mongodbconnection.connection.db.dropDatabase(
    console.log(`${connection.db.databaseName} database dropped.`)
  );
});

//const Profile = require("./mongoosemodel.js");
