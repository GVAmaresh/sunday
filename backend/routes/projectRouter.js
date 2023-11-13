const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");
const userController = require("../controllers/userController");

router.use(userController.protect);

router.route("/createProject").get(projectController.createProject);
router.route("/updateMember/:id").post(projectController.updateMember);
router.route("/deleteProject/:id").delete(projectController.deleteProject);
router.route("/deleteAllProjects").delete(projectController.deleteAllProject)
router.route("/removeMember/:id").delete(projectController.removeMember)

router
  .route("/updateDetails/:id/")
  .post(projectController.updateMyProject);

router.route("/updateDetails/:id/updateMilestone").post(projectController.updateDateMileStone);
router.route("/updateDetails/:id/updateMilestone/:milestone").post(projectController.updateDateMileStone);

router.route("/updateDetails/:id/updateTask").post(projectController.updateTask);
router.route("/updateDetails/:id/updateTask/:task").post(projectController.updateTask);

module.exports = router;
