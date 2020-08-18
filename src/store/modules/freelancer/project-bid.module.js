import ProjectBidService from "../../../service/freelancer/project-bid.service"

const actions = {
    async moduleAddProjectBid({
        commit
    }, {
        bidModel
    }) {
        commit('')
        return await ProjectBidService.addProjectBid(bidModel)
    },

    async moduleAddProjectFeaturedBid({
        commit
    }, {
        bidModel
    }) {
        commit('')
        return await ProjectBidService.addProjectFeaturedBid(bidModel)
    },

    async moduleAllMyBidsPastActive({
        commit
    }, {
        pageModel
    }) {
        commit('')
        return await ProjectBidService.moduleAllMyBidsPastActive(pageModel)
    },

    async moduleEditProjectBid({
        commit
    }, {
        bidModel
    }) {
        commit('')
        return await ProjectBidService.editProjectBid(bidModel)
    },

    async moduleRemoveProjectBid({
        commit
    }, {
        bidModel
    }) {
        commit('')
        return await ProjectBidService.removeProjectBid(bidModel)
    },
}

export const projectBid = {
    namespaced: true,
    actions
}