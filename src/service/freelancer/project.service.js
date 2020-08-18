import ApiService from "../api.service";

const ProjectService = {

    async getPastActiveProjects() {
        const requestData = {
            method: 'GET',
            url: "/project/active-past",
        }

        return await ApiService.customRequest(requestData);
    },

    async addEmployerProject(projectModel) {
        const requestData = {
            method: 'POST',
            url: "/project/add/employer",
            data: {
                ...projectModel
            }
        }

        return await ApiService.customRequest(requestData);
    },

    async searchProject(searchModel) {
        const requestData = {
            method: 'POST',
            url: "/project/search",
            data: {
                ...searchModel
            }
        }

        return await ApiService.customRequest(requestData);
    },

    async addFreeLancerProject(freeLancerProjectModel) {
        const requestData = {
            method: 'POST',
            url: "/project/add/freelancer",
            data: {
                ...freeLancerProjectModel
            }
        }

        // console.log(projectModel);
        return await ApiService.customRequest(requestData);
    },

    async updateFreeLancerProject(freeLancerProjectModel) {
        const requestData = {
            method: 'POST',
            url: "/project/edit",
            data: {
                ...freeLancerProjectModel
            }
        }
        return await ApiService.customRequest(requestData);
    },

    async deleteFreeLancerProject(projectId) {
        const requestData = {
            method: 'POST',
            url: "/project/delete/" + projectId
        }

        return await ApiService.customRequest(requestData);
    },

    async allFreeLancerProject() {
        const requestData = {
            method: 'GET',
            url: "/project/all/freelancer",
        }

        return await ApiService.customRequest(requestData)
    },

    async allEmployerProject() {
        const requestData = {
            method: 'GET',
            url: "/project/all/employer"
        }

        return await ApiService.customRequest(requestData);
    },

    async allPublicProject(pageModel) {
        const requestData = {
            method: 'POST',
            url: "/project/all/public",
            data: {
                ...pageModel
            }
        }

        return await ApiService.customRequest(requestData);
    },

    async getProjectById(projectId) {
        const requestData = {
            method: 'GET',
            url: "/project/byId/" + projectId
        }

        return await ApiService.customRequest(requestData);
    },

    async changeProjectStatus(projectStatusModel) {
        const requestData = {
            method: 'POST',
            url: "/project/change/status",
            data: {
                ...projectStatusModel
            }
        }

        return await ApiService.customRequest(requestData);
    },

    async getAllPublicProjectOfEmployer() {
        const requestData = {
            method: 'GET',
            url: "/project/public/employer"
        }

        return await ApiService.customRequest(requestData);
    },
    async getAllPublicProjectOfFreeLancer() {
        const requestData = {
            method: 'GET',
            url: "/project/public/freelancer"
        }

        return await ApiService.customRequest(requestData);
    },

    async filterPublicProject(filterModel) {
        const requestData = {
            method: 'POST',
            url: "/project/public/filter",
            data: {
                ...filterModel
            }
        }

        return await ApiService.customRequest(requestData);
    },

    async filterUserProject(filterModel) {
        const requestData = {
            method: 'POST',
            url: "/project/user/filter",
            data: {
                ...filterModel
            }
        }

        return await ApiService.customRequest(requestData);
    },

}

export default ProjectService;