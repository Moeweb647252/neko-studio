import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/chat",
    },
    {
      path: "/chat",
      component: () => import("../views/Chat.vue"),
      name: "对话",
      meta: {
        icon: "pi pi-comments",
      },
    },
    {
      path: "/translate",
      component: () => import("../views/Translate.vue"),
      name: "翻译",
      meta: {
        icon: "pi pi-globe",
      },
    },
    {
      path: "/settings",
      component: () => import("../views/Settings.vue"),
      name: "设置",
      meta: {
        icon: "pi pi-cog",
      },
    },
  ],
});

export default router;
