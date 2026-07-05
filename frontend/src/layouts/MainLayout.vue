<template>
  <div class="layout">

    <!-- Sidebar -->
    <aside class="sidebar">

      <div>

        <div class="brand">

          <i class="bi bi-robot"></i>

          <span>Portfolio Coach</span>

        </div>

        <div class="user-card">

          <div class="avatar">

            {{ initials }}

          </div>

          <div>

            <h6>{{ user.name }}</h6>

            <small>{{ user.email }}</small>

          </div>

        </div>

        <RouterLink to="/dashboard" class="menu">
          <i class="bi bi-speedometer2"></i>
          Dashboard
        </RouterLink>

        <RouterLink to="/progress" class="menu">
          <i class="bi bi-book"></i>
          Learning Progress
        </RouterLink>

        <RouterLink to="/projects" class="menu">
          <i class="bi bi-folder2-open"></i>
          Projects
        </RouterLink>

        <RouterLink to="/portfolio" class="menu">
          <i class="bi bi-person-workspace"></i>
          Portfolio
        </RouterLink>

      </div>

      <button
        class="btn btn-light logout-btn"
        @click="logout"
      >
        <i class="bi bi-box-arrow-right me-2"></i>
        Logout
      </button>

    </aside>

    <!-- Content -->
    <main class="content">

      <RouterView />

    </main>

  </div>
</template>

<script setup>

import { computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const user =
  JSON.parse(localStorage.getItem("user")) || {};

const initials = computed(() => {

  if (!user.name) return "U";

  return user.name
    .split(" ")
    .map(n => n[0])
    .join("")
    .toUpperCase();

});

const logout = () => {

  localStorage.removeItem("token");
  localStorage.removeItem("user");

  router.push("/");

};

</script>

<style scoped>

.layout{

display:flex;
height:100vh;
background:#f4f4f5;

}

.sidebar{

width:270px;
background:#111827;
color:white;

display:flex;
flex-direction:column;
justify-content:space-between;

padding:25px;

}

.brand{

display:flex;
align-items:center;
gap:10px;

font-size:22px;
font-weight:bold;

margin-bottom:35px;

}

.brand i{

font-size:30px;

}

.user-card{

display:flex;
align-items:center;

gap:15px;

background:#1f2937;

padding:15px;

border-radius:12px;

margin-bottom:35px;

}

.avatar{

width:55px;
height:55px;

border-radius:50%;

background:white;

color:#111827;

font-weight:bold;

display:flex;

align-items:center;

justify-content:center;

font-size:20px;

}

.user-card h6{

margin:0;

}

.user-card small{

color:#d1d5db;

}

.menu{

display:flex;
align-items:center;
gap:12px;

color:white;

text-decoration:none;

padding:14px 16px;

border-radius:10px;

margin-bottom:10px;

transition:.25s;

font-weight:500;

}

.menu:hover{

background:#374151;

}

.router-link-active{

background:white;
color:#111827;

font-weight:bold;

}

.logout-btn{

width:100%;
font-weight:bold;

}

.content{

flex:1;

padding:35px;

overflow:auto;

}

</style>