import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/home/index.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/login/index.vue"),
    },
    {
      path: "/:catchAll(.*)", // 不识别的path自动匹配404
      name: '/404',
      component: () => import("../views/404/index.vue"),
    },
  ],
});

export default router;
