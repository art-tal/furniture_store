import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
// import Custom from "../views/Custom";
import Error404 from "../views/Error404.vue";

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

  // {
  //   // path: "catalog/:type",
  //   path: "custom",
  //   name: "custom",
  //   component: Custom,
  // },


  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
