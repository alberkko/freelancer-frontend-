import AboutPage from "@/views/pages/public/content/AboutPage.vue";
import HowItWorks from "@/views/pages/public/content/HowItWorksPage.vue";
import Welcome from "@/views/pages/public/content/WelcomePage.vue";
import Projects from "@/views/pages/public/content/ProjectsPage.vue";
import Freelancers from "@/views/pages/public/content/FreelancersPage.vue";
import Pricing from "@/views/pages/public/content/PricingPage.vue";
import Login from "@/views/pages/public/content/LoginPage.vue";
import Register from "@/views/pages/public/content/RegisterPage.vue";
import ForgotPassword from "@/views/pages/public/content/ForgotPassword.vue";
import ForgotPasswordVerifyEmail from "@/views/pages/public/content/ForgotPasswordVerifyEmail.vue";

export default [{
    path: "/",
    name: "Home",
    component: Welcome,
    isTopHeader: true,
    meta: {
      public: true,
    },
  },
  {
    path: "/about",
    name: "About Us",
    component: AboutPage,
    isTopHeader: true,
    meta: {
      public: true,
    },
  },
  {
    path: "/how-it-works",
    name: "How it works",
    component: HowItWorks,
    isTopHeader: true,
    meta: {
      public: true,
    },
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
    isTopHeader: true,
    meta: {
      public: true,
    },
  },
  {
    path: "/freelancers",
    name: "Freelancers",
    component: Freelancers,
    isTopHeader: true,
    meta: {
      public: true,
    },
  },
  {
    path: "/categories",
    name: "Pricing",
    component: Pricing,
    isTopHeader: true,
    meta: {
      public: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    isTopHeader: true,
    meta: {
      public: true,
      onlyWhenLoggedOut: true,
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    isTopHeader: true,
    meta: {
      public: true,
    },
  },
  {
    path: "/forgot-password",
    name: "Forgot Password",
    component: ForgotPassword,
    isTopHeader: false,
    meta: {
      public: true,
    },
  },
  {
    path: "/forgot-password/verify/email/:token",
    name: "Forgot Password Verify Email",
    component: ForgotPasswordVerifyEmail,
    isTopHeader: false,
    meta: {
      public: true,
    },
  }
];