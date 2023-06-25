const User = require("../models/user");
const jwt = require("jsonwebtoken");
const secretKey =
  process.env.SECRET_KEY ||
  "1CDSF3245Aasdhgaw42512abafdshjajet2sgae3safsdfaqwashfadsXdhrmrjjrGR";
console.log(secretKey);

async function handleUserSignUp(req, res) {
  const { name, password, email } = req.body;
  const user = await User.create({ name, password, email });
}
async function handleUserSignIn(req, res) {
  const { name, email, password } = req.body;
  console.log(res.json);
  const user = await User.findOne({ email, password });
  console.log(user);
  jwt.sign(
    { user },
    secretKey,
    {
      expiresIn: "300s",
    },
    (err, token) => {
      if (!user) {
        return res.json({
          success: false,
          message: "Invalid Username or Password",
        });
      }
      res.json({
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
        token,
        success: true,
        message: "Logged in successfully.",
      });
    }
  );


}
module.exports = { handleUserSignUp, handleUserSignIn };
