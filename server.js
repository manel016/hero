const express=require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config(); 

app = express();
app.use(bodyParser.json());
const heroRoutes = require("./Routes/heroRoutes")

//connect to mongodb
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
     .then(() => {
        console.log("Connected to the database ");
      })
      .catch((err) => {
        console.error(`Error connecting to the database. n${err}`);
      });


//redirection lors de recption des request
app.use("/heros",heroRoutes);


app.listen(3000, ()=> console.log("hello server running on port 3000"));


