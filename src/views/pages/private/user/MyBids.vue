<template>
  <div class="flex max-w-screen-sxl mx-auto p-2 sm:p-6 lg:p-8">
    <div class="flex flex-col w-0 flex-1 overflow-hidden">
      <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none" tabindex="0">
        <div class="mb-64 p-2">
          <div class="mb-10 text-3xl font-bold text-blue-800">My Bids</div>
          <ChipsFilterBids />
          <div
            v-if="data_loaded"
            class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 row-gap-4 md:col-gap-8 md:row-gap-10"
          >
            <div v-for="(project, key) in filtered_data_sorted" :key="key" class="h-full">
              <div class="h-full flex flex-col bg-white shadow rounded-lg relative">
                <div @click="showModal(key)" class="flex right-0 absolute">
                  <button>
                    <svg
                      width="58"
                      height="58"
                      viewBox="0 0 58 58"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="cursor-pointer"
                    >
                      <g filter="url(#filter0_d)">
                        <circle cx="29" cy="29" r="19" fill="#0046AA" />
                      </g>
                      <path
                        d="M38.1668 24.6368C38.1675 24.5162 38.1444 24.3966 38.0987 24.2849C38.0531 24.1732 37.9859 24.0717 37.9009 23.986L34.0143 20.0993C33.9286 20.0144 33.827 19.9472 33.7154 19.9016C33.6037 19.8559 33.4841 19.8328 33.3634 19.8335C33.2428 19.8328 33.1232 19.8559 33.0115 19.9016C32.8998 19.9472 32.7983 20.0144 32.7126 20.0993L30.1185 22.6935L20.0993 32.7127C20.0143 32.7983 19.9471 32.8999 19.9015 33.0116C19.8559 33.1233 19.8328 33.2429 19.8335 33.3635V37.2502C19.8335 37.4933 19.93 37.7264 20.1019 37.8984C20.2738 38.0703 20.507 38.1668 20.7501 38.1668H24.6368C24.765 38.1738 24.8934 38.1538 25.0134 38.108C25.1334 38.0622 25.2424 37.9917 25.3334 37.901L35.2976 27.8818L37.9009 25.3335C37.9846 25.2447 38.0528 25.1424 38.1026 25.031C38.1114 24.9579 38.1114 24.8841 38.1026 24.811C38.1069 24.7683 38.1069 24.7253 38.1026 24.6827L38.1668 24.6368ZM24.2609 36.3335H21.6668V33.7393L30.7693 24.6368L33.3634 27.231L24.2609 36.3335ZM34.6559 25.9385L32.0618 23.3443L33.3634 22.0518L35.9484 24.6368L34.6559 25.9385Z"
                        fill="white"
                      />
                      <defs>
                        <filter
                          id="filter0_d"
                          x="0"
                          y="0"
                          width="58"
                          height="58"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood flood-opacity="0" result="BackgroundImageFix" />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          />
                          <feOffset />
                          <feGaussianBlur stdDeviation="5" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </button>
                </div>

                <!-- MODAL HERE -->

                <transition name="fade">
                  <div
                    v-show="modal"
                    class="fixed bottom-0 inset-x-0 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center"
                  >
                    <div class="fixed inset-0 transition-opacity">
                      <div @click="modal = !modal" class="absolute inset-0 bg-gray-100 opacity-50"></div>
                    </div>
                    <div
                      class="bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:p-6"
                      role="dialog"
                      aria-modal="true"
                      aria-labelledby="modal-headline"
                    >
                      <div>
                        <div class="bg-white shadow-md rounded-lg mb-8">
                          <div class="px-4 py-5 sm:p-6 mb-0">
                            <div class="mt-0 mb-3 max-w-full text-sm leading-5 text-gray-500">
                              <div class="flex justify-end">
                                <div class="cursor-pointer bg-white" @click="modal = false">
                                  <span
                                    class="iconify"
                                    data-icon="bi:x"
                                    data-inline="false"
                                    data-width="24"
                                    data-height="24"
                                  ></span>
                                </div>
                              </div>
                              <form>
                                <div
                                  class="mt-6 grid grid-cols-1 row-gap-6 col-gap-4 sm:grid-cols-6"
                                >
                                  <div class="sm:col-span-2">
                                    <div class="mt-1 rounded-md">
                                      <label
                                        class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
                                        for="grid-first-name"
                                      >Bid Amount</label>
                                      <input
                                        v-model="bidModel.value"
                                        type="number"
                                        class="border-gray-100 bg-gray-50 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5 focus:bg-white"
                                        placeholder="Bid value"
                                      />
                                    </div>
                                  </div>

                                  <div class="sm:col-span-2">
                                    <div class="mt-1 rounded-md">
                                      <label
                                        class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
                                        for="grid-first-name"
                                      >Start Date</label>
                                      <input
                                        v-model="bidModel.startDate"
                                        type="date"
                                        class="border-gray-100 bg-gray-50 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5 focus:bg-white"
                                        placeholder="Start date"
                                      />
                                      <!-- <input type="date" id="birthday" name="birthday"> -->
                                    </div>
                                  </div>

                                  <div class="sm:col-span-2">
                                    <div class="mt-1 rounded-md">
                                      <label
                                        class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
                                        for="grid-first-name"
                                      >Duration (in days)</label>
                                      <input
                                        v-model.number="bidModel.projectDayDuration"
                                        type="number"
                                        class="border-gray-100 bg-gray-50 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5 focus:bg-white"
                                        placeholder="Duration"
                                      />
                                    </div>
                                  </div>
                                  <div class="sm:col-span-6">
                                    <div class="mt-1 rounded-md">
                                      <label
                                        class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
                                        for="grid-first-name"
                                      >Cover Letter</label>
                                      <textarea
                                        v-model="bidModel.longDescription"
                                        rows="5"
                                        class="border-gray-100 bg-gray-50 form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5 focus:bg-white"
                                        placeholder="Short presantation"
                                      ></textarea>
                                    </div>
                                    <p
                                      class="mt-2 text-xs text-gray-400 leading-5"
                                    >Write a few sentences about cover letter.</p>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="mt-5 sm:mt-6">
                        <span class="flex w-full rounded-md shadow-sm">
                          <button
                            @click="removeBid()"
                            type="button"
                            class="inline-flex justify-center mx-5 w-full rounded-md border border-transparent px-4 py-2 bg-white border border-red-500 text-red-600 hover:text-white text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                          >Remove bid</button>
                          <button
                            @click="editBid()"
                            type="button"
                            class="inline-flex justify-center mx-5 w-full rounded-md border border-transparent px-4 py-2 bg-blue-700 text-base leading-6 font-medium text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                          >Update my bid</button>
                        </span>
                      </div>
                    </div>
                  </div>
                </transition>

                <!-- MODAL END HERE -->

                <div class="flex flex-col justify-between h-full">
                  <div class="px-4 py-5 sm:p-6">
                    <p class="text-xs leading-6 font-medium text-gray-400">
                      Posted {{ project.ProjectData.recordCreated | moment("from", "now") }}
                      <span
                        class="font-bold px-1"
                      >•</span>
                      <span class="font-bold text-green-500">
                        <span>Bidding ends {{ project.ProjectData.endDate | moment("from", "now") }}</span>
                      </span>
                    </p>
                    <router-link :to="{name: 'ProjectDetails', params: {id: project.projectId}}">
                      <h3
                        class="cursor-pointer text-lg leading-6 font-bold text-gray-900 mb-3"
                      >{{project.ProjectData.title}}</h3>
                    </router-link>

                    <div class="font-semibold text-gray-500 text-sm">Bid proposal:</div>
                    <div
                      class="mt-0 mb-0 max-w-xl text-sm leading-5 text-gray-500 break-word text"
                    >{{project.longDescription}}</div>
                  </div>

                  <div>
                    <div class="flex flex-wrap justify-between mb-5 ml-6 mr-8">
                      <div class>
                        <div class="text-xs text-left font-semibold text-gray-400">Project Budget</div>
                        <div class="text-left">
                          <span
                            class="font-bold text-sm text-gray-700 sm:leading-5 text-left"
                          >{{project.ProjectData.budgetFrom}} - {{project.ProjectData.budgetTo}}</span>
                          <span
                            class="text-sm text-gray-700 font-bold ml-1"
                          >{{project.ProjectData.currencyId}}</span>
                        </div>
                      </div>
                      <div class>
                        <div class="text-xs text-left font-semibold text-gray-400">Avg. Bid</div>
                        <div class="text-left">
                          <span
                            class="text-sm text-gray-700 font-bold"
                          >{{project.ProjectData.budgetFrom + 10}} USD</span>
                        </div>
                      </div>
                      <div class>
                        <div class="text-xs text-left font-semibold text-gray-400">Total Bids</div>
                        <div class="text-left">
                          <span
                            class="text-sm text-gray-700 font-bold"
                          >{{project.ProjectData.bits.length}}</span>
                        </div>
                      </div>
                    </div>

                    <div class>
                      <div
                        class="w-full bg-blue-800 rounded-md rounded-t-none flex justify-between h-16"
                      >
                        <button
                          type="button"
                          class="justify-center rounded-md rounded-t-none rounded-r-none border-r border-blue-400 bg-blue-800 w-6/12"
                        >
                          <div class="flex justify-center">
                            <div>
                              <div class="text-xs text-left text-white">My Bid</div>
                              <div class="text-left">
                                <span
                                  class="font-bold text-lg text-white sm:leading-5 text-left"
                                >{{project.value}}.00</span>
                                <span
                                  class="text-xs text-white font-bold ml-1"
                                >{{project.ProjectData.currencyId}}</span>
                              </div>
                            </div>
                          </div>
                        </button>
                        <button
                          type="button"
                          class="px-4 py-2 text-sm rounded-md rounded-t-none rounded-l-none text-white bg-blue-800 w-6/12"
                        >
                          <div class="flex justify-center">
                            <div>
                              <div class="text-xs text-left text-white -mb-1">Duration</div>
                              <div class="text-left">
                                <span class="text-lg text-white font-bold">
                                  {{project.projectDayDuration}}
                                  <span
                                    class="text-xs text-white font-bold ml-1"
                                  >DAYS</span>
                                </span>
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
          </div>
          <div>
            <div
              v-if="filtered_data_sorted.length === 0"
              class="text-sm text-gray-500 text-center flex w-full justify-center h-32 mt-16"
            >No bids in this directory</div>
            <div v-else class="flex h-screen w-full justify-center">
              <div class="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>

    <VueMoment />
  </div>
</template>

<script>
import ChipsFilterBids from "@/components/SharedComponents/ChipsFilterBid";
import { mapActions } from "vuex";
import VueMoment from "vue-moment";
export default {
  name: "My Project",
  data: () => ({
    selectedKey: null,
    bidModel: {
      bidId: "",
      startDate: new Date(),
      projectDayDuration: "",
      longDescription: "",
      value: "",
      projectId: "",
      attachedFiles: [""],
    },
    modal: false,
    all_data: [],
    all_all: [],
    filtered_data: [],
    filtered_data_sorted: [],
    data_loaded: false,
    openSecondMenu: false,
  }),
  components: {
    ChipsFilterBids,
    VueMoment,
  },
  mounted() {
    var pageModel = { from: 0, to: 25 };
    this.moduleAllMyBidsPastActive({ pageModel }).then((data) => {
      this.all_data = [...data.data.activeBid, ...data.data.pastBid];
      if (this.all_data.length > 0) {
        let count = [];
        let all_data_count = this.all_data.length;

        for (let item in this.all_data) {
          if (this.all_data[item].projectId !== undefined) {
            this.moduleGetProjectById({
              projectId: this.all_data[item] && this.all_data[item].projectId,
            }).then((data) => {
              count.push(item);
              this.all_data[item].ProjectData = data.data;
              if (count.length == all_data_count) {
                this.data_loaded = true;
              }
            });
          } else {
            this.data_loaded = true;
          }
        }

        this.all_data.sort(
          (a, b) => new Date(b.recordCreated) - new Date(a.recordCreated)
        );

        this.$root.$on("chipChange", (chip_data) => {
          if (chip_data == "active") {
            this.all_data = data.data.activeBid;
          } else if (chip_data == "all") {
            this.filtered_data_sorted = this.all_data;
          } else if (chip_data == "past") {
            this.all_data = data.data.pastBid;
          }
        });
      }
    });
  },
  methods: {
    ...mapActions("project", [
      "moduleAllPublicProject",
      "moduleGetProjectById",
    ]),
    ...mapActions("projectBid", [
      "moduleAllMyBidsPastActive",
      "moduleEditProjectBid",
      "moduleRemoveProjectBid",
    ]),
    toggleSecondMenu() {
      this.openSecondMenu = !this.openSecondMenu;
    },
    showModal(key) {
      this.selectedKey = this.all_data[key];
      this.bidModel.value = this.all_data[key].value;
      this.bidModel.startDate = this.all_data[key].startDate;
      this.bidModel.projectDayDuration = this.all_data[key].projectDayDuration;
      this.bidModel.longDescription = this.all_data[key].longDescription;
      this.modal = !this.modal;
    },
    editBid() {
      this.bidModel.bidId = this.selectedKey.bidId;
      this.bidModel.projectId = this.selectedKey.projectId;
      this.bidModel.attachedFile = [];
      this.bidModel.featuredType = this.selectedKey.featuredType;
      this.bidModel.userName = this.selectedKey.userName;

      location.reload();
      this.moduleEditProjectBid({ bidModel: this.bidModel });
    },
    removeBid() {
      this.moduleRemoveProjectBid({ bidModel: this.selectedKey });
      location.reload();
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
