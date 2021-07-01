import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Custom from "../views/Custom";
import Gallery from "../views/Gallery";
import Error404 from "../views/Error404.vue";
import About from "../views/About.vue";
import Contacts from "../views/Contacts";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: '/:pathMatch(.*)*',
    name: "error_404",
    component: Error404,
  },

  {
    path: '/custom_furniture_gallery',
    name: "custom",
    component: Custom,
  },

  {
    path: "/gallery/:slug",
    name: "gallery",
    component: Gallery,
  },

  {
    path: '/about',
    name: "about",
    component: About,
  },

  {
    path: '/contacts',
    name: "contacts",
    component: Contacts,
  },

  // {
  //   // path: "catalog/:type",
  //   path: "custom",
  //   name: "custom",
  //   component: Custom,
  // },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
