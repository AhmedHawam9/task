import { createRouter, createWebHistory } from "vue-router";

import homePage from "../view/index.vue";
//omrah Search
const routes = [
  // Website routes
  { path: "/", component: homePage, name: "homePage" },
  // { path: "/404", component: NotFound },
  // { path: "/:catchAll(.*)", redirect: "/404" },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
  hashbang: false,
  mode: "html5",
  linkActiveClass: "active",
  // linkExactActiveClass: "exact-active",
  scrollBehavior() {
    // Scroll to the top of the page
    return window.scrollTo({ top: 0, behavior: "smooth" });
  },
});

export default router;
