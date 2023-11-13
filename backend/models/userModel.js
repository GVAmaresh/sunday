const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const projectListSchema = new mongoose.Schema({
  projectID: { type: String },
  role: { type: String, enum: ["member", "guide", "admin"], default: "member" },
});
const userSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Name should be provided"] },
  email: {
    type: String,
    unique: true,
    required: [true, "Email should be provided"],
    validate: [validator.isEmail, "Please enter a valid email"],
    lowercase: true,
  },
  photo: { type: String, default: "default.jpg" },
  role: {
    type: String,
    enum: ["user", "guide", "lead-guide", "admin"],
    default: "user",
  },
  projectList: [projectListSchema],
  password: {
    type: String,
    required: [true, "Password should be provided"],
    minlength: 8,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Conformation password should be provided"],
    validate: {
      validator: function (value) {
        return value === this.password;
      },
      message: "Passwords do not match",
    },
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});

userSchema.methods.correctPassword = async (password, userPassword) => {
  return await bcrypt.compare(password, userPassword);
};

const User = mongoose.model("User", userSchema);
module.exports = User;
