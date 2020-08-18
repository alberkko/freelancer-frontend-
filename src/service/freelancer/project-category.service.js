import ApiService from "../api.service";

const ProjectCategoryService = {

    async addProjectCategory(projectCategoryModel) {
        const requestData = {
            method: 'POST',
            url: "/category/add",
            data: {
                ...projectCategoryModel
            }
        }
        
        return await ApiService.customRequest(requestData);
    },

    async editProjectCategory(projectCategoryModel) {
        const requestData = {
            method: 'POST',
            url: "/category/edit",
            data: {
                ...projectCategoryModel
            }
        }
        
        return await ApiService.customRequest(requestData);
    },

    async removeProjectCategory(projectCategoryModel) {
        const requestData = {
            method: 'POST',
            url: "/category/remove",
            data: {
                ...projectCategoryModel
            }
        }
        
        return await ApiService.customRequest(requestData);
    },

    async allProjectCategory() {
        const requestData = {
            method: 'GET',
            url: "/category/all"
        }
        
        return await ApiService.customRequest(requestData);
    },

}

export default ProjectCategoryService;