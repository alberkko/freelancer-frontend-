import ProjectService from "../../../service/freelancer/project.service"

const actions = {
    async moduleGetPastActiveProjects() {  
        return await ProjectService.getPastActiveProjects()
    },

    async moduleAddEmployerProject({
        commit
    }, {
        projectModel
    }) {
        commit("")
        return await ProjectService.addEmployerProject(projectModel)
    },

    async moduleSearchProject({
        commit
    }, {
        searchModel
    }) {
        commit("")
        return await ProjectService.searchProject(searchModel)
    },

    async moduleAddFreeLancerProject({
        commit
    }, {
        projectModel
    }) {
        commit("")

        return await ProjectService.addFreeLancerProject(projectModel)
    },

    async moduleUpdateFreeLancerProject({
        commit
    }, {
        projectModel
    }) {
        commit("")

        return await ProjectService.updateFreeLancerProject(projectModel)
    },

    async moduleDeleteFreeLancerProject({
        commit
    }, {
        projectId
    }) {
        commit("")
        return await ProjectService.deleteFreeLancerProject(projectId)
    },

    async moduleAllEmployerProject() {
        return await ProjectService.allEmployerProject()
    },

    async moduleAllFreeLancerProject() {
        return await ProjectService.allFreeLancerProject();
    },

    async moduleAllPublicProject({
        commit
    }, {
        pageModel
    }) {
        commit("")
        return await ProjectService.allPublicProject(pageModel)
    },

    async moduleChangeProjectStatus({
        commit
    }, {
        projectStatusModel
    }) {
        commit("")
        return await ProjectService.changeProjectStatus(projectStatusModel)
    },

    async moduleFilterPublicProject({
        filterModel
    }) {
        return await ProjectService.filterPublicProject(filterModel)
    },

    async moduleFilterUserProject({
        commit
    }, {
        filterModel
    }) {
        commit("")
        return await ProjectService.filterUserProject(filterModel)
    },

    async moduleGetAllPublicProjectOfEmployer() {
        return await ProjectService.getAllPublicProjectOfEmployer()
    },

    async moduleGetAllPublicProjectOfFreeLancer() {
        return await ProjectService.getAllPublicProjectOfFreeLancer()
    },

    async moduleGetProjectById({
        commit
    }, {
        projectId
    }) {
        commit("")
        return await ProjectService.getProjectById(projectId)
    },
}

export const project = {
    namespaced: true,
    actions
}