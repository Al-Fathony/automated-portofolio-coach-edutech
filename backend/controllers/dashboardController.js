const Progress = require("../models/Progress");
const Project = require("../models/Project");
const Portfolio = require("../models/Portfolio");

exports.getDashboard = async (req, res) => {

  try {

    const { userId } = req.params;

    const progress = await Progress.findAll({
      where: { userId }
    });

    const projects = await Project.findAll({
      where: { userId }
    });

    const portfolio = await Portfolio.findOne({
      where: { userId }
    });

    const averageScore =
      progress.length > 0
        ? (
            progress.reduce(
              (sum, item) => sum + item.score,
              0
            ) / progress.length
          ).toFixed(1)
        : 0;

    res.json({

      totalProgress: progress.length,

      totalProjects: projects.length,

      averageScore,

      portfolio

    });

  }

  catch (error) {

    res.status(500).json({

      message: error.message

    });

  }

};