const Project = require("../models/projectModel");

exports.createProject = async (req, res) => {
  try {
    const project = await Project.create({});
    res.status(200).json({
      status: "success",
      data: project,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.updateDetails = async (req, res) => {
  try {
    const details = req.body;
    const projectID = req.params.id;
    const project = await Project.findByIdAndUpdate(projectID, { details });
    res.status(200).json({
      status: "success",
      data: project,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};
