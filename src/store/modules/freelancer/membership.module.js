import MembershipService from "../../../service/freelancer/membership.service";

// todo make validation
const actions = {

  async moduleAddEducation({
    commit
  }, {
    educationModel
  }) {
    commit('')
    return await MembershipService.addEducation(educationModel);
  },

  async moduleEditExperience({
    commit
  }, {
    experienceModel
  }) {
    commit('')
    return await MembershipService.editExperience(experienceModel);
  },

  async moduleAddEmployment({
    commit
  }, {
    employmantModel
  }) {
    commit('')
    return await MembershipService.addEmployment(employmantModel);
  },

  async moduleAddOther({
    commit
  }, {
    otherModel
  }) {
    commit('')
    return await MembershipService.addOther(otherModel);
  },

  async moduleRemoveExperience({
    commit
  }, {
    experienceModel
  }) {
    commit('')
    return await MembershipService.removeExperience(experienceModel);
  },
};

export const membership = {
  namespaced: true,
  actions,
};