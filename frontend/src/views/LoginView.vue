<template>
  <div class="login-page">

    <div class="login-card">

      <div class="text-center mb-5">


        <h1 class="title mt-4">
          Automated Portfolio Coach
        </h1>

        <p class="subtitle">
          Smart Portfolio Recommendation System
        </p>

      </div>

      <div class="mb-3">

        <label class="form-label">
          Email
        </label>

        <input
          v-model="email"
          type="email"
          class="form-control"
          placeholder="Masukkan email"
        />

      </div>

      <div class="mb-4">

        <label class="form-label">
          Password
        </label>

        <input
          v-model="password"
          type="password"
          class="form-control"
          placeholder="Masukkan password"
        />

      </div>

      <button
        class="btn login-btn w-100"
        @click="login"
      >
        Login
      </button>

      <div class="text-center mt-4">

        <span class="text-muted">
          Belum punya akun?
        </span>

        <RouterLink
          to="/register"
          class="register-link d-block mt-2"
        >
          Daftar Sekarang
        </RouterLink>

      </div>

      <div class="footer-text">

        © 2026 Automated Portfolio Coach

      </div>

    </div>

  </div>
</template>

<script setup>

import { ref } from "vue";
import { useRouter } from "vue-router";
import api from "../services/api";

const router = useRouter();

const email = ref("");
const password = ref("");

const login = async () => {

  try {

    const response = await api.post("/auth/login", {

      email: email.value,

      password: password.value

    });

    localStorage.setItem(
      "token",
      response.data.token
    );

    localStorage.setItem(
      "user",
      JSON.stringify(response.data.user)
    );

    router.push("/dashboard");

  }

  catch (error) {

    if (error.response) {

      alert(error.response.data.message);

    }

    else {

      alert("Login gagal");

    }

  }

};

</script>

<style scoped>

.login-page{

    min-height:100vh;

    display:flex;

    justify-content:center;

    align-items:center;

    background:#f7f7f7;

    padding:30px;

}

.login-card{

    width:430px;

    background:#ffffff;

    border-radius:20px;

    padding:45px;

    border:1px solid #ececec;

    box-shadow:0 15px 35px rgba(0,0,0,.06);

}

.logo-circle{

    width:64px;

    height:64px;

    margin:auto;

    border-radius:50%;

    background:#111;

    color:white;

    display:flex;

    justify-content:center;

    align-items:center;

    font-size:26px;

}

.title{

    color:#111;

    font-size:34px;

    font-weight:700;

    line-height:1.2;

}

.subtitle{

    color:#777;

    margin-top:8px;

    font-size:15px;

}

.form-label{

    color:#222;

    font-weight:600;

    margin-bottom:8px;

}

.form-control{

    height:52px;

    border-radius:12px;

    border:1px solid #dcdcdc;

    background:white;

    transition:.25s;

}

.form-control::placeholder{

    color:#999;

}

.form-control:focus{

    border-color:#111;

    box-shadow:0 0 0 .15rem rgba(0,0,0,.08);

}

.login-btn{

    height:52px;

    background:#111;

    color:white;

    border:none;

    border-radius:12px;

    font-weight:600;

    font-size:16px;

    transition:.25s;

}

.login-btn:hover{

    background:#2c2c2c;

    color:white;

}

.register-link{

    color:#111;

    text-decoration:none;

    font-weight:600;

}

.register-link:hover{

    text-decoration:underline;

}

.footer-text{

    margin-top:35px;

    padding-top:20px;

    border-top:1px solid #ececec;

    text-align:center;

    color:#999;

    font-size:14px;

}

</style>