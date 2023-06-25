const express = require("express");
const Tech = require("../models/technlogies");
const { verifyToken } = require("../controllers/verifyToken");
const jwt = require("jsonwebtoken");
const router = express.Router();
const secretKey =
  process.env.SECRET_KEY ||
  "1CDSF3245Aasdhgaw42512abafdshjajet2sgae3safsdfaqwashfadsXdhrmrjjrGR";

router.get("/allTech", verifyToken, async (req, res) => {
  let techData = await Tech?.find();
  jwt.verify(req.token, secretKey, (err, authData) => {
    if (err) {
      res.send({
        message: "Token expired generate another token",
      });
    } else {
      res.json({
        techData,
      });
    }
  });
});

router.post("createTech", verifyToken, (req, res) => {
  const technology = new Tech(req.body);
  console.log("Technologies", technology);

  jwt.verify(req.token, secretKey, (err, authData) => {
    if (err) {
      res.send({
        message: "Token expired generate another token",
      });
    } else {
      technology
        .save()
        .then(() => {
          res.status(201).send(technology);
        })
        .catch((e) => {
          res.status(400).send(e);
        });
    }
  });
});

router.delete("deleteTech/:id", verifyToken, async (req, res) => {
  const id = req.params.id;
  const deleteTech = await Tech.findByIdAndDelete(id);
  // res.send(data);

  jwt.verify(req.token, secretKey, (err, authData) => {
    if (err) {
      res.send({
        message: "Token expired generate another token",
      });
    } else {
      res.send(deleteTech);
    }
  });
});

module.exports = router;
