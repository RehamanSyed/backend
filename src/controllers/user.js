const User = require("../models/user");

async function handleUserSignUp(req, res) {
  const { name, password, email } = req.body;
  await User.create({ name, password, email });
  return res.json({ name, password, email });
}
async function handleUserSignIn(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user) {
    return res.json({ error: "Invalid user or passowrd" });
  }
  return res.json({ email, password });
}
module.exports = { handleUserSignUp, handleUserSignIn };
