import ProfileService from "../../../service/freelancer/profile.service";

const actions = {
  async moduleGetUserProfile() {
    return await ProfileService.getUserProfile();
  },

  async moduleGetUserProfileByUserName({
    commit
  }, {
    username
  }) {
    commit("");
    return await ProfileService.getUserProfileByUserName(username);
  },

  async moduleSearchUserProfileByUserName({
    commit
  }, {
    userName
  }) {
    commit("");
    return await ProfileService.searchUserProfileByUserName(userName);
  },

  async moduleUpdateUserProfile({
    commit
  }, {
    profileModel
  }) {
    commit("");
    return await ProfileService.updateUserProfile(profileModel);
  },

  async moduleGetAllFreeLancers({
    commit
  }, {
    pageModel
  }) {
    commit("");
    return await ProfileService.getAllFreelancers(pageModel);
  },

  async moduleSearchForFreeLancers({
    commit
  }, {
    searchModel
  }) {
    commit("");
    return await ProfileService.searchForFreelancers(searchModel);
  },

  async moduleDisplayToBrowseFreeLancers({
    commit
  }, {
    displayFreeLancer
  }) {
    commit("");
    return await ProfileService.displayToBrowseFreeLancers(displayFreeLancer);
  },
};

export const profile = {
  namespaced: true,
  actions,
};