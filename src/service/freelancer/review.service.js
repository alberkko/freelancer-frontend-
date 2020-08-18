import ApiService from "../api.service";

const ReviewService = {

    async addReview(reviewModel) {
        const requestData = {
            method: 'POST',
            url: "/reviews/add",
            data: {
                ...reviewModel
            }
        }

        return await ApiService.customRequest(requestData);
    },

    async editReview(reviewModel) {
        const requestData = {
            method: 'POST',
            url: "/reviews/edit",
            data: {
                ...reviewModel
            }
        }

        return await ApiService.customRequest(requestData);
    },

    async getMyReviewsRecived() {
        const requestData = {
            method: 'GET',
            url: "/reviews",
        }

        return await ApiService.customRequest(requestData);
    },
    async getReviewsThatIHaveMade() {
        const requestData = {
            method: 'GET',
            url: "/reviews/made",
        }

        return await ApiService.customRequest(requestData);
    },

    async getUserReviews(userName) {
        const requestData = {
            method: 'GET',
            url: "/reviews/" + userName,
        }

        return await ApiService.customRequest(requestData);
    },

    async removeReview(reviewId) {
        const requestData = {
            method: 'POST',
            url: "/reviews/remove/" + reviewId,
        }

        return await ApiService.customRequest(requestData);
    },

}

export default ReviewService;