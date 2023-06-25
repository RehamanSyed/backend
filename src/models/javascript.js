const mongoose = require("mongoose");

const javascriptSchema = new mongoose.Schema({
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

const javascriptPost = mongoose.model("javascript", javascriptSchema);

module.exports = javascriptPost;
