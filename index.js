const mongooseconnection = require("mongoose");
mongooseconnection.connect("mongodb://127.0.0.1:27017/mongoosepractice", {
  useNewUrlParser: true
});
const connection = mongooseconnection.connection;
connection.once("open", function() {
  console.log("MongoDB connected successfully");
  connection.db.listCollections().toArray(function(err, names) {
    if (err) {
      console.log(err);
    } else {
      for (i = 0; i < names.length; i++) {
        console.log(names[i].name);
        if ((names[i].name = "userprofiles")) {
          console.log("Userprofile Collection Exists in DB");
          mongooseconnection.connection.db.dropCollection(
            "userprofiles",
            function(err, result) {
              console.log("Collection droped");
            }
          );
          console.log("Userprofile Collection No Longer Available");
        } else {
          console.log("Collection doesn't exist");
        }
      }
    }
  });
});

const Profile = require("./mongoosemodel.js");
