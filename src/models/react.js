const mongoose = require("mongoose");

const reactSchema = new mongoose.Schema({
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

const ReactPost = mongoose.model("react", reactSchema);

module.exports = ReactPost;
