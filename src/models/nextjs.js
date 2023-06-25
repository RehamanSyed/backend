const mongoose = require("mongoose");

const nextjsSchema = new mongoose.Schema({
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

const nextjsPost = mongoose.model("nextjs", nextjsSchema);

module.exports = nextjsPost;
