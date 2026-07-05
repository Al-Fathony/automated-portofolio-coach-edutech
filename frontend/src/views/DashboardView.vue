<template>
  <div class="container-fluid">

    <div class="d-flex justify-content-between align-items-center mb-4">

      <div>

        <h2 class="fw-bold text-black">
          Dashboard
        </h2>

        <p class="text-secondary">
          Selamat datang kembali,
          <strong>{{ user.name }}</strong>
        </p>

      </div>

    </div>

    <div class="row g-4">

      <div class="col-lg-3 col-md-6">

        <div class="dashboard-card">


          <small>Total Progress</small>

          <h2>{{ dashboard.totalProgress || 0 }}</h2>

        </div>

      </div>

      <div class="col-lg-3 col-md-6">

        <div class="dashboard-card">


          <small>Total Project</small>

          <h2>{{ dashboard.totalProjects || 0 }}</h2>

        </div>

      </div>

      <div class="col-lg-3 col-md-6">

        <div class="dashboard-card">


          <small>Average Score</small>

          <h2>{{ dashboard.averageScore || 0 }}</h2>

        </div>

      </div>

      <div class="col-lg-3 col-md-6">

        <div class="dashboard-card">


          <small>Portfolio</small>

          <h2>

            {{ dashboard.portfolio ? "Ready" : "Not Ready" }}

          </h2>

        </div>

      </div>

    </div>

    <div class="dashboard-card mt-4">

      <h4 class="mb-3">

        AI Career Recommendation

      </h4>

      <div
        v-if="dashboard.portfolio"
      >

        <h3>

          {{ dashboard.portfolio.generatedTitle }}

        </h3>

        <p class="text-secondary">

          {{ dashboard.portfolio.summary }}

        </p>

      </div>

      <div
        v-else
        class="text-secondary"
      >

        Belum ada portfolio.

        <br>

        Tambahkan Progress dan Project terlebih dahulu,
        kemudian klik Generate Portfolio.

      </div>

    </div>

  </div>
</template>

<script setup>

import { ref,onMounted } from "vue";
import { getDashboard } from "../services/dashboardService";

const user = JSON.parse(
  localStorage.getItem("user")
);

const dashboard = ref({});

const loadDashboard = async()=>{

  try{

    const response = await getDashboard(user.id);

    dashboard.value = response.data;

  }

  catch(error){

    console.log(error);

  }

};

onMounted(()=>{

  loadDashboard();

});

</script>

<style scoped>

.container-fluid{

    color:white;

}

.dashboard-card{

    background:#2b2b2b;

    border-radius:18px;

    padding:25px;

    box-shadow:0 10px 30px rgba(0,0,0,.25);

    transition:.3s;

}

.dashboard-card:hover{

    transform:translateY(-4px);

}

.icon{

    font-size:35px;

    margin-bottom:10px;

}

small{

    color:#bfbfbf;

}

h2{

    font-weight:bold;

    margin-top:10px;

}

h3{

    font-weight:bold;

}

</style>