const express = require("express");

const router = express.Router();

const portfolioController = require("../controllers/portfolioController");

// Generate
router.post(
  "/generate/:userId",
  portfolioController.generatePortfolio
);

// Portfolio berdasarkan user
router.get(
  "/user/:userId",
  portfolioController.getAllPortfolio
);

// Detail
router.get(
  "/:id",
  portfolioController.getPortfolioById
);

module.exports = router;