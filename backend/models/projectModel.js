const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: { type: String, default: "Title of the Project" },
  overview: { type: String, default: "It is a overview of the project" },
  members: [{ memberID: { type: String } }],
  timer: { type: Date, default: new Date() },
  tasks: [
    {
      name: String,
      description: String,
      completed: { type: Boolean, default: false },
    },
  ],
  chat: [{ memberID: { type: String }, chat: { type: String } }],
  mileStone: [
    {
      title: String,
      description: String,
      completed: { type: Boolean, default: false },
      duedate: { type: String },
      tasks: [{
        name: String,
        description: String,
        completed: { type: Boolean, default: false },
      }],
    },
  ],
});

const Project = mongoose.model('Project', projectSchema)
module.exports = Project
