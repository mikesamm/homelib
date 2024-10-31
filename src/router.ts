import { createWebHistory, createRouter } from "vue-router";

import HomeView from "./pages/HomeView.vue";
import AboutView from "./pages/AboutView.vue";
import LoginView from "./pages/LoginView.vue";
import LibraryView from "./pages/LibraryView.vue";

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/login', component: LoginView },
  { path: '/library', component: LibraryView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;