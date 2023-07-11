const User = require("../models/user");
const jwt = require("jsonwebtoken");
const secretKey =
  process.env.SECRET_KEY ||
  "1CDSF3245Aasdhgaw42512abafdshjajet2sgae3safsdfaqwashfadsXdhrmrjjrGR";
console.log(secretKey);

async function handleUserSignUp(req, res) {
  
  const { name, password, email } = req.body;
  console.log(name, password, email)
  const user = await User.create({ name, password, email });
  res.json({
    id: user.id,
    name: user.name,
    email: user.email,
    password: user.password,
    success: true,
    message: "User registered successfully.",
  });
}
async function handleUserSignIn(req, res) {
  const { name, email, password } = req.body;
  console.log("respons json",name, password );
  const user = await User.findOne({ name, password });
  console.log(user);
  jwt.sign(
    { user },
    secretKey,
    {
      expiresIn: "600000s",
    },
    (err, token) => {
      if (!user) {
        return res.json({
          success: false,
          message: "Invalid Username or Password",
        });
      }
      // const userdata = {
      //   user: {
      //     id: user.id,
      //     name: user.name,
      //     email: user.email,
      //     password: user.password,
      //   },
      // };
      res.json({
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
        token,
        success: true,
        message: "Logged in successfully.",
      });
    }
  );
}
module.exports = { handleUserSignUp, handleUserSignIn };
