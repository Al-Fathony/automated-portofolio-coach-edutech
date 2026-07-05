const Progress = require("../models/Progress");
const Project = require("../models/Project");

exports.generatePortfolio = async (userId) => {

  const progressList = await Progress.findAll({
    where: { userId }
  });

  const projects = await Project.findAll({
    where: { userId }
  });

  // ===========================
  // Skills
  // ===========================

  const skills = progressList.map(item => item.courseName);

  // ===========================
  // Score per Category
  // ===========================

  let frontendScore = 0;
  let backendScore = 0;
  let databaseScore = 0;

  let frontendCount = 0;
  let backendCount = 0;
  let databaseCount = 0;

  progressList.forEach(item => {

    if(item.category==="Frontend"){

      frontendScore += item.score;
      frontendCount++;

    }

    if(item.category==="Backend"){

      backendScore += item.score;
      backendCount++;

    }

    if(item.category==="Database"){

      databaseScore += item.score;
      databaseCount++;

    }

  });

  const avgFrontend =
    frontendCount
      ? frontendScore/frontendCount
      : 0;

  const avgBackend =
    backendCount
      ? backendScore/backendCount
      : 0;

  const avgDatabase =
    databaseCount
      ? databaseScore/databaseCount
      : 0;

  // ===========================
  // Career Recommendation
  // ===========================

  let generatedTitle = "Junior Full Stack Developer";

  if(
    avgFrontend>=avgBackend &&
    avgFrontend>=avgDatabase
  ){

    generatedTitle="Junior Frontend Developer";

  }

  else if(
    avgBackend>=avgFrontend &&
    avgBackend>=avgDatabase
  ){

    generatedTitle="Junior Backend Developer";

  }

  // ===========================
  // Best Project
  // ===========================

  const bestProject = projects.sort(
    (a,b)=>b.score-a.score
  )[0];

  // ===========================
  // Portfolio Readiness
  // ===========================

  const averageLearningScore =
    progressList.length
    ? progressList.reduce(
        (sum,item)=>sum+item.score,
        0
      )/progressList.length
    :0;

  let readiness = Math.round(

    averageLearningScore*0.7 +

    projects.length*10

  );

  if(readiness>100){

    readiness=100;

  }

  // ===========================
  // Recommendation
  // ===========================

  let recommendations=[];

  if(
    generatedTitle.includes("Frontend")
  ){

    recommendations=[

      "Pelajari React",

      "Pelajari TypeScript",

      "Bangun Minimal 3 Project Frontend",

      "Pelajari REST API"

    ];

  }

  else if(
    generatedTitle.includes("Backend")
  ){

    recommendations=[

      "Pelajari Docker",

      "Pelajari JWT",

      "Pelajari Redis",

      "Bangun REST API"

    ];

  }

  else{

    recommendations=[

      "Pelajari Docker",

      "Pelajari CI/CD",

      "Bangun Fullstack Project",

      "Deploy ke Cloud"

    ];

  }

  // ===========================
  // Next Career
  // ===========================

  let nextCareer="Software Engineer";

  if(
    generatedTitle.includes("Frontend")
  ){

    nextCareer="Frontend Developer (Intermediate)";

  }

  if(
    generatedTitle.includes("Backend")
  ){

    nextCareer="Backend Developer (Intermediate)";

  }

  if(
    generatedTitle.includes("Full Stack")
  ){

    nextCareer="Full Stack Developer";

  }

  // ===========================
  // Summary
  // ===========================

  const summary=

`Memiliki kemampuan pada ${skills.join(", ")} dengan rata-rata nilai ${averageLearningScore.toFixed(1)}. Berdasarkan hasil analisis Learning Progress dan Project, pengguna direkomendasikan sebagai ${generatedTitle}.`;

  return{

    generatedTitle,

    summary,

    skillsList:skills.join(", "),

    projectHighlights:
      bestProject
      ? bestProject.projectName
      :"Belum ada project",

    analysis:{

      portfolioReadiness:readiness,

      strengths:skills,

      recommendations,

      nextCareer

    }

  };

};