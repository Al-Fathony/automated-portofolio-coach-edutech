<template>
  <div class="login-page">

    <div class="login-card">

      <div class="text-center mb-5">

        <div class="logo-circle">
          📝
        </div>

        <h1 class="title mt-4">
          Create Account
        </h1>

        <p class="subtitle">
          Join Automated Portfolio Coach
        </p>

      </div>

      <div class="mb-3">

        <label class="form-label">
          Nama Lengkap
        </label>

        <input
          v-model="name"
          class="form-control"
          placeholder="Masukkan nama lengkap"
        />

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
        class="btn register-btn w-100"
        @click="register"
      >
        Create Account
      </button>

      <div class="text-center mt-4">

        <span class="text-muted">
          Sudah punya akun?
        </span>

        <RouterLink
          to="/"
          class="login-link d-block mt-2"
        >
          Login Sekarang
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

const name = ref("");
const email = ref("");
const password = ref("");

const register = async () => {

  try {

    await api.post("/auth/register", {

      name: name.value,

      email: email.value,

      password: password.value

    });

    alert("Register berhasil.");

    router.push("/");

  }

  catch (error) {

    console.log(error);

    if (error.response) {

      alert(error.response.data.message);

    }

    else {

      alert("Register gagal.");

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

    background:white;

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

.register-btn{

    height:52px;

    background:#111;

    color:white;

    border:none;

    border-radius:12px;

    font-weight:600;

    font-size:16px;

    transition:.25s;

}

.register-btn:hover{

    background:#2c2c2c;

    color:white;

}

.login-link{

    color:#111;

    text-decoration:none;

    font-weight:600;

}

.login-link:hover{

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