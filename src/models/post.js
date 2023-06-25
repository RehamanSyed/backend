const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  techId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "technology",
    required: true,
  },
  question: {
    type: "string",
  },
  answer: {
    type: "string",
  },
  example: {
    type: "string",
  },
  userId: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
