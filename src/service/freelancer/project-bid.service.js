import ApiService from "../api.service";

const ProjectBidService = {

    async addProjectBid(bidModel) {
        const requestData = {
            method: 'POST',
            url: "/project/bids/add",
            data: {
                ...bidModel
            }
        }
        return await ApiService.customRequest(requestData);
    },

    async addProjectFeaturedBid(bidModel) {
        const requestData = {
            method: 'POST',
            url: "/project/bids/add/featured",
            data: {
                ...bidModel
            }
        }
        return await ApiService.customRequest(requestData);
    },

    async moduleAllMyBidsPastActive(pageModel) {
        const requestData = {
            method: 'POST',
            url: "/project/bids",
            data: {
                ...pageModel
            }
        }

        return await ApiService.customRequest(requestData);
    },

    async editProjectBid(projectBidModel) {
        const requestData = {
            method: 'POST',
            url: "/project/bids/edit",
            data: {
                ...projectBidModel
            }
        }
        return await ApiService.customRequest(requestData);
    },

    async removeProjectBid(projectBidModel) {
        const requestData = {
            method: 'POST',
            url: "/project/bids/remove",
            data: {
                ...projectBidModel
            }
        }
        return await ApiService.customRequest(requestData);
    },

}

export default ProjectBidService;