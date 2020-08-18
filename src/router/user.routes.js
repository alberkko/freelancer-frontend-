// import Browse from "../views/pages/private/user/Browse.vue";
import Messages from "../views/pages/private/user/Messages.vue";
import Profile from "../views/pages/private/user/Profile.vue";
import UserProfile from "../views/pages/private/user/UserProfile.vue";
import Dashboard from "../views/pages/private/user/Dashboard.vue";
import MyProjects from "../views/pages/private/user/MyProjects.vue";
import MyBids from "../views/pages/private/user/MyBids.vue";
import EmployerProjects from "../views/pages/private/user/EmployerProjects.vue";
import FreelancerProjects from "../views/pages/private/user/FreelancerProjects.vue";
import ProjectDetails from "../views/pages/private/user/ProjectDetails.vue";
import PostProject from "../views/pages/private/user/PostProject.vue";
import EditProject from "../views/pages/private/user/EditProject.vue";
import EditBid from "../views/pages/private/user/EditBid.vue";
import RegisterFollowUpUserType from "../views/pages/private/user/RegisterFollowUpUserType.vue";
import RegisterFollowUpSkills from "../views/pages/private/user/RegisterFollowUpSkills.vue";
import RegisterFollowUpExperience from "../views/pages/private/user/RegisterFollowUpExperience.vue";
import RegisterFollowUpEducation from "../views/pages/private/user/RegisterFollowUpEducation.vue";
import RegisterFollowUpLanguage from "../views/pages/private/user/RegisterFollowUpLanguage.vue";
import RegisterFollowUpMembership from "../views/pages/private/user/RegisterFollowUpMembership.vue";
import RegisterFollowUpAboutMe from "../views/pages/private/user/RegisterFollowUpAboutMe.vue";
import RegisterFollowUpEmailVerification from "../views/pages/private/user/RegisterFollowUpEmailVerification.vue";
import RegisterFollowUpEmailVerificationSuccess from "../views/pages/private/user/RegisterFollowUpEmailVerificationSuccess.vue";
import RegisterFollowUpEmailPaymentMethod from "../views/pages/private/user/RegisterFollowUpPaymentMethod.vue";
import UserReviews from "../views/pages/private/user/UserReviews.vue";
import MyReviews from "../views/pages/private/user/MyReviews.vue";

export default [
  {
    path: "/browse-projects",
    name: "Employer Browse",
    component: EmployerProjects,
    meta: {
      public: false,
    },
  },

  {
    path: "/browse-freelancers",
    name: "Freelancer Browse",
    component: FreelancerProjects,
    meta: {
      public: false,
    },
  },

  {
    path: "/messages/:username",
    name: "Messages",
    component: Messages,
    isTopHeader: true,
    meta: {
      public: false,
    },
  },
  {
    path: "/project-details/:id",
    name: "ProjectDetails",
    component: ProjectDetails,
    isTopHeader: false,
    meta: {
      public: false,
    },
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    isTopHeader: true,
    meta: {
      public: false,
    },
  },
  {
    path: "/profile/user/:username",
    name: "User Profile",
    component: UserProfile,
    isTopHeader: true,
    meta: {
      public: false,
    },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    isTopHeader: false,
    meta: {
      public: false,
    },
  },

  {
    path: "/my-projects",
    name: "My Projects",
    component: MyProjects,
    isTopHeader: false,
    meta: {
      public: false,
    },
  },

  {
    path: "/my-bids",
    name: "My Projects",
    component: MyBids,
    isTopHeader: false,
    meta: {
      public: false,
    },
  },

  {
    path: "/post-project",
    name: "Post a Project",
    component: PostProject,
    isTopHeader: false,
    meta: {
      public: false,
    },
  },
  {
    path: "/edit-project/:id",
    name: "Edit Project",
    component: EditProject,
    isTopHeader: false,
    meta: {
      public: false,
    },
  },

  {
    path: "/edit-bid/:id",
    name: "Edit Bid",
    component: EditBid,
    isTopHeader: false,
    meta: {
      public: false,
    },
  },

  {
    path: "/register/new/usertype",
    name: "Register Follow Up User Type",
    component: RegisterFollowUpUserType,
    isTopHeader: false,
    meta: {
      public: false,
    },
  },

  {
    path: "/register/new/skills",
    name: "Register Follow Up Skills",
    component: RegisterFollowUpSkills,
    isTopHeader: false,
    meta: {
      public: false,
    },
  },

  {
    path: "/register/new/experience",
    name: "Register Follow Up Experience",
    component: RegisterFollowUpExperience,
    isTopHeader: false,
    meta: {
      public: false,
    },
  },

  {
    path: "/register/new/education",
    name: "Register Follow Up Education",
    component: RegisterFollowUpEducation,
    isTopHeader: false,
    meta: {
      public: false,
    },
  },

  {
    path: "/register/new/languages",
    name: "Register Follow Up Language",
    component: RegisterFollowUpLanguage,
    isTopHeader: false,
    meta: {
      public: false,
    },
  },

  {
    path: "/register/new/about-me",
    name: "Register Follow Up About Me",
    component: RegisterFollowUpAboutMe,
    isTopHeader: false,
    meta: {
      public: false,
    },
  },

  {
    path: "/register/new/membership",
    name: "Register Follow Up Membership",
    component: RegisterFollowUpMembership,
    isTopHeader: false,
    meta: {
      public: false,
    },
  },

  {
    path: "/register/new/verify",
    name: "Register Follow Up Email Verification",
    component: RegisterFollowUpEmailVerification,
    isTopHeader: false,
    meta: {
      public: false,
    },
  },
  {
    path: "/register/new/verify/success",
    name: "Register Follow Up Email Verification Success",
    component: RegisterFollowUpEmailVerificationSuccess,
    isTopHeader: false,
    meta: {
      public: false,
    },
  },

  {
    path: "/register/new/payment",
    name: "Register Follow Up Payment Method",
    component: RegisterFollowUpEmailPaymentMethod,
    isTopHeader: false,
    meta: {
      public: false,
    },
  },

  {
    path: "/profile/user/:username/reviews",
    name: "User Reviews",
    component: UserReviews,
    isTopHeader: false,
    meta: {
      public: false,
    },
  },

  {
    path: "/my-reviews",
    name: "My Reviews",
    component: MyReviews,
    isTopHeader: false,
    meta: {
      public: false,
    },
  },
];
