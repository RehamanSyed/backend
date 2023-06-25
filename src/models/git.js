const mongoose = require("mongoose");

const gitSchema = new mongoose.Schema({
    question: {
    type: "string",
  },
  answer: {
    type: "string",
  },
  example: {
    type: "string",
  },
});

const gitPost = mongoose.model("git", gitSchema);

module.exports = gitPost;
