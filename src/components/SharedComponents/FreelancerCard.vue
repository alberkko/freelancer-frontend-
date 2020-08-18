<template>
  <div>
    <div v-if="data_loaded">
      <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        <li
          v-for="freelancer in filtered_data"
          :key="freelancer"
          class="col-span-1 bg-white rounded-lg shadow-md hover:shadow-xl transition ease-in-out duration-150 flex flex-col justify-between"
        >
          <div
            class="w-full flex items-start justify-between px-6 pt-6 space-x-6"
          >
            <div>
              <img
                v-if="freelancer.base64ProfilePhoto"
                class="inline-block h-16 w-16 rounded-full object-cover"
                v-bind:src="freelancer.base64ProfilePhoto"
                alt
              />
              <img
                v-else
                class="inline-block h-16 w-16 rounded-full object-cover"
                src="https://i.stack.imgur.com/l60Hf.png"
                alt
              />
              <div
                @click="
                  $router.push({ path: `/profile/user/${freelancer.userName}` })
                "
                class="flex items-center mt-1 cursor-pointer"
              ></div>
            </div>
            <div class="flex-1 flex flex-col">
              <div class="flex items-center space-x-3">
                <h3
                  class="text-gray-900 cursor-pointer text-md font-bold"
                  @click="
                    $router.push({
                      path: `/profile/user/${freelancer.userName}`,
                    })
                  "
                >
                  {{ freelancer.firstName + " " + freelancer.lastName }}
                </h3>
              </div>
              <div
                class="flex-shrink-0 inline-block text-xs leading-4 font-medium mb-1"
              >
                @{{ freelancer.userName }}
              </div>
              <div class="flex space-x-1">
                <div
                  v-for="(skill, key) in freelancer.skillsModel"
                  v-bind:key="key"
                  class="flex-shrink-0 inline-block px-2 py-0.5 text-teal-800 text-xs leading-4 font-medium bg-teal-100 rounded-full self-start"
                >
                  {{ skill.title }}
                </div>
              </div>
              <div class="mt-1 text-gray-500 text-sm leading-5">
                {{ freelancer.shortSelfDescription }}
              </div>
            </div>
          </div>
          <div class="mt-auto px-6 py-2 flex justify-between">
            <div class="flex items-center leading-5">
              <span
                class="iconify"
                data-icon="ant-design:star-filled"
                data-inline="false"
                style="color: #2b99ff;"
                data-width="18"
                data-height="18"
              ></span>
              <div class="font-semibold px-1 text-sm text-gray-800">
                {{ freelancer.reviewScore }}
              </div>
              <div class="text-xs text-gray-400">(213)</div>
            </div>
            <div class="flex items-center">
              <div class="mr-2">
                <span
                  class="iconify"
                  data-icon="uil:location-point"
                  data-inline="false"
                  style="color: #878787;"
                ></span>
              </div>
              <div class="text-sm text-gray-500">{{ freelancer.state }}</div>
            </div>
          </div>

          <div class="px-3 pb-3">
            <div class="flex space-x-3">
              <div
                class="w-0 flex-1 flex bg-blue-800 hover:bg-blue-700 transition ease-in-out duration-150 rounded-lg"
              >
                <a
                  :href="`/profile/user/${freelancer.userName}`"
                  class="relative w-0 flex-1 inline-flex items-center justify-center py-3 text-sm leading-5 text-white font-bold border border-transparent rounded-br-lg focus:outline-none focus:z-10 transition ease-in-out duration-150"
                >
                  <span
                    class="iconify mr-2 w-5 h-5 text-white"
                    data-icon="ant-design:user-outlined"
                    data-inline="false"
                  ></span>
                  <span class="ml-1">Profile</span>
                </a>
              </div>
              <div
                class="w-0 flex-1 flex bg-green-500 hover:bg-green-400 transition ease-in-out duration-150 rounded-lg"
              >
                <a
                  :href="`/messages/${freelancer.userName}`"
                  class="relative w-0 flex-1 inline-flex items-center justify-center py-3 text-sm leading-5 text-white font-bold border border-transparent rounded-br-lg focus:outline-none focus:z-10 transition ease-in-out duration-150"
                >
                  <span
                    class="iconify mr-2 w-5 h-5 text-white"
                    data-icon="uil-comment-alt-message"
                    data-inline="false"
                  ></span>
                  <span class="ml-1">Get in touch</span>
                </a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div>
      <div
        class="flex h-screen mb-20 w-full justify-center text-gray-500 text-sm"
        v-if="filtered_data.length == 0"
      >
        Sorry, we coudn't find any freelancer.
      </div>
      <div
        v-if="!data_loaded"
        class="flex h-screen mb-20 w-full justify-center"
      >
        <div class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions("profile", ["moduleSearchForFreeLancers"]),
    getAllData() {
      this.moduleSearchForFreeLancers({ searchModel: this.searchModel }).then(
        (data) => {
          console.log(data);
          this.data_loaded = true;
          this.filtered_data = data.data;
        }
      );
    },
  },
  data() {
    return {
      data_loaded: false,
      filtered_data: [],
      searchModel: {
        searchName: null,
        language: null,
        skillsId: [],
        pageModel: { from: 0, to: 25 },
      },
    };
  },
  mounted() {
    this.getAllData();

    this.$root.$on("update_tags", (data) => {
      console.log(data, "update_tags");
      this.searchModel.skillsId = data;
      this.getAllData();
    });

    this.$root.$on("freeLancerSearchTerm", (data) => {
      console.log(data, "freeLancerSearchTerm");
      this.searchModel.searchName = data;
      this.getAllData();
    });

    this.$root.$on("lang_change", (data) => {
      this.searchModel.language = data;
      this.getAllData();
    });
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
