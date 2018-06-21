//const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, db) => {
    if (err) {
      return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");

    // db.collection("Todos")
    //   .find({ _id: new ObjectID("5b2403d6b10bf711d44af63c") })
    //   .toArray()
    //   .then(
    //     docs => {
    //       console.log("todos");
    //       console.log(JSON.stringify(docs, undefined, 2));
    //     },
    //     err => {
    //       console.log("Unable to fetch todos", err);
    //     }
    //   );
    // db.collection("Todos")
    //   .find()
    //   .count()
    //   .then(
    //     count => {
    //       console.log(`todos count: ${count}`);
    //     },
    //     err => {
    //       console.log("Unable to fetch todos", err);
    //     }
    //   );
    db.collection("Users")
      .find({ name: "Rafael F. Dib" })
      .count()
      .then(
        count => {
          console.log(`todos count: ${count}`);
        },
        err => {
          console.log("Unable to fetch todos", err);
        }
      );
    // db.close();
  }
);
