import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import Services from "../views/ServicesView.vue";
import About from "../views/AboutView.vue";
import Blog from "../views/BlogView.vue";
import Contact from "../views/ConatctView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/services",
    name: "Services",
    component: Services,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
