function verifyToken(req, res, next) {
    const barerHeader = req.headers["authorization"];
    if (typeof barerHeader !== "undefined") {
      const bearer = barerHeader.split(" ");
      const token = bearer[1];
      req.token = token;
      next();
    } else {
      res.json({
        message: "Token is not valid",
      });
    }
  }

  module.exports = { verifyToken };
