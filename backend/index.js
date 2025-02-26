const express = require("express");

const app = express();

const mainRouter = require("./routes/index");
app.use("/api/v1", mainRouter);

const {connectDb} = require("./db");

connectDb()
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.log("something went wrong " + err.message);
  });
