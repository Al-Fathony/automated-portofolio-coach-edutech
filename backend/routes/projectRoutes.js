const express = require("express");

const router = express.Router();

const projectController = require("../controllers/projectController");

// CREATE
router.post(
  "/",
  projectController.createProject
);

// GET PROJECT BERDASARKAN USER
router.get(
  "/user/:userId",
  projectController.getProjects
);

// GET BY ID
router.get(
  "/:id",
  projectController.getProjectById
);

// UPDATE
router.put(
  "/:id",
  projectController.updateProject
);

// DELETE
router.delete(
  "/:id",
  projectController.deleteProject
);

module.exports = router;