const express = require("express");
const router = express.Router();

const progressController = require("../controllers/progressController");

// CREATE
router.post("/", progressController.createProgress);

// GET Progress berdasarkan user
router.get("/user/:userId", progressController.getAllProgress);

// GET BY ID
router.get("/:id", progressController.getProgressById);

// UPDATE
router.put("/:id", progressController.updateProgress);

// DELETE
router.delete("/:id", progressController.deleteProgress);

module.exports = router;