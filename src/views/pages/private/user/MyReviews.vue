<template>
  <div class="h-screen flex flex-col items-center">
    <div class="lg:w-8/12 md:w-11/12 md:mx-10 md:mt-10">
      <transition name="slide-fade">
        <div v-if="write_review">
          <div class="flex flex-col shadow-md px-4 pb-10 pt-5 rounded-lg bg-white mb-5">
            <div class="flex items-center flex-row-reverse justify-between">
              <div class="font-semibold text-gray-700 text-lg">Rating: {{reviewModel.ratingValue}}</div>
              <vue-stars
                class="text-3xl rating cursor-pointer"
                :max="5"
                v-model="reviewModel.ratingValue"
                :value="reviewModel.ratingValue"
              />
            </div>
            <textarea
              v-model="reviewModel.comments"
              placeholder="Write a few sentences with your rating"
              class="border text-sm px-2 py-2 mt-4"
            ></textarea>
            <div class="flex mt-4">
              <button
                @click="publishReview()"
                class="bg-gray-200 hover:bg-gray-400 rounded px-5 py-2 text-gray-700 font-semibold text-sm"
              >Update your review</button>
            </div>
          </div>
        </div>
      </transition>

      <!-- REVIEW SECTION -->
      <div class="py-0 mb-0">
        <div class="flex flex-col justify-start mb-3 mt-0">
          <div class="flex mt-0">
            <div class="flex shadow rounded-lg my-0 w-full bg-white">
              <div class="items-start px-4 py-6 w-full">
                <div class="flex justify-between items-center">
                  <div
                    class="mb-5 text-xl leading-6 font-bold text-gray-900 mb-3 mt-2 ml-5"
                  >Reviews that I have made</div>
                  <div
                    class="mb-5 text-xl leading-6 font-semibold text-gray-900 mb-3 mt-2 ml-5"
                  >{{reviewdata.length}} Reviews</div>
                </div>
                <div class="flex flex-wrap w-full">
                  <div
                    class="lg:w-1/2 md:w-full px-5"
                    v-for="review in reviewdata"
                    :key="review.id"
                  >
                    <div class="mb-10">
                      <div class="flex justify-between">
                        <small
                          class="text-xs text-green-500"
                        >{{ review.dateCreated | moment("from", "now") }}</small>
                      </div>
                      <div class="flex items-center justify-between">
                        <h2 class="font-semibold text-gray-900 -mb-2">{{review.userNameReviewed}}</h2>
                        <div class="flex items-center">
                          <div>
                            <span
                              class="iconify"
                              data-icon="ant-design:star-filled"
                              data-inline="false"
                              style="color: #2b99ff;"
                              data-width="20"
                              data-height="20"
                            ></span>
                          </div>
                          <div v-if="review.ratingValue > 1">
                            <span
                              class="iconify"
                              data-icon="ant-design:star-filled"
                              data-inline="false"
                              style="color: #2b99ff;"
                              data-width="20"
                              data-height="20"
                            ></span>
                          </div>
                          <div v-if="review.ratingValue > 2">
                            <span
                              class="iconify"
                              data-icon="ant-design:star-filled"
                              data-inline="false"
                              style="color: #2b99ff;"
                              data-width="20"
                              data-height="20"
                            ></span>
                          </div>
                          <div v-if="review.ratingValue > 3">
                            <span
                              class="iconify"
                              data-icon="ant-design:star-filled"
                              data-inline="false"
                              style="color: #2b99ff;"
                              data-width="20"
                              data-height="20"
                            ></span>
                          </div>
                          <div v-if="review.ratingValue > 4">
                            <span
                              class="iconify"
                              data-icon="ant-design:star-filled"
                              data-inline="false"
                              style="color: #2b99ff;"
                              data-width="20"
                              data-height="20"
                            ></span>
                          </div>
                          <!-- <div class="text-xl ml-2">{{review.ratingValue}}</div> -->
                        </div>
                      </div>
                      <!-- <p class="mt-3 text-gray-700 text-sm mb-10 incomments">{{review.comments}}</p> -->
                      <read-more
                        class="text-sm text-gray-500 mt-3"
                        more-str="read more"
                        :text="review.comments"
                        link="#"
                        less-str="read less"
                        :max-chars="140"
                      ></read-more>
                      <div class="flex mt-5 mb-5">
                        <div
                          @click="write_review = !write_review, OpenForEdit(review)"
                          class="text-sm border border-green-400 px-2 mb-2 text-green-500 rounded text-gray-500 hover:bg-green-400 hover:text-white cursor-pointer"
                        >Edit this review</div>
                        <div
                          @click="RemoveReview(review)"
                          class="text-sm border border-red-400 px-2 mb-2 ml-2 text-red-500 rounded text-gray-500 hover:bg-red-400 hover:text-white cursor-pointer"
                        >Remove this review</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { VueStars } from "vue-stars";
export default {
  data: () => ({
    write_review: false,
    reviewdata: [],
    username: "",
    reviewModel: {
      comments: "",
      ratingValue: 0,
      dateCreated: "",
      id: "",
      reviewerUserName: "",
      userNameReviewed: "",
      reviewType: null,
    },
  }),
  components: {
    VueStars,
  },
  methods: {
    ...mapActions("review", [
      "moduleGetMyReviews",
      "moduleGetReviewsThatIHaveMade",
      "moduleEditReview",
      "moduleRemoveReview",
    ]),

    OpenForEdit(review) {
      console.log(review);
      this.reviewModel.comments = review.comments;
      this.reviewModel.ratingValue = review.ratingValue;
      this.reviewModel.dateCreated = review.dateCreated;
      this.reviewModel.id = review.id;
      this.reviewModel.reviewerUserName = review.reviewerUserName;
      this.reviewModel.userNameReviewed = review.userNameReviewed;
      this.reviewModel.reviewType = review.reviewType;
    },

    RemoveReview(review) {
      this.moduleRemoveReview({ reviewId: review.id });
      location.reload();
    },

    publishReview() {
      this.moduleEditReview({ reviewModel: this.reviewModel });
      location.reload();
    },
  },
  mounted() {
    this.moduleGetReviewsThatIHaveMade().then((data) => {
      this.reviewdata = data.data;
      console.log(this.reviewdata, "moduleGetReviewsThatIHaveMade");
    });
  },
};
</script>

<style scoped>
.incomments {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
}
</style>