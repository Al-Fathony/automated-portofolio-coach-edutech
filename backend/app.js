require("dotenv").config();

const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");

// ==========================
// IMPORT MODELS
// ==========================

const User = require("./models/User");
const Progress = require("./models/Progress");
const Project = require("./models/Project");
const Portfolio = require("./models/Portfolio");

// ==========================
// IMPORT ROUTES
// ==========================

const authRoutes = require("./routes/authRoutes");
const progressRoutes = require("./routes/progressRoutes");
const projectRoutes = require("./routes/projectRoutes");
const portfolioRoutes = require("./routes/portfolioRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// ==========================
// API ROUTES
// ==========================

app.use("/api/auth", authRoutes);
app.use("/api/progress", progressRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/portfolio", portfolioRoutes);
app.use("/api/dashboard", dashboardRoutes);

// ==========================
// RELASI DATABASE
// ==========================

// USER -> PROGRESS

User.hasMany(Progress, {
  foreignKey: "userId",
  as: "progressList",
});

Progress.belongsTo(User, {
  foreignKey: "userId",
  as: "user",
});

// USER -> PROJECT

User.hasMany(Project, {
  foreignKey: "userId",
  as: "projects",
});

Project.belongsTo(User, {
  foreignKey: "userId",
  as: "user",
});

// USER -> PORTFOLIO

User.hasOne(Portfolio, {
  foreignKey: "userId",
  as: "portfolio",
});

Portfolio.belongsTo(User, {
  foreignKey: "userId",
  as: "user",
});

// ==========================
// HOME
// ==========================

app.get("/", (req, res) => {
  res.send("🚀 Automated Portfolio Coach API Running");
});

// ==========================
// START SERVER
// ==========================

async function startServer() {

  try {

    console.log("🔄 Connecting to Supabase...");

    await sequelize.authenticate();

    console.log("✅ Database Connected Successfully");

    await sequelize.sync({
      alter: true
    });

    console.log("✅ Tables Synced Successfully");

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {

      console.log(`🚀 Server Running on Port ${PORT}`);

    });

  } catch (error) {

    console.error("❌ Database Connection Failed");

    console.error(error);

  }

}

startServer();