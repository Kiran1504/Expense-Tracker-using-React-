const jwt = require("jsonwebtoken");
const User = require("../models/UserSchema");

const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwtauth;
    if (token) {
      const verify = jwt.verify(token, process.env.SECRET_KEY);
      const rootUser = await User.findOne({
        _id: verify._id,
        "tokens.token": token,
      });
      if (!rootUser) {
        throw new Error("user not found");
      }
      req.token = token;
      req.rootUser = rootUser;
      req.userId = rootUser._id;
    } else {
      req.rootUser = {};
    }

    next();
  } catch (error) {
    console.log(error);
    res.status(422).send(error);
  }
};

module.exports = authenticate;
