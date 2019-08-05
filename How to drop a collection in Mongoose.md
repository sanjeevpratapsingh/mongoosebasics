# How to drop a collection in Mongoose?

In the last tutorial, I have created a database using the command line and also shows that database, collection, and documents on the MongoDB compass. I have already covered the basics of mongoose.

In this tutorial, we are going to drop the collection using mongoose. If you want to drop a collection, then you can do it directly through MongoDB Compass, which is a GUI Interface of MongoDB. Here are the steps to drop a collection using mongo:

- Search for "MongoDB Compass" and open that
- There you see an option to "connect" click on that on your mongo server will startup.
- After that you will see a screen as shown below: On the left side, there are various names shown which are databases made in MongoDB.
- Select the database from which you want to delete the collection.
- Once you click on that, it will display all the collections inside that database. Depicted in the picture below:

As you can see on the right side corner, you can see a "recycle bin box" icon. If you want to delete a collection then you need to do only one thing, click on the bin box icon which is in front of the collection.
That was easy, so if we want to do the same thing using Mongoose, which is your goal for this article, then this is a little bit tricky.
Let's get started…

## Drop a collection in Mongoose:

In the last article, we have checked that "if a collection exists, then we delete that collection."
I'm going to take an example from the last article. Look at the code given below:

```js
const mongoconnection = require("mongoose");
mongoconnection.connect("mongodb://127.0.0.1:27017/mongoosepractice", {
  useNewUrlParser: true
});
const connection = mongoconnection.connection;
connection.once("open", function() {
  console.log("MongoDB connected using Mongoose.");
  connection.db.listCollections().toArray(function(err, names) {
    if (err) {
      console.log(err);
    } else {
      for (i = 0; i < names.length; i++) {
        console.log(names[i].name);
      }
    }
  });
});
```

Result:

C:\mongooseproject>npm start

> mongooseproject@1.0.0 start C:\mongooseproject
> node index.js
> MongoDB connected using Mongoose.
> userprofiles
> mongoosepractice
> User One has been saved!
> User Two has been saved!

In the above code, we created a connection with MongoDB using mongo's basic commands.
After getting a successful connection message, we listed all the collections and along with that, we have converted objects into an array.
To show all the collections inside the database, we have to run go through a loop of that array. 
With the "for loop", I have targeted all the elements inside the array. This loop will till all the elements of the array.
Then after that, we have printed all the available collections.

MongoDB connected using Mongoose. \***_ Available Collections: _**
userprofiles
mongoosepractice

Let's delete the "mongoosepractice" collection from the database. Here are a few lines that you need to add inside the index.js file.
Replace the loop code snippet with the code given below:

```js
for (i = 0; i < names.length; i++) {
  console.log(names[i].name);
  // Let's drop the collection mongoosepractice
  mongoconnection.connection.db.dropCollection("mongoosepractice", function(
    err,
    result
  ) {
    console.log("Collection droped");
  });
  break;
}
```

After adding this code if you will run the application using "npm start". In the above code, we have connected with our database using and using method dropCollection() to delete a collection.

Inside dropCollection() method, we are passing "mongoosepractice" which is our collection that we want to delete. If the collection is deleted then you will get a message that "collection is dropped". After that, we have used "break" to get outside of the loop.
You will get the result as shown below:

C:\mongooseproject>npm start

> mongooseproject@1.0.0 start C:\mongooseproject
> node index.js
> MongoDB connected using Mongoose. \***_ Available Collections: _**
> userprofiles
> Collection droped

So finally our collection is dropped. Let's verify it by checking it inside the MongoDB Compass.
Hola, Now you can see in the picture, that we currently we have one collection left "userprofiles".
