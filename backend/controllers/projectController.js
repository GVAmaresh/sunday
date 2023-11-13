const { trusted } = require("mongoose");
const Project = require("../models/projectModel");
const User = require("../models/userModel");
const { request } = require("express");
// const Milestone = require("../models/");

exports.deleteAllProject = async (req, res) => {
  try {
    const {projectList} = await req.user
    for(const project of projectList){
      const deletedProject = await Project.findByIdAndDelete(project.projectID)
      if(deletedProject){
        for(const user of deletedProject.members){
          const del = await User.findByIdAndUpdate(user.memberID, {$pull: {projectList: {projectID: project.projectID}}})
          console.log(del)
        }
      }
    }
    res.status(200).json({ status: "success", data: null });
  } catch (err) {
    res.status(500).json({ status: "error", data: "internal server error" });
  }
};
exports.updateTask = async (req, res) => {
  try {
    const id = req.params.id;
    const taskID = req.params.task;
    const task = req.body;
    const updateData = {};
    if (taskID) {
      updateData[`tasks.${taskID}`] = task;
    }
    const updatedProject = await Project.findOneAndUpdate(
      { _id: id },
      { $set: updateData },
      { new: true }
    );
    res.status(200).json({
      status: "success",
      data: updatedProject,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};

exports.updateDateMileStone = async (req, res) => {
  try {
    const id = req.params.id;
    const milestoneID = req.params.milestone;
    const { milestone } = req.body;
    const updateData = {};

    if (milestoneID) {
      updateData[`milestone.${milestoneID}`] = milestone;
    }

    const updatedProject = await Project.findOneAndUpdate(
      { _id: id },
      { $set: updateData },
      { new: true }
    );

    res.status(200).json({
      status: "success",
      data: updatedProject,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ status: "error", message: err.message });
  }
};

exports.getAllProject = async (req, res) => {};
exports.removeMember = async (req, res) => {
  try {
    const projectID = req.params.id;
    let {userID, email} = req.body;
    if(email){
      const {_id : user} = await User.findOne({ email: email})
      userID = user
    }
    const user = await User.findByIdAndUpdate(userID, {
      $pull: { projectList: { projectID: projectID } },
    });
    if (!user) {
      return res.status(404).json({
        status: "Fail",
        message: "User not found",
      });
    }
    const project = await Project.findByIdAndUpdate(projectID, {
      $pull: { members: { memberID: userID } },
    });
    if (!project) {
      return res.status(404).json({
        status: "Fail",
        message: "Project not found",
      });
    }
    res.status(200).json({
      statusbar: "success",
      project: project,
      user: user,
    });
  } catch (err) {
    res.status(500).json({ status: "error", message: "Internal Server Error", error: err.message });
  }
};
exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) {
      return res
        .status(404)
        .json({ status: "error", message: "Project is already deleted" });
    }
    const members = project.members;
    for (const member of members) {
      const user = await User.findById(member.memberID);
      const projectIndex = user.projectList.find(
        (item) => item.projectID == project._id.toString()
      );

      await User.findByIdAndUpdate(user._id, {
        $pull: { projectList: { projectID: project._id.toString() } },
      });
    }
    res.status(200).json({ status: "success", data: null, project: project });
  } catch (err) {
    res.status(500).json({
      status: "Fail",
      message: "Internal Server Error",
    });
  }
};
exports.updateMember = async (req, res) => {
  try {
    const projectID = req.params.id;
    const { email, role = "member" } = req.body;
    const userID = await User.find({ email: email });
    const updatedProject = await Project.findByIdAndUpdate(
      projectID,
      { $push: { members: { memberID: userID[0]._id, role } } },
      { new: true }
    );
    if (!updatedProject) {
      return res
        .status(404)
        .json({ status: "error", message: "Project not found" });
    }
    const user = await User.findByIdAndUpdate(
      userID[0]._id,
      { $push: { projectList: { projectID: updatedProject._id, role: role } } },
      { new: true }
    );
    if (!updatedProject) {
      return res
        .status(404)
        .json({ status: "fail", message: "Project not found" });
    }
    res.status(200).json({
      status: "success",
      data: updatedProject,
      user: user,
    });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
};

exports.updateMyProject = async (req, res) => {
  try {
    const { title, overview, timer, chat } = req.body;
    const projectID = req.params.id;
    const updateData = {};

    if (title) {
      updateData.title = title;
    }
    if (overview) {
      updateData.overview = overview;
    }
    if (timer) {
      updateData.timer = timer;
    }
    if (chat) {
      const user = req.user;
      updateData.$push = { chat: { memberID: user._id, chat } };
    }
    const updatedProject = await Project.findByIdAndUpdate(
      projectID,
      updateData,
      {
        new: true,
      }
    );
    if (!updatedProject) {
      return res.status(400).json({
        status: "fail",
        message: "There is no project available",
      });
    }
    res.status(200).json({
      status: "success",
      data: updatedProject,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.createProject = async (req, res) => {
  try {
    const currentDate = new Date();
    const timestamp = currentDate.getTime().toString();
    const project = await Project.create({ timer: timestamp });
    project.members.push({
      memberID: req.user._id,
      role: "admin",
    });
    await project.save();
    const user = await User.findByIdAndUpdate(
      req.user._id,
      {
        $push: { projectList: { projectID: project._id, role: "admin" } },
      },
      { new: true }
    );
    res.status(200).json({
      status: "success",
      data: project,
      user: user,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};