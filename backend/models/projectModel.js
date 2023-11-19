const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: { type: String, default: "Add Task Name" },
  description: { type: String, default: "Add Task Description" },
  completed: { type: Boolean, default: false },
  level: { type: String, default:"Basic"}
});

const taskMileStoneSchema = new mongoose.Schema({
  name: { type: String, default: "Add Task" },
  description: { type: String, default: "Add Task Description" },
  completed: { type: Boolean, default: false },
});

const milestoneSchema = new mongoose.Schema({
  title: { type: String, default: "Add Milestone Title" },
  description: { type: String, default: "Add Milestone Description" },
  completed: { type: Boolean, default: false },
  duedate: { type: String },
  tasks: [taskMileStoneSchema],
});

const projectSchema = new mongoose.Schema({
  title: { type: String, default: "Add Task Name" },
  overview: { type: String, default: "It is an overview of the project" },
  members: [
    {
      memberID: { type: String },
      role: {
        type: String,
        enum: ["member", "guide", "admin"],
        default: "member",
      },
    },
  ],
  timer: { type: String },
  tasks: [taskSchema],
  progress: {
    type: String,
    default: "0%",
    enum: [
      "0%",
      "10%",
      "20%",
      "30%",
      "40%",
      "50%",
      "60%",
      "70%",
      "80%",
      "90%",
      "100%",
    ],
  },
  chat: [
    {
      memberID: { type: String },
      memberPhoto: { type: String, default: "photo.png" },
      memberName: { type: String },
      chat: { type: String },
    },
  ],
  milestone: [milestoneSchema],
});

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
