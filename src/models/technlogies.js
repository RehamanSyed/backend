const mongoose = require("mongoose");

const techSchema = new mongoose.Schema({
  name: {
    type: "string",
  },
});

const TechStack = mongoose.model("technology", techSchema);

module.exports = TechStack;
