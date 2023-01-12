const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;
const route = require("./route/route")

const app = express();

app.use(express.json());



mongoose.connect("mongodb+srv://Priyanka19:G8reXRlHUbBX65ev@plutonium01.9fxu8wj.mongodb.net/MyUser123", {
  useNewUrlParser: true
})
  .then(() => console.log("mongoDb is connected"))
  .catch(err => console.log(err))
  
  app.use('/', route)
  
  app.listen(PORT, () => { console.log(`express app running on port ${PORT}`) })
  