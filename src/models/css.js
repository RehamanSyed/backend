const mongoose = require("mongoose");

const cssSchema = new mongoose.Schema({
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

const CssPost = mongoose.model("css", cssSchema);

module.exports = CssPost;
