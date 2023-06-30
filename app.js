const express = require("express");
const connectDB = require("./connection/db");
const userRoute = require("./src/routes/user");
const techRoute = require("./src/routes/technologies");
const postRoute = require("./src/routes/post");

const app = express();
const jwt = require("jsonwebtoken");
const path = require("path");
const router = express.Router();
const port = process.env.PORT || 5000;
app.use(express.json());

const cors = require("cors");
// const corsOptions = {
//   origin: ['https://prep-api.vercel.app/'],
//   method:["post","get"],
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };
const corsOptions = {
  origin: "*",
  credentials: true,
};
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

app.use("/api/v1/", userRoute);
app.use("/api/v1/", techRoute);
app.use("/api/v1/", postRoute);

app.listen(port, () => {
  console.log(`Server is listening:${port}`);
});
