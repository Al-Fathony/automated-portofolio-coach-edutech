<template>
  <div>

    <div
      class="d-flex justify-content-between align-items-center mb-4"
    >

      <h2>📁 My Projects</h2>

      <button
        class="btn btn-primary"
        @click="openCreateModal"
      >
        + Tambah Project
      </button>

    </div>

    <ProjectTable
      :projects="projects"
      @edit="editProject"
      @delete="deleteProject"
    />

    <ProjectModal
      :data="selectedProject"
      @save="saveProject"
    />

  </div>
</template>

<script setup>

import { ref, onMounted } from "vue";
import { Modal } from "bootstrap";

import {
  getProjects,
  createProject,
  updateProject,
  deleteProject as removeProject
} from "../services/projectService";

import ProjectTable from "../components/ProjectTable.vue";
import ProjectModal from "../components/ProjectModal.vue";

const projects = ref([]);
const selectedProject = ref(null);

let modal = null;

// ==========================
// USER LOGIN
// ==========================

const user = JSON.parse(
  localStorage.getItem("user")
);

// ==========================
// LOAD DATA
// ==========================

const loadData = async () => {

  if (!user) return;

  try {

    const response = await getProjects(user.id);

    projects.value = response.data;

  } catch (error) {

    console.log(error);

  }

};

// ==========================
// TAMBAH
// ==========================

const openCreateModal = () => {

  selectedProject.value = null;

  modal.show();

};

// ==========================
// EDIT
// ==========================

const editProject = (item) => {

  selectedProject.value = { ...item };

  modal.show();

};

// ==========================
// DELETE
// ==========================

const deleteProject = async (id) => {

  if (!confirm("Yakin ingin menghapus project?")) return;

  try {

    await removeProject(id);

    await loadData();

  } catch (error) {

    console.log(error);

    alert("Gagal menghapus project");

  }

};

// ==========================
// SAVE
// ==========================

const saveProject = async (data) => {

  try {

    if (data.id) {

      await updateProject(data.id, data);

    } else {

      await createProject({

        userId: user.id,

        projectName: data.projectName,

        projectUrl: data.projectUrl,

        description: data.description,

        score: data.score

      });

    }

    await loadData();

    modal.hide();

  } catch (error) {

    console.log(error);

    if (error.response) {

      alert(error.response.data.message);

    } else {

      alert(error.message);

    }

  }

};

// ==========================
// MOUNTED
// ==========================

onMounted(() => {

  modal = new Modal(

    document.getElementById("projectModal")

  );

  loadData();

});

</script>