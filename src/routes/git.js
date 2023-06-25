const express = require("express");

const router = express.Router();

const GitPost = require("../models/git");

router.post("/createPost", (req, res) => {
  const post = new GitPost(req.body);
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
  let data = await GitPost?.find();
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
  const data = await GitPost.findByIdAndUpdate(id, { $set: updateData });
  res.json({
    message: " succesfully updated",
  });
});
router.get("/getPostbyId/:id", async (req, res) => {
  const id = req.params.id; 

  const data = await GitPost.findById(id);
  res.send(data);
});
router.delete("/deletePost/:id", async (req, res) => {
  const id = req.params.id;
  const data = await GitPost.findByIdAndDelete(id);
  // res.send(data);
  res.send(data);
});

module.exports = router;
