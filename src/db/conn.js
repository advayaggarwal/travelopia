const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/travelopia", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection with MongoDB is successful");
  })
  .catch((e) => {
    console.log(e);
  });
