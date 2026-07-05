<template>
  <div>

    <div
      class="d-flex justify-content-between align-items-center mb-4"
    >

      <h2>📚 Learning Progress</h2>

      <button
        class="btn btn-primary"
        @click="openCreateModal"
      >
        + Tambah Progress
      </button>

    </div>

    <ProgressTable
      :progress="progress"
      @edit="editProgress"
      @delete="deleteProgress"
    />

    <ProgressModal
      :data="selectedProgress"
      @save="saveProgress"
    />

  </div>
</template>

<script setup>

import { ref, onMounted } from "vue";

import {
  getProgress,
  createProgress,
  updateProgress,
  deleteProgress as removeProgress
} from "../services/progressService";

import { Modal } from "bootstrap";

import ProgressTable from "../components/ProgressTable.vue";
import ProgressModal from "../components/ProgressModal.vue";

// ==========================
// USER LOGIN
// ==========================

const user = JSON.parse(
  localStorage.getItem("user")
);

// ==========================

const progress = ref([]);
const selectedProgress = ref(null);

let modal = null;

// ==========================
// LOAD DATA
// ==========================

const loadData = async () => {

  try {

    const response = await getProgress(user.id);

    progress.value = response.data;

  } catch (error) {

    console.log(error);

  }

};

// ==========================
// TAMBAH
// ==========================

const openCreateModal = () => {

  selectedProgress.value = null;

  modal.show();

};

// ==========================
// EDIT
// ==========================

const editProgress = (item) => {

  selectedProgress.value = { ...item };

  modal.show();

};

// ==========================
// DELETE
// ==========================

const deleteProgress = async (id) => {

  if (!confirm("Yakin ingin menghapus data?")) {

    return;

  }

  try {

    await removeProgress(id);

    await loadData();

  } catch (error) {

    console.log(error);

    alert("Gagal menghapus data");

  }

};

// ==========================
// SAVE
// ==========================

const saveProgress = async (data) => {

  try {

    if (data.id) {

      await updateProgress(data.id, data);

    } else {

      await createProgress({

        userId: user.id,

        courseName: data.courseName,

        category: data.category,

        score: data.score,

        status: data.status

      });

    }

    await loadData();

    modal.hide();

  } catch (error) {

    console.log(error);

    if (error.response) {

      console.log(error.response.data);

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

  loadData();

  modal = new Modal(
    document.getElementById("progressModal")
  );

});

</script>