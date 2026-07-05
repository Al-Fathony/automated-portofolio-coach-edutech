const Portfolio = require("../models/Portfolio");
const portfolioService = require("../services/portfolioService");

// ==========================
// GENERATE PORTFOLIO
// ==========================

exports.generatePortfolio = async (req, res) => {

  try {

    const { userId } = req.params;

    const result = await portfolioService.generatePortfolio(userId);

    let portfolio = await Portfolio.findOne({

      where: {

        userId

      }

    });

    if (portfolio) {

      await portfolio.update({

        generatedTitle: result.generatedTitle,

        summary: result.summary,

        skillsList: result.skillsList,

        projectHighlights: result.projectHighlights,

        analysis: JSON.stringify(result.analysis)

      });

    }

    else {

      portfolio = await Portfolio.create({

        userId,

        generatedTitle: result.generatedTitle,

        summary: result.summary,

        skillsList: result.skillsList,

        projectHighlights: result.projectHighlights,

        analysis: JSON.stringify(result.analysis)

      });

    }

    res.status(200).json({

      message: "Portfolio berhasil dibuat",

      data: portfolio

    });

  }

  catch (error) {

    res.status(500).json({

      message: error.message

    });

  }

};

// ==========================
// GET PORTFOLIO BERDASARKAN USER
// ==========================

exports.getAllPortfolio = async (req, res) => {

  try {

    const { userId } = req.params;

    const portfolio = await Portfolio.findAll({

      where: {

        userId

      },

      order: [["id", "DESC"]]

    });

    res.status(200).json(portfolio);

  }

  catch (error) {

    res.status(500).json({

      message: error.message

    });

  }

};

// ==========================
// GET PORTFOLIO BY ID
// ==========================

exports.getPortfolioById = async (req, res) => {

  try {

    const portfolio = await Portfolio.findByPk(req.params.id);

    if (!portfolio) {

      return res.status(404).json({

        message: "Portfolio tidak ditemukan"

      });

    }

    res.status(200).json(portfolio);

  }

  catch (error) {

    res.status(500).json({

      message: error.message

    });

  }

};