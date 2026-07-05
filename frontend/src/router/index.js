import { createRouter, createWebHistory } from "vue-router";

import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";

import DashboardView from "../views/DashboardView.vue";
import ProgressView from "../views/ProgressView.vue";
import ProjectView from "../views/ProjectView.vue";
import PortfolioView from "../views/PortfolioView.vue";

import MainLayout from "../layouts/MainLayout.vue";

const router = createRouter({

  history: createWebHistory(),

  routes: [

    // ==========================
    // AUTH
    // ==========================

    {
      path: "/",
      name: "login",
      component: LoginView
    },

    {
      path: "/register",
      name: "register",
      component: RegisterView
    },

    // ==========================
    // MAIN APP
    // ==========================

    {
      path: "/",
      component: MainLayout,

      meta: {
        requiresAuth: true
      },

      children: [

        {
          path: "dashboard",
          component: DashboardView
        },

        {
          path: "progress",
          component: ProgressView
        },

        {
          path: "projects",
          component: ProjectView
        },

        {
          path: "portfolio",
          component: PortfolioView
        }

      ]

    }

  ]

});

// ==========================
// ROUTE GUARD
// ==========================

router.beforeEach((to, from, next) => {

  const token = localStorage.getItem("token");

  if (to.meta.requiresAuth && !token) {
    next("/");
  } else {
    next();
  }

});

export default router;