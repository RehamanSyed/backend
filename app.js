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

//sample jwt api

app.get("/api/v1/sample", (req, res) => {
  const user = {
    id: 2,
    name: "syed",
    mobile: "96656512852",
  };
  jwt.sign(
    { user },
    "asdfszssdSDFAsadg124asdfgasdhahweadsg",
    {
      expiresIn: "60s",
    },
    (err, token) => {
      res.json({
        token,
      });
    }
  );
});

// app.get("/api/v1/", verifyToken, (req, res) => {
//   jwt.verify(
//     req.token,
//     "asdfszssdSDFAsadg124asdfgasdhahweadsg",
//     (err, user) => {
//       if (err) {
//         res.send({
//           message: "Token expired generate another token",
//         });
//       } else {
//         res.json({
//           user,
//           message: "success",
//         });
//       }
//     }
//   );
//   res.send("Hello World!");
// });

// User Auth

app.use("/api/v1/", userRoute);
app.use("/api/v1/", techRoute);
app.use("/api/v1/", postRoute);

// app.listen(port);z
// Technology Post
// const Post = require("./src/models/post");
// app.post("/api/v1/createPost", async (req, res) => {
//   let techpost = await new Post(req.body);
//   console.log("Test data", techpost);
//   techpost
//     .save()
//     .then((post) => {
//       res.status(201).send(post);
//     })
//     .catch((e) => {
//       res.status(400).send(e);
//     });
// });

// app.get("/api/v1/allPost", async (req, res) => {
//   let data = await Post?.find({
//     userId: req.body.userId,
//     techId: req.body.techId,
//   });
//   console.log(data);
//   res.send(data);
// });

app.listen(port, () => {
  console.log(`Server is listening:${port}`);
});
