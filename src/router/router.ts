import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/player",
  },
  {
    path: "/player",
    name: "Player",
    component: () => import("../views/PlayerView/PlayerView.vue"),
  },
  {
    path: "/game",
    name: "Game",
    component: () => import("../views/GameView/GameView.vue"),
  },
  {
    path: "/draw",
    name: "Draw",
    component: () => import("../views/DrawView/DrawView.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/AboutView/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
