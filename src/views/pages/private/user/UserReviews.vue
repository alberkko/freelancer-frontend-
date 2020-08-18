<template>
  <div class="h-screen flex flex-col items-center">
    <div class="lg:w-8/12 md:w-11/12 md:mx-10 md:mt-10">
      <!-- REVIEW SECTION -->
      <div class="py-0 mb-0">
        <div class="flex flex-col justify-start mb-3 mt-0">
          <div class="flex mt-0">
            <div class="flex shadow rounded-lg my-0 w-full bg-white">
              <div class="items-start px-4 py-6 w-full">
                <div class="flex justify-between items-center">
                  <div
                    class="mb-5 text-xl leading-6 font-bold text-gray-900 mb-3 mt-2 ml-5"
                  >All Reviews</div>
                  <div
                    class="mb-5 text-xl leading-6 font-semibold text-gray-900 mb-3 mt-2 ml-5"
                  >{{reviewdata.length}} Reviews</div>
                </div>
                <div class="flex flex-wrap w-full">
                  <div class="lg:w-1/2 md:w-full px-5" v-for="review in reviewdata" :key="review.id">
                    <div class="mb-10">
                      <small
                        class="text-xs text-green-500"
                      >{{ review.dateCreated | moment("from", "now") }}</small>
                      <div class="flex items-center justify-between">
                        <h2 class="font-semibold text-gray-900 -mb-2">{{review.reviewerUserName}}</h2>
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
export default {
  data: () => ({
    reviewdata: [],
    username:"",
  }),
  methods: {
    ...mapActions("review", ["moduleAddReview", "moduleGetUserReviews"]),
  },
  mounted() {
    this.username = this.$route.params.username;


    this.moduleGetUserReviews({ userName: this.username }).then((data) => {
      this.reviewdata = data.data;
      }
    );

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