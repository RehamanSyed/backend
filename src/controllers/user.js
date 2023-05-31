const User = require("../models/user");

async function handleUserSignUp(req, res) {
  const { name, password, email } = req.body;
  await User.create({ name, password, email });
  return res.json({ name, password, email });
}
async function handleUserSignIn(req, res) {
  const { name, email, password } = req.body;
  console.log(res.json);
  const user = await User.findOne({ email, password });
  console.log(user);
  if (!user) {
    return res.json({
      success: false,
      message: "Invalid Username or Password",
    });
  }
  return res.json({
    user: {
      name: user.name,
      email: user.email,
      password: user.password,
    },
    success: true,
    message: "Logged in successfully.",
  });
}
module.exports = { handleUserSignUp, handleUserSignIn };
