const mongoose = require("mongoose");

const techSchema = new mongoose.Schema({
  technology: {
    type: "string",
  },
  page: {
    type: "string",
  },
});

const TechStack = mongoose.model("technology", techSchema);

module.exports = TechStack;
