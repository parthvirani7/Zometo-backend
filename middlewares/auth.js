const jwt = require("jsonwebtoken");
// const { findUser } = require("../services/user.service");
const secret = "thiskeyissecret";
const createToken = (data) => {
  const token = jwt.sign({ data }, secret);
  return token;
};

const verifyToken = (login_token) => {
  return jwt.verify(login_token, secret);
};

const authenticate = (req, res, next) => {
  const login_token = req.cookies.login_token;
  console.log(login_token);
  if (!login_token) {
  res.status(400).json({ message: "you are not login" });
  }
  const user = jwt.verify(login_token, secret);
  req.user = user;
  next();
};

const restrict = ([...role]) => {
  return (req, res, next) => {
    const user = req.user;
    console.log(user, "res");
    if (role.includes(user.data.role)) {
      next();
    } else {
      res.status(400).json({ message: "you are unauthorised" });
    }
  };
};

module.exports = { createToken, verifyToken, authenticate, restrict };