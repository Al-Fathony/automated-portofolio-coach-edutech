const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Portfolio = sequelize.define(
  "Portfolio",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    generatedTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    skillsList: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    projectHighlights: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    // ==========================
    // AI Analysis
    // ==========================

    analysis: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Portfolio;