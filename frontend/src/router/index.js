import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import NProgress from 'nprogress';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Home.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/auth/signin",
      name: "login",
      component: () => import("@/views/auth/Login.vue"),
    },
    {
      path: "/auth/signup",
      name: "register",
      component: () => import("@/views/auth/Register.vue"),
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("@/views/Profile.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/service",
      name: "service",
      component: () => import("@/views/Service.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("@/views/Contact.vue"),
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
      // Start the route progress bar.
      NProgress.start()
  }
  next()
})

router.afterEach(() => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})


router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const isLogin = useAuthStore().isAuthenticated;

  if (isLogin && requiresAuth) {
    next();
  } else if (!isLogin && requiresAuth && to.path !== '/auth/signin') {
    // Redirect to the login page only if the route requires authentication
    next('/auth/signin');
    console.log('Redirecting to login page');
  } else {
    // Continue with the navigation
    next();
  }
});

export default router;
