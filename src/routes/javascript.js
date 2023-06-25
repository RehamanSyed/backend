const express = require("express");

const router = express.Router();

const JavascriptPost = require("../models/javascript");

router.post("/createPost", (req, res) => {
  const post = new JavascriptPost(req.body);
  post
    .save()
    .then(() => {
      res.status(201).json({
        message: "your question succesfully added",
      });
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});
router.get("/allPost", async (req, res) => {
  let data = await JavascriptPost?.find();
  res.send(data);
});
router.put("/updatePost/:id", async (req, res) => {
  const id = req.params.id;

  const updateData = {
    question: req.body.question,
    answer: req.body.answer,
    example: req.body.example,
  };

  console.log(updateData);
  const data = await JavascriptPost.findByIdAndUpdate(id, { $set: updateData });
  res.json({
    message: " succesfully updated",
  });
});
router.get("/getPostbyId/:id", async (req, res) => {
  const id = req.params.id; 

  const data = await JavascriptPost.findById(id);
  res.send(data);
});
router.delete("/deletePost/:id", async (req, res) => {
  const id = req.params.id;
  const data = await JavascriptPost.findByIdAndDelete(id);
  // res.send(data);
  res.send(data);
});

module.exports = router;
