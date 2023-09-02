import { createRouter, createWebHashHistory } from "vue-router";


const routes = [
  {
    path: "/token",
    component: () => import("../pages/GenerarToken.vue"),
  },
  {
    path: "/estudiante",
    component: () => import("../pages/GuardarEstudiante.vue"),
  },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;