import api from "./api";

// ==========================
// GET DASHBOARD
// ==========================

export const getDashboard = (userId) => {

  return api.get(`/dashboard/${userId}`);

};