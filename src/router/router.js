import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Catalog from "../views/Catalog";
// import Error404 from "../views/Error404";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "catalog/:type",
    name: "catalog",
    component: Catalog,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },


  // {
  //   path: "*",
  //   name: "error_404",
  //   component: Error404,
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;