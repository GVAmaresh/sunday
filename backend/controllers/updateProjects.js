// const Project = require("../models/projectModel");
// const updateTitle = ({ title }) => {};
// exports.updateMyProject = async ({
//   req,
//   res,
//   title,
//   overview,
//   tasks,
//   timer,
//   chat,
//   milestone,
//   projectID,
//   mileStoneID,
// }) => {
//   const project = await Project.findById(projectID);
//   if (title) {
//     project.updateOne({ title });
//   }
//   if (overview) {
//     project.updateOne({ overview });
//   }
//   if (timer) {
//     project.updateOne({ timer });
//   }
//   if (chat) {
//     const user = req.user;
//     project.updateOne({ $push: { chat: { memberID: user._id, chat } } });
//   }
//   if (milestone) {
//     if (!mileStoneID) {
//       project.updateOne({ milestone });
//     } else {
//       project.updateOne({
//         $push: {
//           milestone: await milestone.findByIdAndUpdate(mileStoneID, {
//             milestone,
//           }),
//         },
//       });
//     }
//   }
// };
