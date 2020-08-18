import router from "../../router/index";
import { TokenProvider } from "../../provider/storage/token.storage";
import AuthenticationService from "../../service/auth.service";
import { UserNameProvider } from "../../provider/storage/username.storage";

const state = {
  authenticationError: false,
  accessToken: TokenProvider.getToken(),
  authenticationErrorMessage: "",
};

const getters = {
  loggedIn: (state) => {
    return state.accessToken ? true : false;
  },

  authenticationError: (state) => {
    return state.authenticationError;
  },

  authenticationErrorMessage: (state) => {
    return state.authenticationErrorMessage;
  },
};

const actions = {
  async moduleLogin({ commit }, { username, password }) {
    try {
      await AuthenticationService.login(username, password);

      UserNameProvider.saveUserName(username);
      router.push("/browse-projects");
    } catch (e) {
      commit("loginError", e.message);
    }
  },

  async moduleSignUp({ commit }, { profile }) {
    try {
      await AuthenticationService.signUpFreeLancer(profile);
      router.push("/login");
    } catch (e) {
      commit("");
    }
  },

  moduleLogout() {
    AuthenticationService.logout();
    UserNameProvider.removeUserName();
    router.push("/login");
  },
};

const mutations = {
  loginRequest(state) {
    state.authenticationError = false;
    state.authenticationErrorMessage = "";
  },

  loginSuccess(state, accessToken) {
    state.accessToken = accessToken;
    state.authenticationError = false;
  },

  loginError(state, errorMessage) {
    state.authenticationError = true;
    state.authenticationErrorMessage = errorMessage;
  },

  signUpRequest(state) {
    state.authenticationError = false;
    state.authenticationErrorMessage = "";
  },

  signUpSuccess(state, accessToken) {
    state.accessToken = accessToken;
    state.authenticationError = false;
  },

  signUpError(state, errorMessage) {
    state.authenticationError = true;
    state.authenticationErrorMessage = errorMessage;
  },

  dismisError(state) {
    state.authenticationError = false;
    state.authenticationErrorMessage = "";
  },

  logoutSuccess(state) {
    state.accessToken = "";
  },
};

export const auth = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
