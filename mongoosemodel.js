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

var userTwo = new newUser({
  name: "Ela",
  age: "16"
});

userOne.save(function(error) {
  console.log(`${userOne.name} has been saved!`);
  if (error) {
    console.error(error);
  }
});

userTwo.save(function(error) {
  console.log(`${userTwo.name} has been saved in database ! `);
  if (error) {
    console.error(error);
  }
});

newUser.find().distinct("name", function(error, name) {
  // ids is an array of all ObjectIds
  console.log(name);
});
