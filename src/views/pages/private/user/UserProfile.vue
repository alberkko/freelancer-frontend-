<template>
  <div class="flex flex-col items-center">
    <div
      v-if="data_loaded"
      class="flex md:flex-row flex-col md:space-x-8 space-y-8 md:space-y-0 w-10/12 mt-10"
    >
      <!-- left profile -->
      <div class="flex flex-col w-full md:w-3/12">
        <div class="bg-white shadow-lg rounded-lg">
          <div class="px-4 py-5 sm:p-6 mb-0">
            <div class="justify-center">
              <img
                v-if="all_data.base64ProfilePhoto"
                class="profileImage"
                v-bind:src="all_data.base64ProfilePhoto"
                alt
              />
              <img v-else class="profileImage" src="https://i.stack.imgur.com/l60Hf.png" alt />
            </div>
          </div>
          <div class="bottom-0">
            <div class="w-full bg-blue-800 rounded-md rounded-t-none flex justify-between py-3">
              <div class="px-6 py-2 items-left rounded-md rounded-t-none text-white bg-blue-800">
                <div class="flex items-center">
                  <span
                    class="iconify mr-2"
                    data-icon="foundation:at-sign"
                    data-inline="false"
                    style="color: #fff;"
                    data-width="20"
                    data-height="20"
                  ></span>
                  <div class="font-bold text-2xl">{{all_data.userName}}</div>
                </div>
                <div class="flex py-2">
                  <span
                    class="iconify mr-2"
                    data-icon="si-glyph:badge-name"
                    data-inline="false"
                    style="color: #fff;"
                    data-width="20"
                    data-height="20"
                  ></span>
                  {{all_data.firstName}} {{all_data.lastName}}
                </div>

                <div class="flex items-center mb-3 mt-1">
                  <div class="mr-1">
                    <span
                      class="iconify"
                      data-icon="gridicons:location"
                      data-inline="false"
                      style="color: #fff;"
                      data-width="20"
                      data-height="20"
                    ></span>
                  </div>
                  <div class="text-sm text-white">{{all_data.state}}</div>
                </div>
                <div class="flex items-center leading-5 mt-1">
                  <span
                    class="iconify"
                    data-icon="ant-design:star-filled"
                    data-inline="false"
                    style="color: #fff;"
                    data-width="20"
                    data-height="20"
                  ></span>
                  <div class="font-semibold px-1 text-md text-white">{{all_data.reviewScore}}</div>
                  <div class="text-xs">({{review_data.length}} review)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full">
        <div class="space-y-8">
          <!-- HEADLINE SECTION -->
          <div>
            <div
              class="cursor-pointer relative bg-white shadow hover:shadow-lg transition duration-200 ease-in-out rounded-lg"
            >
              <div class="p-6 mb-0">
                <div class="flex justify-between">
                  <span
                    class="text-xl leading-6 font-bold text-gray-900 mb-3"
                  >{{all_data.shortSelfDescription}}</span>
                  <!-- <span>Short Self Description</span> -->
                </div>
                <div>
                  <div class="mt-0 mb-3 max-w-full text-sm leading-5 text-gray-500">
                    <span>{{all_data.longSelfDescription}}</span>
                    <!-- <span>Long Self Description</span> -->
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- SKILLS SECTION -->
          <div>
            <div
              class="cursor-pointer relative bg-white shadow hover:shadow-lg transition duration-200 ease-in-out rounded-lg"
            >
              <div class="px-4 py-5 sm:p-6 mb-0">
                <h3 class="text-xl leading-6 font-bold text-gray-900 mb-3 mt-2">Skills</h3>
                <div class="flex">
                  <div v-for="(skill, key) in userskills" v-bind:key="key">
                    <!-- <ProjectCardSkillsList /> -->
                    <div
                      class="px-5 py-1 mr-2 rounded-full bg-blue-200 text-blue-500 text-xs border-blue-200 border"
                    >{{skill}}</div>
                  </div>
                </div>
                <div v-if="!userskills.length" class="rounded-md bg-blue-50 p-4">
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <svg class="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fill-rule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <div class="ml-3 flex-1 md:flex md:justify-between">
                      <p class="text-sm leading-5 text-blue-700">No skills have been added.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- EXPERIENCES SECTION -->
          <div>
            <div
              class="cursor-pointer relative bg-white shadow hover:shadow-lg transition duration-200 ease-in-out rounded-lg"
            >
              <div class="px-4 py-5 sm:p-6 mb-0">
                <div class="flex justify-between">
                  <h3 class="text-xl leading-6 font-bold text-gray-900 mb-3 mt-2">Experiences</h3>
                </div>
                <div
                  v-for="(xp, key) in all_data.experience"
                  v-bind:key="key"
                  class="mt-0 mb-3 max-w-full text-sm leading-5 text-gray-600"
                >
                  <div class="flex justify-between">
                    <div class="font-bold">{{xp.title}}</div>
                  </div>
                  <div class="py-2">
                    <div class="text-xs text-gray-600">{{xp.institutionName}}</div>
                    <div class="text-xs text-gray-400">{{xp.startTime}} - {{xp.endTime}}</div>
                  </div>
                  <div>{{xp.description}}</div>
                </div>
                <div v-if="!all_data.experience.length" class="rounded-md bg-blue-50 p-4">
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <svg class="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fill-rule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <div class="ml-3 flex-1 md:flex md:justify-between">
                      <p class="text-sm leading-5 text-blue-700">No experiences have been added.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div
              class="cursor-pointer relative bg-white shadow hover:shadow-lg transition duration-200 ease-in-out rounded-lg"
            >
              <div class="px-4 py-5 sm:p-6 mb-0">
                <div class="flex justify-between">
                  <h3 class="text-xl leading-6 font-bold text-gray-900 mb-3 mt-2">Education</h3>
                </div>
                <div
                  v-for="(xp, key) in all_data.education"
                  v-bind:key="key"
                  class="mt-0 mb-0 max-w-full text-sm leading-5 text-gray-600"
                >
                  <div class="flex justify-between">
                    <div class="font-bold">{{xp.degree}}</div>
                  </div>
                  <div class="py-2">
                    <div class="text-xs text-gray-600">{{xp.universityName}}</div>
                    <div class="text-xs text-gray-400">{{xp.startTime}} - {{xp.endTime}}</div>
                  </div>
                </div>
                <div v-if="!all_data.education.length" class="rounded-md bg-blue-50 p-4">
                  <div class="flex">
                    <div class="flex-shrink-0">
                      <svg class="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fill-rule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <div class="ml-3 flex-1 md:flex md:justify-between">
                      <p class="text-sm leading-5 text-blue-700">No experiences have been added.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- LANGUAGES SECTION -->
          <div class="bg-white shadow rounded-lg">
            <div class="px-4 py-5 sm:p-6 mb-0">
              <h3 class="text-xl leading-6 font-bold text-gray-900 mb-3 mt-2">Languages</h3>
              <div class="flex">
                <div
                  v-for="(lang,key) in all_data.languages"
                  v-bind:key="key"
                  class="mt-3 mb-3 max-w-full text-sm leading-5 text-gray-500"
                >
                  <div
                    class="px-5 py-1 rounded-full bg-green-100 mr-2 text-sm text-green-500"
                  >{{lang}}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- REVIEW SECTION -->

          <div class="py-5 mb-0">
            <div class="flex flex-col justify-start mb-3 mt-2">
              <div class="flex align-center justify-between mb-5">
                <div class="flex items-center">
                  <span
                    class="iconify"
                    data-icon="ant-design:star-filled"
                    data-inline="false"
                    style="color: #2b99ff;"
                    data-width="20"
                    data-height="20"
                  ></span>
                  <div class="text-xl ml-3">4.53 (28 Reviews)</div>
                </div>
                <button @click="write_review = !write_review" class="flex">
                  <div
                    class="px-4 bg-green-500 hover:bg-green-600 text-white text-sm rounded py-1"
                  >Write a review</div>
                </button>
              </div>
              <transition name="slide-fade">
                <div v-if="write_review">
                  <div class="flex flex-col shadow-md px-4 pb-10 pt-5 rounded-lg bg-white">
                    <div class="flex items-center flex-row-reverse justify-between">
                      <div class="font-semibold text-gray-700 text-lg">Rating: {{starz}}</div>
                      <vue-stars
                        class="text-3xl rating cursor-pointer"
                        :max="5"
                        v-model="starz"
                        :value="starz"
                      />
                    </div>
                    <textarea
                      v-model="reviewModel.comments"
                      placeholder="Write a few sentences with your rating"
                      class="border text-sm px-2 py-2 mt-4"
                    ></textarea>
                    <div class="flex mt-4">
                      <button
                        @click="publishReview"
                        class="bg-gray-200 hover:bg-gray-400 rounded px-5 py-2 text-gray-700 font-semibold text-sm"
                      >Publish your review</button>
                    </div>
                  </div>
                </div>
              </transition>
              <!-- post card -->
              <!-- REVIEW SECTION -->
              <div class="py-0 mb-0 mt-5">
                <div class="flex flex-col justify-start mb-3 mt-0">
                  <div class="flex mt-0">
                    <div class="flex shadow rounded-lg my-0 w-full bg-white">
                      <div class="items-start px-4 py-6 w-full">
                        <div class="flex justify-between items-center">
                          <div
                            class="mb-5 text-xl leading-6 font-bold text-gray-900 mb-3 mt-2 ml-5"
                          >Latest Reviews</div>
                          <div
                            @click="$router.push({ path: `/profile/user/${all_data.userName}/reviews` })"
                            class="border border-green-400 text-sm px-5 py-1 rounded text-green-500 font-semibold hover:bg-green-400 hover:text-white cursor-pointer"
                          >Read all {{reviewdata.length}} reviews</div>
                        </div>
                        <div class="flex flex-wrap w-full">
                          <div class="lg:w-1/2 md:w-full px-5" v-for="review in reviewdata" :key="review.id">
                            <div class="mb-10">
                              <small
                                class="text-xs text-green-500"
                              >{{ review.dateCreated | moment("from", "now") }}</small>
                              <div class="flex items-center justify-between">
                                <h2
                                  class="font-semibold text-gray-900 -mb-2"
                                >{{review.reviewerUserName}}</h2>
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
        </div>
      </div>
    </div>
    <div class="flex h-screen mb-20 w-full justify-center" v-if="!data_loaded">
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <VueMoment />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { VueStars } from "vue-stars";
import VueMoment from "vue-moment";
export default {
  name: "My Project",
  data() {
    return {
      reviewdata: [],
      starz: 5,
      write_review: false,
      data_loaded: false,
      review_data: [],
      userskills: [],
      all_data: [],
      reviewModel: {
        comments: "",
        ratingValue: 0,
        dateCreated: "",
        reviewerUserName: "",
      },
    };
  },
  components: {
    VueStars,
    VueMoment,
  },
  methods: {
    ...mapActions("profile", ["moduleGetUserProfileByUserName"]),
    ...mapActions("review", ["moduleAddReview", "moduleGetUserReviews"]),

    publishReview() {
      this.reviewModel.ratingValue = this.starz;
      this.reviewModel.reviewerUserName = this.username;
      console.log(this.reviewModel);
      this.moduleAddReview({ reviewModel: this.reviewModel });
      location.reload();
    },
  },
  mounted() {
    this.username = this.$route.params.username;

    console.log(this.username);

    this.moduleGetUserProfileByUserName({ username: this.username }).then(
      (data) => {
        this.all_data = data.data;
        console.log(this.all_data);
        this.data_loaded = true;

        for (let item in this.all_data.skillsModel) {
          this.userskills.push(this.all_data.skillsModel[item].title);
        }
      }
    );

    this.moduleGetUserReviews({ userName: this.username }).then((data) => {
      console.log(this.username);
      this.reviewdata = data.data;
      console.log(this.reviewdata);
    });
  },
};
</script>

<style>
</style>