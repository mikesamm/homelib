import { createWebHistory, createRouter } from "vue-router";

import HomeView from "./pages/HomeView.vue";
import AboutView from "./pages/AboutView.vue";
import LoginView from "./pages/LoginView.vue";

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/login', component: LoginView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;