# How to drop a database using Mongoose?

In this tutorial, we drop our database using Mongoose. It is easy to drop a database using MongoDB compass. But I’m not going to use that here.
In MongoDB Compass, you can quickly delete a database by clicking on “Recycle Bin.” Once you hover the icon, it will display you a message to drop the database. You only need to click on that icon to drop the database.

We are going to use “Mongoose for dropping a database”. Follow along with me, let’s do a little of code in Mongoose:

## Drop a database using Mongoose-

In this tutorial, I’m going to use the database which we have used in previous tutorials “mongoosepractice”. 
The database contains two collections —
mongoosepractice (with no documents)
userdetails (with 18 documents)
So let get the database name first from which we are connected then we will delete that database. 
Replace the code provided below into your index.js file. We are creating an on the second line, and then if the connection is successfully made later at the end, we are displaying the connected database name.

```js
console.log(`Our Current Database Name : ${connection.db.databaseName}`);
```

### Index.js Code Snippet-

```js
const mongodbconnection = require("mongoose");
mongodbconnection.connect("mongodb://127.0.0.1:27017/mongoosepractice", {
  useNewUrlParser: true
});
const connection = mongodbconnection.connection;
connection.once("open", function() {
  console.log("**_ MongoDB got connected _**");
  console.log(`Our Current Database Name : ${connection.db.databaseName}`);
});
```

### Index.js Code Snippet Result-

C:\mongooseproject>npm start

> mongooseproject@1.0.0 start C:\mongooseproject
> node index.js
> **_ MongoDB got connected _**
> Our Current Database Name: mongoosepractice

Now, we have all the details like database name, how many collections inside database and number of documents inside the collections in that database.Without wasting time, let’s move on to our goal “drop database using mongoose.”

There a function called dropDatabase() which we are going to use for this tutorial. So now, you have to update the code in index.js file and replace the code with the code snippet provided below:

```js
const mongodbconnection = require("mongoose");
mongodbconnection.connect("mongodb://127.0.0.1:27017/mongoosepractice", {
  useNewUrlParser: true
});
const connection = mongodbconnection.connection;
connection.once("open", function() {
  console.log("**_ MongoDB got connected _**");
  console.log(`Our Current Database Name : ${connection.db.databaseName}`);
  mongodbconnection.connection.db.dropDatabase(
    console.log(`${connection.db.databaseName} database dropped.`)
  );
});
```

We have used dropDatabase to delete our current database we are inside.

```js
mongodbconnection.connection.db.dropDatabase(
  console.log(`${connection.db.databaseName} database dropped.`)
);
```

With the help of the above code, we are dropping the MongoDB database and also printing a message in the console that this database is deleted.

### Result:

C:\mongooseproject>npm start

> mongooseproject@1.0.0 start C:\mongooseproject
> node index.js
> **_ MongoDB got connected _**
> Our Current Database Name: mongoosepractice
> mongoosepractice database dropped
> Code Snapshot:

Let’s verify that our database is present inside the MongoDB or not. Here you can compare the screenshot taken before and now. The database “mongoosepractice” is missing.

We have achieved our goal and dropped the database successfully using Mongoose.
