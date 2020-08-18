import ApiService from "../api.service";

const ExperienceService = {

    async addEducation(educationModel) {
        const requestData = {
            method: 'POST',
            url: "/experience/add/education",
            data: {
                ...educationModel
            }
        }
        return await ApiService.customRequest(requestData);
    },

    async addEmployment(employmentModel) {
        const requestData = {
            method: 'POST',
            url: "/experience/add/employment",
            data: {
                ...employmentModel
            }
        }
        return await ApiService.customRequest(requestData);
    },

    async addOther(otherModel) {
        const requestData = {
            method: 'POST',
            url: "/experience/add/other",
            data: {
                ...otherModel
            }
        }
        return await ApiService.customRequest(requestData);
    },

    async editEducation(experienceModel) {
        const requestData = {
            method: 'POST',
            url: "/experience/edit/education",
            data: {
                ...experienceModel
            }
        }
        return await ApiService.customRequest(requestData);
    },

    async editEmployment(employmentModel) {
        const requestData = {
            method: 'POST',
            url: "/experience/edit/employment",
            data: {
                ...employmentModel
            }
        }
        return await ApiService.customRequest(requestData);
    },

    async removeEducation(educationModel) {
        const requestData = {
            method: 'POST',
            url: "/experience/remove/education",
            data: {
                ...educationModel
            }
        }
        return await ApiService.customRequest(requestData);
    },

    async removeEmployment(employmantModel) {
        const requestData = {
            method: 'POST',
            url: "/experience/remove/employment",
            data: {
                ...employmantModel
            }
        }
        return await ApiService.customRequest(requestData);
    },
}

export default ExperienceService;