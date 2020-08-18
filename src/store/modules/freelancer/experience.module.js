import ExperienceService from "../../../service/freelancer/experience.service";

// todo make validation

const actions = {
  async moduleAddEducation({
    commit
  }, {
    educationModel
  }) {
    console.log(educationModel);
    commit('')
    return await ExperienceService.addEducation(educationModel);
  },

  async moduleAddEmployment({
    commit
  }, {
    employmentModel
  }) {
    commit('')
    return await ExperienceService.addEmployment(employmentModel);
  },

  async moduleEditEducation({
    commit
  }, {
    educationModel
  }) {
    commit('')
    return await ExperienceService.editEducation(educationModel);
  },

  async moduleEditEmployment({
    commit
  }, {
    employmentModel
  }) {
    commit('')
    return await ExperienceService.editEmployment(employmentModel);
  },


  async moduleAddOther({
    commit
  }, {
    otherModel
  }) {
    commit('')
    return await ExperienceService.addOther(otherModel);
  },

  async moduleRemoveEducation({
    commit
  }, {
    educationModel
  }) {

    commit('')
    return await ExperienceService.removeEducation(educationModel);
  },

  async moduleRemoveEmployment({
    commit
  }, {
    experienceModel
  }) {

    commit('')
    return await ExperienceService.removeEmployment(experienceModel);
  },
};

export const experience = {
  namespaced: true,
  actions,
};