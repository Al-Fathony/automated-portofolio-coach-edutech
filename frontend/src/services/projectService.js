import api from "./api";

// ==========================
// GET PROJECT BERDASARKAN USER
// ==========================

export const getProjects = (userId) => {

  return api.get(`/projects/user/${userId}`);

};

// ==========================
// CREATE
// ==========================

export const createProject = (data) => {

  return api.post("/projects", data);

};

// ==========================
// UPDATE
// ==========================

export const updateProject = (id, data) => {

  return api.put(`/projects/${id}`, data);

};

// ==========================
// DELETE
// ==========================

export const deleteProject = (id) => {

  return api.delete(`/projects/${id}`);

};