const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const { nextTick } = require("process");
const { promisify } = require("util");

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
    console.error(err);
    res.status(500).json({
      status: "Fail",
      message: "Internal Server Error",
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = res.body;
    if (!email || !password) {
      return res.status(401).json({
        status: "Error",
        message: "Please provide email or password",
      });
    }
    const user = await User.findOne({ email }).select("+password");
    if (!user || !(await user.correctPassword(password, user.password))) {
      return res.status(401).json({
        status: "Error",
        message: "Invalid email or password",
      });
    }
    createToken(user, req, res);
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      status: "Error",
      message: "Internal Server Error",
    });
  }
};

exports.protect = async (req, res, next) => {
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    } else if (req.cookies.jwt) {
      token = req.cookies.jwt;
    }
    if (!token) {
      return res.status(401).json({
        status: "Unauthorized",
        message: "Please log in to access this website",
      });
    }
    const decoded = await promisify(jwt.verify)(token, secretToken);
    const currentUser = await User.findById(decoded._id);
    if (!currentUser) {
      res.status(401).json({
        status: "Unauthorized",
        message: "Please log in with a valid email to access this page",
      });
    }
    req.user = currentUser;
    res.locals.user = currentUser;
    next();
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: "Fail",
      message: "Internal Server Error",
    });
  }
};
