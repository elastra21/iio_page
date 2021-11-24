import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "../views/404.vue";

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
    component: () => import("../views/AboutUs.vue")
  },
  {
    path: "/personal",
    name: "Personal",
    component: () => import("../views/Personal.vue"),
    meta: { title: "Hello" }
  },
  {
    path: "/investigacion/:especiality",
    name: "Investigación",
    component: () => import("../views/Investigacion.vue"),
    params: true,
    props: {
      header: true,
      content: true
    }
  },

  {
    path: "/posgrados/:especiality",
    name: "Posgrados",
    component: () => import("../views/Posgrados.vue"),
    params: true,
    props: {
      header: true,
      content: true
    }
  },
  {
    path: "/transparencia",
    name: "Transparencia",
    component: () => import("../views/Transparency.vue")
  },
  {
    path: "/transparencia/informes",
    name: "Informes",
    component: () => import("../views/Informes.vue")
  },
  {
    path: "/incidencia-social",
    name: "Incidencia social",
    component: () => import("../views/Incidencia.vue")
  },
  //----------------- Not found 404 --------------
  { name: "404", path: "*", component: NotFound }
];

const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0, behavior: "smooth" };
  },
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
