const dotenv = require("dotenv");
const cors = require("cors");
const express = require("express");

const userRoute = require("./routes/user");
const techRoute = require("./routes/technologies");
const postRoute = require("./routes/post");

const connectDB = require("./config/db");
dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());

// CORS Policy
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

//Database Connection
connectDB();

app.use(express.static(__dirname + "/public"));

app.use("/api/v1/", userRoute);
app.use("/api/v1/", techRoute);
app.use("/api/v1/", postRoute);

app.listen(port, () => {
  console.log(`Server is listening:${port}`);
});
