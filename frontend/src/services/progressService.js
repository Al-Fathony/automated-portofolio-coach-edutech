import api from "./api";

// GET Progress berdasarkan User Login
export const getProgress = (userId) => {
  return api.get(`/progress/user/${userId}`);
};

// Tambah Progress
export const createProgress = (data) => {
  return api.post("/progress", data);
};

// Update Progress
export const updateProgress = (id, data) => {
  return api.put(`/progress/${id}`, data);
};

// Hapus Progress
export const deleteProgress = (id) => {
  return api.delete(`/progress/${id}`);
};