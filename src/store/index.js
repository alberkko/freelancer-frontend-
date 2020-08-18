import Vue from 'vue'
import Vuex from 'vuex'

import {
  auth
} from "./modules/auth.module";

import {
  lang
} from "./modules/lang.module";

import {
  event
} from "./modules/event.module";

import {
  experience
} from "./modules/freelancer/experience.module";

import {
  membership
} from "./modules/freelancer/membership.module";

import {
  profile
} from "./modules/freelancer/profile.module";

import {
  project
} from "./modules/freelancer/project.module";

import {
  projectBid
} from "./modules/freelancer/project-bid.module";

import {
  review
} from "./modules/freelancer/review.module";

import {
  skill
} from "./modules/freelancer/skill.module";

import {
  projectCategory
} from "./modules/freelancer/project-category.module";

import {
  chat
} from "./modules/freelancer/chat.module";

import {
  verify
} from "./modules/freelancer/verify.module";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    lang,
    chat,
    event,
    experience,
    membership,
    profile,
    project,
    projectCategory,
    projectBid,
    review,
    verify,
    skill
  }
})