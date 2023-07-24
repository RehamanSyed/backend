const UserModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secretKey =
  process.env.SECRET_KEY ||
  "1CDSF3245Aasdhgaw42512abafdshjajet2sgae3safsdfaqwashfadsXdhrmrjjrGR";
console.log(secretKey);

async function handleUserSignUp(req, res) {
  const { name, email, password } = req.body;

  const user = await UserModel.findOne({ email: email });

  if (user) {
    res.send({
      message: "User already exists",
      success: false,
    });
  } else {
    if (name && email && password) {
      const salt = await bcrypt.genSalt(10);
      const hashpassword = await bcrypt.hash(password, salt);
      console.log("hashpassword", hashpassword);
      await UserModel.create({
        name: name,
        password: hashpassword,
        email: email,
      });

      res.send({
        message: "User registered successfully.",
        success: true,
      });
    } else {
      res.send({
        message: "All Fields are required",
        success: true,
      });
    }
  }
}

async function handleUserSignIn(req, res) {
  const { name, email, password } = req.body;
  console.log("respons json", name, password);
  const user = await UserModel.findOne({ name, password });
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
