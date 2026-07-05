<template>
  <div class="container-fluid">

    <div class="row g-4">

      <!-- Portfolio -->

      <div class="col-lg-8">

        <div class="card shadow border-0 bg-dark text-white">

          <div class="card-body p-4">

            <div class="d-flex justify-content-between align-items-center mb-4">

              <div>

                <h2 class="fw-bold">
                  AI Portfolio Generator
                </h2>

                <small class="text-secondary">
                  Generate portfolio berdasarkan progress dan project milikmu.
                </small>

              </div>

              <button
                class="btn btn-light"
                @click="generate"
                :disabled="loading"
              >

                <span
                  v-if="loading"
                  class="spinner-border spinner-border-sm me-2"
                ></span>

                {{ loading ? "Generating..." : "Generate Portfolio" }}

              </button>

            </div>

            <div v-if="portfolio">

              <hr class="border-secondary">

              <div class="mb-4">

                <h5 class="text-secondary">

                  Recommended Role

                </h5>

                <div class="alert alert-light">

                  <strong>

                    {{ portfolio.generatedTitle }}

                  </strong>

                </div>

              </div>

              <div class="mb-4">

                <h5 class="text-secondary">

                  Professional Summary

                </h5>

                <div class="summary-card">

                  {{ portfolio.summary }}

                </div>

              </div>

              <div class="mb-4">

                <h5 class="text-secondary">

                  Skills

                </h5>

                <span

                  v-for="skill in skills"

                  :key="skill"

                  class="badge bg-light text-dark me-2 mb-2"

                >

                  {{ skill }}

                </span>

              </div>

              <div>

                <h5 class="text-secondary">

                  Best Project

                </h5>

                <div class="summary-card">

                  {{ portfolio.projectHighlights }}

                </div>

              </div>

            </div>

            <div
              v-else
              class="text-center py-5 text-secondary"
            >

              Belum ada portfolio.

              <br><br>

              Klik

              <strong>

                Generate Portfolio

              </strong>

              untuk membuat portfolio AI.

            </div>

          </div>

        </div>

      </div>

      <!-- AI -->

      <div class="col-lg-4">

        <AIAnalysisCard
          :portfolio="portfolio"
        />

      </div>

    </div>

  </div>
</template>

<script setup>

import { ref, computed, onMounted } from "vue";

import {

  generatePortfolio,

  getPortfolio

} from "../services/portfolioService";

import AIAnalysisCard from "../components/AIAnalysisCard.vue";

// ==========================
// USER LOGIN
// ==========================

const user = JSON.parse(

  localStorage.getItem("user")

);

// ==========================

const loading = ref(false);

const portfolio = ref(null);

// ==========================
// LOAD PORTFOLIO
// ==========================

const loadPortfolio = async () => {

  if (!user) return;

  try {

    const response = await getPortfolio(user.id);

    if (response.data.length > 0) {

      portfolio.value =

        response.data[
          response.data.length - 1
        ];

      if (

        portfolio.value.analysis &&

        typeof portfolio.value.analysis === "string"

      ) {

        portfolio.value.analysis =

          JSON.parse(

            portfolio.value.analysis

          );

      }

    }

    else {

      portfolio.value = null;

    }

  }

  catch (error) {

    console.log(error);

  }

};

// ==========================
// GENERATE
// ==========================

const generate = async () => {

  loading.value = true;

  try {

    await generatePortfolio(user.id);

    await loadPortfolio();

  }

  catch (error) {

    console.log(error);

    alert("Generate Portfolio gagal.");

  }

  loading.value = false;

};

// ==========================
// SKILLS
// ==========================

const skills = computed(() => {

  if (!portfolio.value) return [];

  return portfolio.value.skillsList

    .split(",")

    .map(item => item.trim());

});

onMounted(() => {

  loadPortfolio();

});

</script>

<style scoped>

.card{

    background:#2b2b2b;

    border-radius:18px;

}

.summary-card{

    background:#3a3a3a;

    padding:18px;

    border-radius:12px;

    color:white;

}

.badge{

    font-size:14px;

    padding:10px 14px;

}

.btn-light{

    font-weight:600;

}

</style>