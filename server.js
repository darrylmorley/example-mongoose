const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(
  encodeURI(
    process.env.DATABASE_URL,
    {
      auth: {
        user: "darryl",
        password: "Ddb%@R8i%5n7BvQ"
      }
    },
    { useNewUrlParser: true }
  )
);

const db = mongoose.connection;
db.on("error", err => console.error(err));
db.once("open", () => console.log("Connected to the database..."));

app.listen(3000, () => console.log("Server Started on Port :3000"));
