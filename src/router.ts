import { createWebHistory, createRouter } from "vue-router";

// import views here
import HomeView from "./pages/HomeView.vue";
import AboutView from "./pages/AboutView.vue";

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;