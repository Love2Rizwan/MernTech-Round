const express = require("express")
const mongoose = require("mongoose")
const app = express()
const router = require("./router.js")

// Json
app.use(express.json())

// MongoDB connected
mongoose
  .connect(
    "mongodb+srv://love2rizwan:CodingKe000Deewane@cluster0.xntbvdy.mongodb.net/MERN-Tach",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });


  // define route
  app.use("/" , router)

//   PORT 
const port = 8080

//   listen server
app.listen(port, function () {
    console.log("Server is running on PORT " + port)
})