const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema(
//   {
//     name: {
//       type: "string",
//       required: true,
//     },
//     email: {
//       type: "string",
//       required: true,
//       unique: true,
//     },
//     password: {
//       type: "string",
//       required: true,
//     },
//   },
//   { timestamps: true }
// );
// const techSchema = new mongoose.Schema({
//   technology: {
//     type: "string",
//   },
//   page: {
//     type: "string",
//   },
// });
const postSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
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

const Post = mongoose.model("Post", postSchema);
// const TechStack = mongoose.model("technology", techSchema);
// const User = mongoose.model("user", userSchema);

// module.exports = TechStack;
// module.exports = User;
module.exports = Post;
