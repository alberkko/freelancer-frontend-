<template>
  <div class="">
    <div class="mb-64 p-2">
      <ChipsFilter />
      <div
        v-if="data_loaded"
        class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 row-gap-4 md:col-gap-8 md:row-gap-10"
      >
        <div
          v-for="project in filtered_data_sorted"
          :key="project.title"
          class="h-full"
        >
          <div class="h-full flex flex-col bg-white shadow rounded-lg relative">
            <div class="flex right-0 absolute p-6">
              <button
                @click="$router.push({ path: `/edit-project/${project.id}` })"
              >
                <span
                  class="iconify h-6 w-6 text-gray-400"
                  data-icon="feather:edit"
                  data-inline="false"
                ></span>
              </button>
            </div>
            <div class="flex flex-col justify-between h-full">
              <div class="px-4 py-5 sm:p-6">
                <p class="text-xs leading-6 font-medium text-gray-400">
                  {{ project.recordCreated | moment("from", "now") }}
                  <span class="font-bold px-1">•</span>
                  <span class="font-bold text-green-500">
                    <span
                      >Ends {{ project.endDate | moment("from", "now") }}</span
                    >
                  </span>
                </p>
                <router-link
                  :to="{
                    name: 'ProjectDetails',
                    params: { id: project.id },
                  }"
                >
                  <h3
                    class="cursor-pointer text-lg leading-6 font-bold text-gray-900 mb-3"
                  >
                    {{ project.title }}
                  </h3>
                </router-link>
                <div>
                  <div class="flex flex-col w-full">
                    <div class="h-0 flex-1 flex flex-col">
                      <div class="pr-3 pb-3">
                        <div class="flex flex-wrap">
                          <div
                            v-for="(skill, key) in project.skillsModel"
                            v-bind:key="key"
                            class="flex items-center my-1 mr-1 font-medium py-1 px-2 bg-white rounded-full text-blue-400 bg-blue-100"
                          >
                            <div
                              class="text-xs font-normal leading-none max-w-full flex-initial"
                            >
                              {{ skill.title }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="mt-0 mb-0 max-w-xl text-sm leading-5 text-gray-500 break-word text"
                >
                  {{ project.shortDescription }}
                </div>
              </div>

              <div class>
                <div
                  class="w-full bg-blue-800 rounded-md rounded-t-none flex justify-between h-16"
                >
                  <button
                    type="button"
                    class="justify-center rounded-md rounded-t-none rounded-r-none bg-blue-700 w-8/12"
                  >
                    <span
                      class="font-bold text-lg text-white sm:leading-5 text-left"
                      >{{ project.budgetFrom }}.00 -
                      {{ project.budgetTo }}.00</span
                    >
                    <span class="text-xs text-white font-bold ml-1">{{
                      project.currencyId
                    }}</span>
                  </button>
                  <button
                    type="button"
                    class="uppercase px-4 py-2 text-sm rounded-md rounded-t-none rounded-l-none text-white bg-blue-800 w-4/12"
                  >
                    <div class="flex justify-center">
                      <div class="flex flex-col w-auto">
                        <div class="flex flex-row items-baseline">
                          <div
                            v-if="project.bits == null"
                            class="text-3xl font-bold text-white"
                          >
                            0
                          </div>
                          <div v-else class="text-3xl font-bold text-white">
                            {{ project.bits.length }}
                          </div>
                          <div
                            class="text-xs bids-top-text-edit text-white text-left -mb-2"
                          >
                            Bids
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          v-if="data_loaded && !filtered_data_sorted.length"
          class="text-sm text-gray-500 text-center flex w-full justify-center h-32 mt-16"
        >
          No projects in this directory
        </div>
        <div class="flex h-screen w-full justify-center" v-if="!data_loaded">
          <div class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
    <VueMoment />
  </div>
</template>

<script>
import ChipsFilter from "@/components/SharedComponents/ChipsFilter";
import { mapActions } from "vuex";
import VueMoment from "vue-moment";
export default {
  name: "My Project",
  data: () => ({
    all_data: [],
    data_loaded: false,
    filtered_data_sorted: [],
  }),
  components: {
    ChipsFilter,
    VueMoment,
  },
  mounted() {
    this.getActivePasiveDocumentData();
  },
  methods: {
    ...mapActions("project", ["moduleGetPastActiveProjects"]),
    getActivePasiveDocumentData() {
      this.moduleGetPastActiveProjects().then((data) => {
        this.all_data = [...data.data.activeProject, ...data.data.pastProject];

        this.filtered_data_sorted = this.all_data;
        this.data_loaded = true;

        this.all_data.sort(
          (a, b) => new Date(b.recordCreated) - new Date(a.recordCreated)
        );

        //ON ACTIVE BIDS SELECTED!

        this.$root.$on("chipChange", (chip_data) => {
          if (chip_data == "active") {
            this.filtered_data_sorted = data.data.activeProject;
          } else if (chip_data == "all") {
            this.filtered_data_sorted = [
              ...data.data.activeProject,
              ...data.data.pastProject,
            ];
          } else if (chip_data == "past") {
            this.filtered_data_sorted = data.data.pastProject;
          }
        });
      });
    },
  },
};
</script>

<style scoped>
.text {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 8; /* number of lines to show */
  -webkit-box-orient: vertical;
}
</style>
