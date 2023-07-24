const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
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

const Techpost = mongoose.model("Post", postSchema);

module.exports = Techpost;
