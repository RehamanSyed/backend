const mongoose = require("mongoose");

const techSchema = new mongoose.Schema({
  userId: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  technology: {
    type: "string",
  },
  page: {
    type: "string",
  },
});

const TechStack = mongoose.model("technology", techSchema);

module.exports = TechStack;
