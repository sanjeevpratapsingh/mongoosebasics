var mongoose = require("mongoose");

var userProfile = new mongoose.Schema({
  name: { type: String },
  age: { type: Number }
});

module.exports = mongoose.model("userProfile", userProfile);

var newUser = mongoose.model("userProfile", userProfile);

var userOne = new newUser({
  name: "Sam",
  age: "20"
});

userOne.save(function(error) {
  console.log("User One has been saved!");
  if (error) {
    console.error(error);
  }
});
