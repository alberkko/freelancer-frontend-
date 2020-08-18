<template>
  <div>
    <div
      v-if="data_loaded"
      class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 row-gap-4 md:col-gap-8 md:row-gap-10"
    >
      <div v-for="(item, key) in all_data" v-bind:key="key">
        <div class="h-full flex flex-col justify-between bg-white shadow-md sm:rounded-lg">
          <div class="flex flex-col justify-between h-full px-4 py-5 sm:p-6">
            <div>
              <p class="text-xs leading-6 font-medium text-gray-400">
                {{ item.recordCreated | moment("from", "now") }}
                <span class="font-bold px-1">•</span>
                <span class="font-bold text-green-500">
                  <span>Ends {{ item.endDate | moment("from", "now") }}</span>
                </span>
              </p>
              <h3
                @click="$router.push({ path: `/project-details/${item.id}` })"
                class="text-lg leading-6 font-bold text-gray-900 mb-3 cursor-pointer"
              >{{item.title}}</h3>

              <!-- USER CARD SKILL LIST COMPONENT -->

              <div>
                <div class="flex flex-col w-full">
                  <div class="h-0 flex-1 flex flex-col">
                    <div class="pr-3 pb-3">
                      <div class="flex flex-wrap">
                        <div
                          v-for="(skill, key) in item.skillsModel"
                          v-bind:key="key"
                          class="flex items-center my-1 mr-1 font-medium py-1 px-2 bg-white rounded-full text-blue-400 bg-blue-100"
                        >
                          <div
                            class="text-xs font-normal leading-none max-w-full flex-initial"
                          >{{skill.title}}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- USER CARD SKILL LIST COMPONENT-->

              <div class="mt-0 mb-10 max-w-xl text-sm leading-5 text-gray-500 break-word text">
                <p>{{item.shortDescription}}</p>
              </div>
            </div>
            <div>
              <div class="flex">
                <div
                  @click="$router.push({ path: `/profile/user/${item.UserData.userName}` })"
                  class="mr-2 cursor-pointer"
                >
                  <img
                    v-if="item && item.UserData && item.UserData.base64ProfilePhoto"
                    class="inline-block h-12 w-12 rounded-full object-cover"
                    v-bind:src="item && item.UserData && item.UserData.base64ProfilePhoto"
                    alt
                  />
                  <img
                    v-else
                    class="inline-block h-12 w-12 rounded-full object-cover"
                    src="https://i.stack.imgur.com/l60Hf.png"
                    alt
                  />
                </div>
                <div class="flex flex-col">
                  <div class="text-sm leading-5 text-gray-500">
                    <p
                      @click="$router.push({ path: `/profile/user/${item.UserData.userName}` })"
                      class="cursor-pointer"
                      v-if="!data_loaded"
                    >{{item.UserData.userName}}</p>
                  </div>
                  <div
                    @click="$router.push({ path: `/profile/user/${item.UserData.userName}` })"
                    class="flex items-center mt-1 cursor-pointer"
                  >
                    <div class="flex items-center leading-5">
                      <span
                        class="iconify"
                        data-icon="ant-design:star-filled"
                        data-inline="false"
                        style="color: #2b99ff;"
                        data-width="18"
                        data-height="18"
                      ></span>
                      <div class="font-semibold px-1 text-sm text-gray-800">4.5</div>
                      <div class="text-xs text-gray-400"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- USER CARD RATING -->
          </div>
          <div>
            <div
              @click="$router.push({ path: `/project-details/${item.id}` })"
              class="w-full bg-blue-800 rounded-md rounded-t-none flex justify-between h-16"
            >
              <button
                type="button"
                class="justify-center rounded-md rounded-t-none rounded-r-none bg-blue-700 w-8/12"
              >
                <span
                  class="font-bold text-lg text-white sm:leading-5 text-left"
                >{{item.budgetFrom}}.00 - {{item.budgetTo}}.00</span>
                <span class="text-xs text-white font-bold ml-1">{{item.currencyId}}</span>
              </button>
              <button
                type="button"
                class="uppercase font-bold px-4 py-2 text-sm rounded-md rounded-t-none rounded-l-none text-white bg-blue-800 w-4/12"
              >Apply</button>
            </div>
          </div>
          <VueMoment />
        </div>
      </div>
    </div>
    <div>
      <div
        class="flex h-64 mb-20 w-full justify-center items-center text-gray-500 text-sm rounded-lg bg-white shadow-lg"
        v-if="all_data.length == 0"
      >Sorry, we coudn't find any projects.</div>
      <div v-if="!data_loaded" class="flex h-64 mb-20 w-full justify-center">
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
import VueMoment from "vue-moment";
export default {
  data: () => ({
    all_data: [],
    no_data: false,
    all: [],
    data_loaded: false,
    user_data: [],
    skills_arr: [],
    filtered_data: [],
    counter: 0,
    filtered_data_sorted: [],
    days_left: "",
    days_ago: "",
    sort_lastest: false,
    sort_oldest: false,
    searchModel: {
      titleOrDescription: null,
      categoryId: null,
      language: null,
      sort: "NEWS_FIRST",
      fromBudget: null,
      toBudget: null,
      skillIds: [],
      pageModel: { from: 0, to: 25 },
    },
  }),
  components: {
    VueMoment,
  },
  methods: {
    ...mapActions("project", ["moduleSearchProject"]),
    ...mapActions("profile", ["moduleGetUserProfileByUserName"]),

    getAllData() {
      this.moduleSearchProject({
        searchModel: this.searchModel,
      }).then((data) => {
        this.all_data = data.data;
        this.data_loaded = true;
        console.log(this.all_data);

        var count = [];

        for (let i = 0; i < this.all_data.length; i++) {
          this.moduleGetUserProfileByUserName({
            username: this.all_data[i].userCreated,
          }).then((data) => {
            let user_data = data.data;
            this.all_data[i].UserData = user_data;

            count.push(i);
          });
        }
      });
    },
    listenForEvents() {
      this.$root.$on("projectTitleSearched", (data) => {
        this.searchModel.titleOrDescription = data;
        this.getAllData();
      });

      this.$root.$on("priceChange", (data) => {
        this.searchModel.fromBudget = data[0];
        this.searchModel.toBudget = data[1];
        this.getAllData();
      });

      this.$root.$on("sortBy", (data) => {
        this.searchModel.sort = data;
        this.getAllData();
      });

      this.$root.$on("update_tags", (data) => {
        this.searchModel.skillIds = data;
        this.getAllData();
      });

      this.$root.$on("category_id", (data) => {
        this.searchModel.categoryId = data;
        this.getAllData();
      });

      this.$root.$on("lang_change", (data) => {
        this.searchModel.language = data;
        this.getAllData();
      });
    },
  },
  mounted() {
    //get all project data
    window.scrollTo({ top: 0 });
    // this.getAllData();
    this.listenForEvents();
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

.text {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 8; /* number of lines to show */
  -webkit-box-orient: vertical;
}

.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #0046aa;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #0046aa transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>