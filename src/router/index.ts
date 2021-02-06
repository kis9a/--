import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { name: "Home", path: "/", component: () => import("../views/Home.vue") },
  { name: "404", path: "/404", component: () => import("../views/404.vue") },
  { path: "/:catchAll(.*)", redirect: "404" },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
