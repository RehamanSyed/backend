const express = require("express");
const connectDB = require("./connection/db");
const userRoute = require("./src/routes/user");
const app = express();
const path = require("path");
const router = express.Router();
const port = 5000;
app.use(express.json());

const cors = require("cors");
// const corsOptions = {
//   origin: ['https://prep-api.vercel.app/'],
//   method:["post","get"],
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };
const corsOptions={
  origin: "*",
  credentials: true
}
app.use(cors(corsOptions));
const dotenv = require("dotenv");

dotenv.config();
connectDB();

// app.get("/sample", function (req, res) {
//   // console.log("Dirname", __dirname);

//   res.sendFile(path.join(__dirname + "/samplefiles/index.html"));
//   //__dirname : It will resolve to your project folder.
// });

app.use(express.static(__dirname + "/public"));

// User Auth
app.use("/api/v1/user", userRoute);
// Technology List
const Tech = require("./src/models/technlogies");

app.get("/api/v1/allTech", async (req, res) => {
  let data = await Tech?.find();
  res.send(data);
});
app.post("/api/v1/createTech", (req, res) => {
  const technology = new Tech(req.body);
  console.log("Technologies",technology)
  technology
    .save()
    .then(() => {
      res.status(201).send(technology);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});
app.delete("/api/v1/deleteTech/:id", async (req, res) => {
  const id = req.params.id;
  const data = await Tech.findByIdAndDelete(id);
  // res.send(data);
  res.send(data);
});

// Technology Post
const ReactPost = require("./src/models/react");

app.post("/api/v1/createReactPost", (req, res) => {
  const post = new ReactPost(req.body);
  post
    .save()
    .then(() => {
      res.status(201).send(post);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});
app.get("/api/v1/allReactPost", async (req, res) => {
  let data = await ReactPost?.find();
  res.send(data);
});
app.delete("/api/v1/deleteReactPost/:id", async (req, res) => {
  const id = req.params.id;
  const data = await ReactPost.findByIdAndDelete(id);
  // res.send(data);
  res.send(data);
});

app.listen(port);
