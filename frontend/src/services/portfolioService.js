import api from "./api";

// ==========================
// GENERATE PORTFOLIO
// ==========================

export const generatePortfolio = (userId) => {
  return api.post(`/portfolio/generate/${userId}`);
};

// ==========================
// GET PORTFOLIO USER
// ==========================

export const getPortfolio = (userId) => {
  return api.get(`/portfolio/user/${userId}`);
};