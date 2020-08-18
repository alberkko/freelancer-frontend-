import ReviewService from "../../../service/freelancer/review.service"

const actions = {
    async moduleAddReview({
        commit
    }, {
        reviewModel
    }) {
        commit('')
        return await ReviewService.addReview(reviewModel)
    },

    async moduleEditReview({
        commit
    }, {
        reviewModel
    }) {
        commit('')
        return await ReviewService.editReview(reviewModel)
    },

    async moduleGetMyReviews() {
        return await ReviewService.getMyReviewsRecived()
    },

    async moduleGetReviewsThatIHaveMade() {
        return await ReviewService.getReviewsThatIHaveMade()
    },

    async moduleGetUserReviews({
        commit
    }, {
        userName
    }) {
        commit('')
        return await ReviewService.getUserReviews(userName)
    },

    async moduleRemoveReview({
        commit
    }, {
        reviewId
    }) {
        commit('')
        console.log(reviewId);
        return await ReviewService.removeReview(reviewId)
    },
}

export const review = {
    namespaced: true,
    actions
}