import ApiService from "../api.service";

const ProfileService = {
  async getUserProfile() {
    const requestData = {
      method: "GET",
      url: "/profile",
    };
    return await ApiService.customRequest(requestData);
  },

  async getUserProfileByUserName(userName) {
    const requestData = {
      method: "GET",
      url: "/profile/by/" + userName,
    };
    return await ApiService.customRequest(requestData);
  },

  async searchUserProfileByUserName(userName) {
    const requestData = {
      method: "GET",
      url: "/profile/search/like/" + userName,
    };
    return await ApiService.customRequest(requestData);
  },

  async getAllFreelancers(pageModel) {
    const requestData = {
      method: "POST",
      url: "/profile/all",
      data: {
        ...pageModel,
      },
    };

    return await ApiService.customRequest(requestData);
  },

  async searchForFreelancers(searchModel) {
    const requestData = {
      method: "POST",
      url: "/profile/search",
      data: {
        ...searchModel,
      },
    };

    return await ApiService.customRequest(requestData);
  },

  async updateUserProfile(profileModel) {
    const requestData = {
      method: "POST",
      url: "/profile/update",
      data: {
        ...profileModel,
      },
    };

    return await ApiService.customRequest(requestData);
  },

  async displayToBrowseFreeLancers(displayFreeLancer) {
    const requestData = {
      method: "POST",
      url: "/profile/display/profile?freeLancerToBrowse=" + displayFreeLancer.freeLancerToBrowse,
      data: {
        ...displayFreeLancer,
      },
    };

    return await ApiService.customRequest(requestData);
  },
};

export default ProfileService;