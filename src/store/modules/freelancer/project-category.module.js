import ProjectCategoryService from "../../../service/freelancer/project-category.service"

const actions = {

    async moduleEditProjectCategory({
        commit
    }, {
        projectCategoryModel
    }) {
        commit("")
        return await ProjectCategoryService.editProjectCategory(projectCategoryModel)
    },

    async moduleAddProjectCategory({
        commit
    }, {
        projectCategoryModel
    }) {
        commit("")
        return await ProjectCategoryService.addProjectCategory(projectCategoryModel)
    },

    async moduleAllProjectCategory() {
        return await ProjectCategoryService.allProjectCategory()
    },

    async moduleRemoveProjectCategory({
        commit
    }, {
        projectCategoryModel
    }) {
        commit("")
        return await ProjectCategoryService.removeProjectCategory(projectCategoryModel)
    },
}

export const projectCategory = {
    namespaced: true,
    actions
}