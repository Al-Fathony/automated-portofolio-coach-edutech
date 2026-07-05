const Progress = require("../models/Progress");

// ==========================
// CREATE PROGRESS
// ==========================

exports.createProgress = async (req, res) => {

  try {

    const progress = await Progress.create({

      userId: req.body.userId,
      courseName: req.body.courseName,
      category: req.body.category,
      progress: req.body.progress,
      status: req.body.status

    });

    res.status(201).json({

      message: "Progress berhasil ditambahkan",

      data: progress

    });

  }

  catch (error) {

    res.status(500).json({

      message: error.message

    });

  }

};

// ==========================
// GET PROGRESS BERDASARKAN USER
// ==========================

exports.getAllProgress = async (req, res) => {

  try {

    const { userId } = req.params;

    const progress = await Progress.findAll({

      where: {

        userId

      },

      order: [["id", "DESC"]]

    });

    res.status(200).json(progress);

  }

  catch (error) {

    res.status(500).json({

      message: error.message

    });

  }

};

// ==========================
// GET PROGRESS BY ID
// ==========================

exports.getProgressById = async (req, res) => {

  try {

    const progress = await Progress.findByPk(req.params.id);

    if (!progress) {

      return res.status(404).json({

        message: "Progress tidak ditemukan"

      });

    }

    res.status(200).json(progress);

  }

  catch (error) {

    res.status(500).json({

      message: error.message

    });

  }

};

// ==========================
// UPDATE PROGRESS
// ==========================

exports.updateProgress = async (req, res) => {

  try {

    const progress = await Progress.findByPk(req.params.id);

    if (!progress) {

      return res.status(404).json({

        message: "Progress tidak ditemukan"

      });

    }

    await progress.update({

      courseName: req.body.courseName,
      category: req.body.category,
      progress: req.body.progress,
      status: req.body.status

    });

    res.status(200).json({

      message: "Progress berhasil diupdate",

      data: progress

    });

  }

  catch (error) {

    res.status(500).json({

      message: error.message

    });

  }

};

// ==========================
// DELETE PROGRESS
// ==========================

exports.deleteProgress = async (req, res) => {

  try {

    const progress = await Progress.findByPk(req.params.id);

    if (!progress) {

      return res.status(404).json({

        message: "Progress tidak ditemukan"

      });

    }

    await progress.destroy();

    res.status(200).json({

      message: "Progress berhasil dihapus"

    });

  }

  catch (error) {

    res.status(500).json({

      message: error.message

    });

  }

};