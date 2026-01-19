import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // ================= AUTH =================
    {
      path: '/auth',
      component: () => import('@/layouts/AuthLayout.vue'), // lazy
      children: [
        {
          path: 'login',
          name: 'Login',
          component: () => import('@/features/auth/views/Login.vue') // lazy
        },
        {
          path: 'signup',
          name: 'Signup',
          component: () => import('@/features/auth/views/Signup.vue')
        },
        {
          path: 'otp',
          name: 'Otp',
          component: () => import('@/features/auth/views/SendOTP.vue')
        },
        {
          path: 'forgotPassword',
          name: 'ForgotPassword',
          component: () => import('@/features/auth/views/ForgotPassword.vue')
        }
      ]
    },

    // ================= ADMIN =================
    {
      path: '/',
      component: () => import('@/layouts/AdminLayout.vue'), // lazy
      children: [
        {
          path: 'adminsidebar', // ❗ no leading /
          name: 'AdminSidebar',
          component: () =>
            import('@/features/admin/views/AdminSidebar.vue') // lazy
        }
      ]
    }
  ]
})

export default router
