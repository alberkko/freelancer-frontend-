<template>
  <div class="h-screen">
    <div class="bg-blue-800">
      <div
        class="flex flex-col max-w-screen-sxl mx-auto py-4 sm:py-8 px-4 sm:px-6 lg:py-16 lg:px-8"
      >
        <h2
          class="text-4xl font-bold tracking-tight sm:leading-10 text-white sm:text-5xl"
        >Freelancers</h2>
        <h3
          class="text-2xl sm:text-3xl font-light leading-9 tracking-tight text-white sm:leading-10"
        >For freelancers and successful projects</h3>
        <div
          class="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 row-gap-4 md:col-gap-8 md:row-gap-10"
        >
          <div
            v-for="freelancer in freelancers"
            :key="freelancer.username"
            class="h-full flex flex-col justify-between bg-white shadow-md sm:rounded-lg"
          >
            <div class="flex flex-col justify-between h-full px-4 py-5 sm:p-6">
              <div class="flex justify-around items-center mb-4">
                <div
                  class="h-12 w-12 rounded-full flex items-center justify-center border border-gray-200 hover:bg-gray-100"
                >
                  <span
                    class="iconify text-gray-400"
                    data-icon="uil:comment-alt-message"
                    data-inline="false"
                  ></span>
                </div>
                <div>
                  <img
                    v-if="freelancer.base64ProfilePhoto"
                    class="inline-block h-32 w-32 rounded-full object-cover"
                    v-bind:src="freelancer.base64ProfilePhoto"
                    alt
                  />
                  <img
                    v-else
                    class="inline-block h-32 w-32 rounded-full object-cover"
                    src="https://i.stack.imgur.com/l60Hf.png"
                    alt
                  />
                </div>
                <div
                  class="h-12 w-12 rounded-full flex items-center justify-center border border-gray-200 hover:bg-gray-100"
                >
                  <span
                    class="iconify text-gray-400 w-5 h-5"
                    data-icon="uil:star"
                    data-inline="false"
                  ></span>
                </div>
              </div>
              <div class="flex flex-col items-center">
                <h3
                  class="text-lg leading-6 font-bold text-gray-700 mb-1 align-center"
                >{{freelancer.firstName}} {{freelancer.lastName}}</h3>
                <div class="text-md text-gray-600 mb-3">@{{freelancer.userName}}</div>
                <div class="mt-0 mb-4 max-w-xl text-sm leading-5 text-gray-500 text-justify">
                  <p>{{freelancer.shortSelfDescription}}.</p>
                </div>
              </div>
              <ProjectCardSkillsList />
              <div class="flex items-center mb-3 mt-1">
                <div class="mr-2">
                  <span
                    class="iconify"
                    data-icon="uil:location-point"
                    data-inline="false"
                    style="color: #878787;"
                  ></span>
                </div>
                <div class="text-sm text-gray-500">{{freelancer.state}}</div>
              </div>
              <UserRatingOnFreelancer />
            </div>
            <div>
              <div class="w-full bg-blue-800 rounded-md rounded-t-none flex justify-between h-16">
                <button
                  type="button"
                  class="flex items-center pl-6 rounded-md rounded-t-none rounded-r-none bg-blue-700 w-8/12"
                >
                  <div class="flex items-baseline">
                    <span class="font-bold text-2xl text-white sm:text-2xl sm:leading-5">$25</span>
                    <span class="text-sm text-white ml-1">USD</span>
                    <span class="text-xs text-white ml-1">/ per hour</span>
                  </div>
                </button>
                <button
                  type="button"
                  class="px-4 py-2 text-sm rounded-md rounded-t-none rounded-l-none text-white bg-green-500 w-4/12"
                >Hire me!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCardSkillsList from "@/components/SharedComponents/ProjectCardSkillsList";
import UserRatingOnFreelancer from "@/components/SharedComponents/UserRatingOnFreelancer";
import { mapActions } from "vuex";
export default {
  components: {
    ProjectCardSkillsList,
    UserRatingOnFreelancer,
  },
  data() {
    return {
      freelancers: [],
    };
  },
  methods: {
    ...mapActions("profile", ["moduleGetAllFreeLancers"]),
    getFreeLancerData() {
      var pageModel = { from: 0, to: 25 };
      this.moduleGetAllFreeLancers({ pageModel })
        .then((data) => {
          this.freelancers = data.data;
          console.log(this.freelancers)
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getFreeLancerData();
  },
};
</script>

<style>
.bids-top-text {
  font-size: 0.6em !important;
}

.bids-top-text-edit {
  font-size: 0.8em !important;
}
</style>
