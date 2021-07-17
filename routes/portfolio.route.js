import express from "express";
import ProjectController from "../controllers/projects.controller.js";

const router = express.Router();

// router.route("/").get((req, res) => {
//     res.send("hello world")
// })

router.route("/").get(ProjectController.getProjects);

export default router;