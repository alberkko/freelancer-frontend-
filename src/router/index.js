import Vue from "vue";
import VueRouter from "vue-router";
import guestRoutes from "./guest.routes";
import homeRoutes from "./user.routes";
import adminRoutes from "./admin.routes";
import GuestPage from "../views/pages/public/GuestPage.vue";
import AdminHome from "../views/pages/private/AdminHome.vue";
import HomePage from "../views/pages/private/Home.vue";
import {
  TokenProvider
} from "../provider/storage/token.storage";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    component: GuestPage,
    children: [...guestRoutes],
  },
  {
    path: "/home",
    component: HomePage,
    children: [...homeRoutes],
    meta: {
      public: false,
    },
  },
  {
    path: "/admin/home",
    component: AdminHome,
    children: [...adminRoutes],
    meta: {
      public: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const isPublic = to.matched.some((record) => record.meta.public);
  const onlyWhenLoggedOut = to.matched.some(
    (record) => record.meta.onlyWhenLoggedOut
  );
  const loggedIn = !!TokenProvider.getToken();

  if (!isPublic && !loggedIn) {
    return next({
      path: "/login",
      query: {
        redirect: to.fullPath,
      },
    });
  }

  if (loggedIn && onlyWhenLoggedOut) {
    return next("/browse-projects");
  }

  next();
});

export default router;