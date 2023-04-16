const express = require("express");
const connectDB = require("./connection/db");
const app = express();
const port = 5000;
app.use(express.json());

const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
const dotenv = require("dotenv");

dotenv.config();
connectDB();
const Tech = require("./src/models/technlogies");

app.get("/api/v1/alltech", async (req, res) => {
  console.log("data", Tech);
  let data = await Tech?.find();
  // console.log("technology", data);
  res.send(data);
});

app.post("/api/v1/createTech", (req, res) => {
  const technology = new Tech(req.body);
  technology
    .save()
    .then(() => {
      res.status(201).send(technology);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});

app.delete("/api/v1/tech/:id", async (req, res) => {
  const id = req.params.id;
  const data = await Tech.findByIdAndDelete(id);
  console.log("data ==>", data);
  // res.send(data);
  res.send(data);
});

app.listen(port);
