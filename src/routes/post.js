const express = require("express");
const router = express.Router();
const techPost = require("../models/post");

router.post("/createPost", (req, res) => {
  let post = new techPost(req.body);
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
  console.log("body request", req.body.userId, req.body.techId);
  let data = await techPost?.find({
    userId: req.body.userId,
    techId: req.body.techId,
  });
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
  const data = await techPost.findByIdAndUpdate(id, { $set: updateData });
  res.json({
    message: " succesfully updated",
  });
});
router.get("/getPostbyId/:id", async (req, res) => {
  const id = req.params.id;

  const data = await techPost.findById(id);
  res.send(data);
});
router.delete("/deletePost/:id", async (req, res) => {
  const id = req.params.id;
  const data = await techPost.findByIdAndDelete(id);
  // res.send(data);
  res.send(data);
});

module.exports = router;
