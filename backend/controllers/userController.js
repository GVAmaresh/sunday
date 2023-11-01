const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const secretToken = "my-newphone-is-iphone";

const createJWT = (id) => {
  return jwt.sign({ id }, secretToken, { expiresIn: "90d" });
};

const createToken = (user, req, res) => {
  const token = createJWT(user._id);

  res.cookie("jwt", token, {
    maxAge: 30 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: req.secure || req.headers["x-forwarded-proto"] === "https",
  });
  user.password = undefined;
  res.status(201).json({
    status: "success",
    token,
    data: { user },
  });
};

exports.signup = async (req, res) => {
  try {
    const { name, email, password, passwordConfirm, photo } = req.body;
    if (!(name || email || password || passwordConfirm)) {
      return res.status(400).json({
        status: "Error",
        message: "Please provide a name or email address",
      });
    }
    const user = await User.create({
      name,
      email,
      password,
      passwordConfirm,
      photo,
    });
    createToken(user, req, res);
  } catch (err) {
    res.status(500).json({
      status: "Fail",
      message: err.message,
    });
  }
};
