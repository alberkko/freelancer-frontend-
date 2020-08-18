import Dashboard from "../views/pages/private/admin/Dashboard.vue";
import UserManagement from "../views/pages/private/admin/UserManagement.vue";
import Users from "../views/pages/private/admin/Users.vue";
import Permissions from "../views/pages/private/admin/Permissions.vue";
import Roles from "../views/pages/private/admin/Roles.vue";

export default [
  {
    path: "/admin/home",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      public: true,
    },
  },
  {
    path: "/user-management",
    name: "User Management",
    component: UserManagement,
    meta: {
      public: true,
    },
    children: [
      {
        path: "/admin/users",
        name: "Users",
        component: Users,
        meta: {
          public: true,
        },
      },
      {
        path: "/permissions",
        name: "Permissions",
        component: Permissions,
        meta: {
          public: true,
        },
      },
      {
        path: "/roles",
        name: "Roles",
        component: Roles,
        meta: {
          public: true,
        },
      },
    ],
  },
];
