import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // ================= AUTH =================
    {
      path: "/auth",
      component: () => import("@/layouts/auth/AuthLayout.vue"), // lazy
      children: [
        {
          path: "login",
          name: "Login",
          component: () => import("@/features/auth/views/Login.vue"), // lazy
        },
        {
          path: "signup",
          name: "Signup",
          component: () => import("@/features/auth/views/Signup.vue"),
        },
        {
          path: "otp",
          name: "Otp",
          component: () => import("@/features/auth/views/SendOTP.vue"),
        },
      ],
    },

    // ================= ADMIN =================
    {
      path: "/",
      component: () => import("@/layouts/admin/AdminLayout.vue"),
      children: [
        {
          path: "adminsidebar",
          name: "AdminSidebar",
          component: () => import("@/features/admin/views/AdminSidebar.vue"),
        },
      ],
    },
    // ================= User =================
    {
      path: "/user",
      component: () => import("@/layouts/user/userlayout.vue"),
      children: [
        {
          path: "UserSidebar",
          name: "UserSidebar",
          component: () => import("@/features/Users/views/UserSidebar.vue"),
        },
      ],
    },
  ],
});

export default router;
