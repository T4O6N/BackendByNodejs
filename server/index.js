const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(cors());

const Courts = require("../models/courts.js");
const courts = require("../models/courts.js");

mongoose
  .connect(
    "mongodb+srv://va1ent0n:55736369@cluster0.8qikrwc.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Database Connected Successfully");
  })
  .catch((error) => {
    console.log("Database Connection Error:", error);
  });

app.get("/data", (req, res, next) => {
  res.json("Hello");
});

//Insert data into database api
app.post("/InsertData", async (req, res) => {
  const data = new Courts(req.body);
  data.save().then(async () => {
    res.json(await Courts.find());
  });
});

//Using this function to fetch all data
app.get("/getData", async (req, res) => {
  const data = await courts.find();
  res.json(data);
});

//Using this function to delete the court data by using the id
app.delete("/deleteData/:id", async (req, res) => {
  courts.findByIdAndDelete(req.params.id).then(async () => {
    console.log("court data deleted successfully");
    res.json(await courts.find());
  });
});

//Using this function to delete all court data in the database
app.delete("/deleteAllCourt", async (req, res) => {
  courts.deleteMany().then(async () => {
    console.log("all court deleted successfully");
    res.json(await courts.find());
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
