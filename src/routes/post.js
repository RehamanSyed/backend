const express = require("express");
const router = express.Router();
const Techpost = require("../models/post");

const { verifyToken } = require("../controllers/verifyToken");
const jwt = require("jsonwebtoken");
const secretKey =
  process.env.SECRET_KEY ||
  "1CDSF3245Aasdhgaw42512abafdshjajet2sgae3safsdfaqwashfadsXdhrmrjjrGR";

router.post("/createPost", verifyToken, (req, res) => {
  let postData = new Techpost(req.body);

  console.log(postData);

  jwt.verify(req.token, secretKey, (err, authData) => {
    if (err) {
      res.send({
        message: "Token expired generate another token",
      });
    } else {
      postData
        .save()
        .then(() => {
          res.status(201).json({
            message: "your question succesfully added",
          });
        })
        .catch((e) => {
          console.log("error in post dat", e);
          res.status(400).send(e);
        });
    }
  });
});
router.get("/allPost", verifyToken, async (req, res) => {
  try {
    const { techId, userId } = req.query; // Use req.query instead of req.body to access query parameters
    console.log("query parameters -->", req.query);
    let techData = await Techpost.find({ techId: techId, userId: userId });

    jwt.verify(req.token, secretKey, (err, authData) => {
      if (err) {
        res.send({
          message: "Token expired. Generate another token.",
        });
      } else {
        res.json(techData);
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
});
router.put("/updatePost/:id", async (req, res) => {
  const id = req.params.id;

  const updateData = {
    question: req.body.question,
    answer: req.body.answer,
    example: req.body.example,
  };

  console.log(updateData);
  const data = await Techpost.findByIdAndUpdate(id, { $set: updateData });
  res.json({
    message: " succesfully updated",
  });
});
router.get("/getPostbyId/:id", async (req, res) => {
  const id = req.params.id;

  const data = await Techpost.findById(id);
  res.send(data);
});
router.delete("/deletePost/:id", async (req, res) => {
  const id = req.params.id;
  const data = await Techpost.findByIdAndDelete(id);
  // res.send(data);
  res.send(data);
});

module.exports = router;
