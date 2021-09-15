import Vue from "vue";
import VueRouter from "vue-router";
import { Home, Transparency, AboutUs } from "../views/";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Inicio",
    component: Home
  },
  {
    path: "/nosotros",
    name: "Nosotros",
    component: AboutUs
  },
  {
    path: "/investigacion",
    name: "Investigación",
    component: AboutUs
  },
  {
    path: "/posgrados",
    name: "Posgrados",
    component: AboutUs
  },
  {
    path: "/transparencia",
    name: "Transparencia",
    component: Transparency
  },
  {
    path: "/incidencia-social",
    name: "Incidencia social",
    component: AboutUs
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
