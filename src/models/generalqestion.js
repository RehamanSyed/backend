const mongoose = require("mongoose");

const generalQuestionSchema = new mongoose.Schema({
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

const GeneralQuestionPost = mongoose.model("generalQuestion", generalQuestionSchema);

module.exports = GeneralQuestionPost;
