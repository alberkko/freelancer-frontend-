<template>
  <!-- TODO
1- Sort Bids
2- Get all the user data [Location / Reviews]
3- Bid Cards Design

FOR EMPLOYER CARD
1- Get Location
2- Get Reviews
3- Get nr of jobs
4- Get member since [add record created to db]
  -->
  <div>
    <div class="relative h-280 overflow-hidden">
      <div
        class="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:items-end lg:justify-between justify-center max-w-screen-sxl mx-auto lg:px-8 px-6 pb-20 h-full"
      >
        <div class="z-30">
          <div class="flex space-x-4">
            <div class="flex flex-col space-y-1">
              <div class="flex flex-col space-y-2">
                <div
                  class="flex items-center self-start bg-green-500 bg-opacity-75 rounded-full pl-1 pr-2"
                >
                  <span
                    class="iconify mr-1"
                    data-icon="ic:round-verified"
                    style="color: #fff;"
                    data-inline="false"
                  ></span>
                  <div class="font-semibold text-white">Verified</div>
                </div>
                <div class="text-3xl font-bold text-white sm:text-4xl">Hi, I'm X</div>
              </div>
              <div class="flex space-x-2">
                <div class="flex items-center">
                  <div class="font-semibold text-white">Joined in 2018</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="z-30 text-white flex space-x-2">
        <div class="flex items-center">
          <div class="mr-1">
            <span
              class="iconify text-xl mr-1"
              data-icon="gridicons:location"
              data-inline="false"
              style="color: #fff;"
            ></span>
          </div>
          <div class="font-light text-white">asd</div>
        </div>
        <div class="flex items-center">
          <span
            class="iconify text-xl mr-1"
            data-icon="ant-design:star-filled"
            data-inline="false"
            style="color: #fff;"
          ></span>
          <div class="font-light text-white">asd (16 Reviews)</div>
          <!-- <div class="text-xs">(213 reviews)</div> -->
        </div>
      </div>
      <div class="cover-overlay bg-opacity-25 z-20 absolute inset-0"></div>

      <img
        class="object-cover w-full h-full absolute top-0 z-10"
        src="@/assets/banner-default.png"
        alt
      />
    </div>
    <div class="min-height p-2 max-w-screen-sxl mx-auto p-2 sm:p-6 lg:p-8 -top-80 z-30 relative">
      <div
        v-if="data_loaded"
        class="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-4 row-gap-4 md:col-gap-8 md:row-gap-10"
      >
        <div class="md:col-span-4 lg:col-span-3">
          <div class="bg-white shadow-md rounded-lg relative mb-8">
            <div class="px-4 py-5 sm:p-6 mb-0">
              <div class="flex flex-row justify-between flex-wrap mb-2 md:mb-0">
                <div>
                  <p class="text-xs leading-6 font-medium text-gray-400">
                    Posted
                    {{ project_data.recordCreated | moment("from", "now") }}
                    <span
                      class="font-bold px-1"
                    >•</span>
                    <span class="font-bold text-green-500">
                      Bidding ends
                      {{ project_data.endDate | moment("from", "now") }}
                    </span>
                  </p>
                  <h3
                    class="text-xl leading-6 font-bold text-gray-900 mb-3 mt-2"
                  >{{ project_data.title }}</h3>
                </div>
                <div class="mt-2">
                  <div class="flex flex-row items-baseline -mt-1">
                    <p class="font-bold text-2xl text-gray-900">
                      {{ project_data.budgetFrom }}.00 -
                      {{ project_data.budgetTo }}.00
                    </p>
                    <p
                      class="font-bold text-xs text-gray-900 pl-1 pr-3"
                    >{{ project_data.currencyId }}</p>
                    <div class="flex flex-row items-baseline border-l">
                      <p
                        v-if="data_loaded"
                        class="font-bold text-2xl text-gray-900 pl-3"
                      >{{ project_data.bits.length }}</p>
                      <p v-else class="font-bold text-2xl text-gray-900 pl-3">0</p>
                      <p class="font-bold text-xs text-gray-900 pl-1">BIDS</p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- SKILLZ -->
              <div>
                <div>
                  <div class="flex flex-col w-full">
                    <div class="h-0 flex-1 flex flex-col">
                      <div class="pr-3 pb-3">
                        <div class="flex flex-wrap">
                          <div v-for="(item, key) in project_data.skillsModel" v-bind:key="key">
                            <div
                              class="flex items-center my-1 mr-1 font-medium py-1 px-2 bg-white rounded-full text-blue-400 bg-blue-100"
                            >
                              <div
                                class="text-xs font-normal leading-none max-w-full flex-initial"
                              >{{ project_data.skillsModel[key].title }}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-0 mb-3 max-w-full text-sm leading-5 text-gray-500">
                <p>{{ project_data.shortDescription }}</p>
              </div>
            </div>
          </div>

          <div class="bg-white shadow-md rounded-lg mb-8">
            <div class="px-4 py-5 sm:p-6 mb-0">
              <h3 class="text-xl leading-6 font-bold text-gray-900 mb-3 mt-2">Project Details</h3>
              <div class="mt-0 mb-3 max-w-full text-sm leading-5 text-gray-500">
                <!-- <p>{{ project_data.longDescription }}</p> -->
                <span v-html="project_data.longDescription"></span>
                <div class="pt-10">
                  <div v-for="(item, key) in project_data.files" v-bind:key="key">
                    <div
                      class="border flex rounded px-2 py-1 my-2 w-2/12 text-center hover:bg-blue-100"
                    >
                      <span
                        class="iconify"
                        data-icon="ant-design:download-outlined"
                        data-inline="false"
                        style="color: #b3b3b3;"
                        data-width="20"
                        data-height="20"
                      ></span>
                      <a
                        class="pl-2"
                        :href="project_data.files[key]"
                        download
                      >Download file {{ key + 1 }}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div v-if="!my_project" class="bg-white shadow-md rounded-lg mb-8">
            <div v-if="!alreadyBided">
              <div class="px-4 py-5 sm:p-6 mb-0">
                <h3 class="text-xl leading-6 font-bold text-gray-900 mb-3 mt-2">Bid for the project</h3>
                <div class="mt-0 mb-3 max-w-full text-sm leading-5 text-gray-500">
                  <form>
                    <div class="mt-6 grid grid-cols-1 row-gap-6 col-gap-4 sm:grid-cols-6">
                      <div class="sm:col-span-2">
                        <div class="mt-1 rounded-md">
                          <label
                            class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
                            for="grid-first-name"
                          >Bid Amount (in {{ project_data.currencyId }})</label>
                          <input
                            v-model="projectBidModel.value"
                            id="bidValue"
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
                            v-model="projectBidModel.startDate"
                            id="startDate"
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
                            v-model.number="duration"
                            type="number"
                            id="endDate"
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
                            v-model="projectBidModel.longDescription"
                            id="longDescription"
                            rows="10"
                            class="border-gray-100 bg-gray-50 form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5 focus:bg-white"
                            placeholder="Short presantation"
                          ></textarea>
                        </div>
                        <p
                          class="mt-2 text-xs text-gray-400 leading-5"
                        >Write a few sentences about cover letter.</p>
                      </div>
                      <div class="sm:col-span-6">
                        <div class="mt-5 flex justify-between">
                          <input type="file" multiple="multiple" @change="Images_onFileChanged" />
                        </div>
                      </div>
                    </div>
                    <div class="mt-5 flex items-center">
                      <input type="checkbox" id="checkbox" v-model="fb_checked" />
                      <label for="checkbox" class="ml-2 text-sm font-semibold">Add as featured bid!</label>
                    </div>
                    <div class="mt-8 pt-5">
                      <div class="flex justify-end">
                        <span class="ml-3 inline-flex rounded-md shadow-sm">
                          <button
                            @click="AddProjectBid()"
                            type="button"
                            class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-bold rounded-md text-white bg-blue-800 hover:bg-blue-700 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out uppercase"
                          >submit the bid</button>
                        </span>
                      </div>
                      <div
                        v-if="negative_value_error"
                        class="mt-8 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                        role="alert"
                      >
                        <span class="block sm:inline">Negative values are not allowed</span>
                        <button
                          @click="negative_value_error = !negative_value_error"
                          class="absolute top-0 bottom-0 right-0 px-4 py-3"
                        >
                          <svg
                            class="fill-current h-6 w-6 text-red-500"
                            role="button"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <title>Close</title>
                            <path
                              d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
                            />
                          </svg>
                        </button>
                      </div>

                      <div
                        v-if="smallerthanfrom"
                        class="mt-8 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                        role="alert"
                      >
                        <span class="block sm:inline">
                          Bid value cannot be smaller than
                          {{ project_data.budgetFrom }}
                        </span>
                        <button
                          @click="smallerthanfrom = !smallerthanfrom"
                          class="absolute top-0 bottom-0 right-0 px-4 py-3"
                        >
                          <svg
                            class="fill-current h-6 w-6 text-red-500"
                            role="button"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <title>Close</title>
                            <path
                              d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
                            />
                          </svg>
                        </button>
                      </div>

                      <div
                        v-if="empty_value_error"
                        class="mt-8 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                        role="alert"
                      >
                        <span class="block sm:inline">Please fill in all the required fields</span>
                        <button
                          @click="empty_value_error = !empty_value_error"
                          class="absolute top-0 bottom-0 right-0 px-4 py-3"
                        >
                          <svg
                            class="fill-current h-6 w-6 text-red-500"
                            role="button"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <title>Close</title>
                            <path
                              d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <!-- <BidCards /> -->
          <div v-if="bids_data_loaded">
            <div v-for="(item, key) in project_data.bits" v-bind:key="key">
              <div v-if="item.isFeatured == '1'">
                <div class="flex flex-wrap">
                  <div class="w-full">
                    <div
                      class="bg-white border-2 shadow-xl border-blue-300 sm:rounded-lg mb-4 relative"
                    >
                      <div class="px-4 py-5 sm:p-6">
                        <div class="flex mb-6">
                          <div class="flex justify-between w-full items-center">
                            <div class="flex">
                              <div class="flex items-center">
                                <img
                                  v-if="item.BidUserData.base64ProfilePhoto"
                                  class="inline-block h-15 w-15 rounded-full object-cover"
                                  v-bind:src="
                                    item.BidUserData.base64ProfilePhoto
                                  "
                                  alt
                                />
                                <img
                                  v-else
                                  class="inline-block h-15 w-15 rounded-full object-cover"
                                  src="https://i.stack.imgur.com/l60Hf.png"
                                  alt
                                />
                              </div>
                              <div class="text-sm leading-5 text-gray-500 mt-0 ml-2">
                                <p>{{ item.BidUserData.userName }}</p>
                                <p>Germany</p>
                                <div class="flex">
                                  <div>
                                    <div class="flex items-center leading-5 mt-1">
                                      <span
                                        class="iconify"
                                        data-icon="ant-design:star-filled"
                                        data-inline="false"
                                        style="color: #2b99ff;"
                                        data-width="20"
                                        data-height="20"
                                      ></span>
                                      <div class="font-semibold px-1 text-md text-gray-800">4.5</div>
                                      <div class="text-xs">(213)</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="flex items-start">
                              <div class="items-end flex flex-col">
                                <div class="flex items-end">
                                  <div class="mx-1 font-semibold text-blue-800 text-2xl">
                                    {{ item.value }}
                                    <span class="text-sm">.00</span>
                                  </div>
                                  <div
                                    class="font-bold mb-1 text-blue-800 text-xs"
                                  >{{ project_data.currencyId }}</div>
                                </div>
                                <div class>
                                  <span
                                    class="font-semibold text-sm text-green-500"
                                  >in {{ item.projectDayDuration }} days</span>
                                </div>
                                <div
                                  class="text-sm px-2 mt-2 rounded border border-blue-500 bg-blue-500 text-white"
                                >Featured Bid</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="mt-0 mb-0 text-sm leading-5 text-gray-500">
                          <p>{{ item.longDescription }}</p>

                          <div class>
                            <div v-for="(bit_item, key) in item.attachedFile" v-bind:key="key">
                              <div
                                class="border mt-5 flex rounded px-2 py-1 my-2 w-2/12 text-center hover:bg-blue-100"
                              >
                                <span
                                  class="iconify"
                                  data-icon="ant-design:download-outlined"
                                  data-inline="false"
                                  style="color: #b3b3b3;"
                                  data-width="20"
                                  data-height="20"
                                ></span>
                                <a
                                  class="pl-2"
                                  :href="item.attachedFile[key]"
                                  download
                                >Download file {{ key + 1 }}</a>
                              </div>
                            </div>
                          </div>
                          <div v-if="my_project" class="flex">
                            <button
                              class="border text-white bg-green-500 border-green-500 hover:bg-green-600 rounded px-4 py-1 mt-5 w-fill mr-2"
                            >Accept Bid</button>
                            <button
                              class="border hover:bg-blue-100 border rounded px-4 py-1 mt-5 w-fill"
                            >Contact</button>
                          </div>
                        </div>
                        <div>
                          <UserRatingOnCard />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else>
                <div class="flex flex-wrap">
                  <div class="w-full">
                    <div class="bg-white shadow sm:rounded-lg mb-4 relative">
                      <div class="px-4 py-5 sm:p-6">
                        <div class="flex mb-6">
                          <div class="flex justify-between w-full">
                            <div class="flex">
                              <div class="flex items-center">
                                <img
                                  v-if="item.BidUserData.base64ProfilePhoto"
                                  class="inline-block h-15 w-15 rounded-full object-cover"
                                  v-bind:src="
                                    item.BidUserData.base64ProfilePhoto
                                  "
                                  alt
                                />
                                <img
                                  v-else
                                  class="inline-block h-15 w-15 rounded-full object-cover"
                                  src="https://i.stack.imgur.com/l60Hf.png"
                                  alt
                                />
                              </div>
                              <div class="text-sm leading-5 text-gray-500 mt-0 ml-2">
                                <p>{{ item.BidUserData.userName }}</p>
                                <p>Germany</p>
                                <div class="flex">
                                  <div>
                                    <div class="flex items-center leading-5 mt-1">
                                      <span
                                        class="iconify"
                                        data-icon="ant-design:star-filled"
                                        data-inline="false"
                                        style="color: #2b99ff;"
                                        data-width="20"
                                        data-height="20"
                                      ></span>
                                      <div class="font-semibold px-1 text-md text-gray-800">4.5</div>
                                      <div class="text-xs">(213)</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="flex items-start">
                              <div class="items-end flex flex-col">
                                <div class="flex items-end">
                                  <div class="mx-1 font-semibold text-blue-800 text-2xl">
                                    {{ item.value }}
                                    <span class="text-sm">.00</span>
                                  </div>
                                  <div
                                    class="font-bold mb-1 text-blue-800 text-xs"
                                  >{{ project_data.currencyId }}</div>
                                </div>
                                <div class>
                                  <span
                                    class="font-semibold text-sm text-green-500"
                                  >in {{ item.projectDayDuration }} days</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="mt-0 mb-0 text-sm leading-5 text-gray-500">
                          <p>{{ item.longDescription }}</p>

                          <div class>
                            <div v-for="(bit_item, key) in item.attachedFile" v-bind:key="key">
                              <div
                                class="border mt-5 flex rounded px-2 py-1 my-2 w-2/12 text-center hover:bg-blue-100"
                              >
                                <span
                                  class="iconify"
                                  data-icon="ant-design:download-outlined"
                                  data-inline="false"
                                  style="color: #b3b3b3;"
                                  data-width="20"
                                  data-height="20"
                                ></span>
                                <a
                                  class="pl-2"
                                  :href="item.attachedFile[key]"
                                  download
                                >Download file {{ key + 1 }}</a>
                              </div>
                            </div>
                          </div>
                          <div v-if="my_project" class="flex">
                            <button
                              class="border text-white bg-green-500 border-green-500 hover:bg-green-600 rounded px-4 py-1 mt-5 w-fill mr-2"
                            >Accept Bid</button>
                            <button
                              class="border hover:bg-blue-100 border rounded px-4 py-1 mt-5 w-fill"
                            >Contact</button>
                          </div>
                        </div>
                        <div>
                          <UserRatingOnCard />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex w-full justify-center" v-else>
            <div class="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>

        <div class="flex flex-col md:col-span-2 lg:col-span-1 space-y-8">
          <div class="bg-white shadow-lg rounded-lg">
            <div class="px-4 py-5 sm:p-6 mb-0">
              <div>
                <div class="flex mb-6">
                  <div class="flex items-center">
                    <img
                      v-if="
                        data_loaded && project_data.UserData.base64ProfilePhoto
                      "
                      class="inline-block h-15 w-15 rounded-full object-cover"
                      v-bind:src="project_data.UserData.base64ProfilePhoto"
                      alt
                    />
                    <img
                      v-else
                      class="inline-block h-15 w-15 rounded-full object-cover"
                      src="https://i.stack.imgur.com/l60Hf.png"
                      alt
                    />
                  </div>
                  <div class="text-sm leading-5 text-gray-500 mt-0 ml-2">
                    <p>{{ project_data.userCreated }}</p>
                    <p
                      v-if="data_loaded && project_data.UserData.state != null"
                    >{{ project_data.UserData.state }}</p>
                    <p v-else>Germany</p>
                    <div class="flex">
                      <div>
                        <div class="flex items-center leading-5 mt-1">
                          <span
                            class="iconify"
                            data-icon="ant-design:star-filled"
                            data-inline="false"
                            style="color: #2b99ff;"
                            data-width="20"
                            data-height="20"
                          ></span>
                          <div class="font-semibold px-1 text-md text-gray-800">4.5</div>
                          <div class="text-xs">(213)</div>
                        </div>
                      </div>
                      <div>
                        <!-- <vue-stars class="text-xl mt-0 rating" :max="5" :value="3" /> -->
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <p class="text-sm font-bold pb-2 text-gray-700">Job posted</p>
                  <!-- <p class="text-sm pb-2 text-gray-500">124 jobs</p> -->
                  <p class="text-xs pb-2 text-gray-500">Member since Jan 12, 2013</p>
                  <!-- <div class="text-xs pb-5 text-gray-500">✔️ Verified</div> -->
                  <div class="text-xs pb-5 text-gray-500">❌ Not Verified</div>
                  <button
                    @click="
                      $router.push({
                        path: `/profile/user/${project_data.userCreated}`,
                      })
                    "
                    class="bg-gray-300 hover:bg-gray-400 text-gray-900 text-sm py-2 px-4 rounded-lg w-full"
                  >See Profile</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex h-screen w-full justify-center" v-else>
        <div class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <transition name="fade">
        <div
          v-show="modal"
          class="fixed bottom-0 inset-x-0 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center"
        >
          <div class="fixed inset-0 transition-opacity">
            <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <div
            class="bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-sm sm:w-full sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div>
              <div
                class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100"
              >
                <svg
                  class="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div class="mt-3 text-center sm:mt-5">
                <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">Success!</h3>
                <div class="mt-2">
                  <p class="text-sm leading-5 text-gray-500">
                    Your bid for
                    <span class="font-bold">{{ project_data.title }}</span> was
                    placed successfully.
                  </p>
                </div>
              </div>
            </div>
            <div class="mt-5 sm:mt-6">
              <span class="flex w-full rounded-md shadow-sm">
                <button
                  @click="BacktoProject"
                  type="button"
                  class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-blue-700 text-base leading-6 font-medium text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                >Go back to the project</button>
              </span>
            </div>
          </div>
        </div>
      </transition>

      <VueMoment />
    </div>
  </div>
</template>

<script>
import VueMoment from "vue-moment";
import { mapActions } from "vuex";
import { UserNameProvider } from "../../../../provider/storage/username.storage";
export default {
  name: "My Project",
  data() {
    return {
      alreadyBided: false,
      currentUser: UserNameProvider.getUserName(),
      fb_checked: false,
      smallerthanfrom: false,
      modal: false,
      my_project: false,
      b64files: [],
      memberSince: "",
      negative_value_error: false,
      empty_value_error: false,
      bids_data_loaded: false,
      currentDate: new Date(),
      duration: null,
      data_loaded: false,
      project_data: [],
      currentProject: null,
      projectBidModel: {
        projectId: "",
        shortDescription: "",
        value: "",
        startDate: "",
        projectDayDuration: "",
        longDescription: "",
        attachedFile: [],
        bidId: "",
      },
    };
  },
  components: {
    VueMoment,
    // VueStars,
  },
  methods: {
    ...mapActions("projectBid", ["moduleAddProjectBid"]),
    ...mapActions("projectBid", ["moduleAddProjectFeaturedBid"]),
    ...mapActions("project", ["moduleGetProjectById"]),
    ...mapActions("profile", ["moduleGetUserProfileByUserName"]),
    BacktoProject() {
      location.reload();
    },

    AddProjectBid() {
      Date.prototype.addDays = function (days) {
        var e_date = new Date(this.valueOf());
        e_date.setDate(e_date.getDate() + days);
        return e_date;
      };

      var e_date = new Date();

      var formatedEndDate = e_date.addDays(this.duration);
      console.log(formatedEndDate);

      if (this.projectBidModel.value < 0 || this.duration < 0) {
        this.negative_value_error = true;
        this.smallerthanfrom = false;
      } else if (this.projectBidModel.value < this.project_data.budgetFrom) {
        // alert("Bid value cannot be smaller than " + this.project_data.budgetFrom +" "+ this.project_data.currencyId)
        this.smallerthanfrom = true;
      } else if (
        this.projectBidModel.value == "" ||
        this.duration == null ||
        this.projectBidModel.startDate == undefined
      ) {
        this.empty_value_error = true;
        this.smallerthanfrom = false;
      } else {
        this.projectBidModel.projectDayDuration = this.duration;
        this.projectBidModel.projectId = this.currentProject;
        console.log(this.projectBidModel.startDate);
        this.smallerthanfrom = false;
        console.log(this.projectBidModel);

        if (this.fb_checked) {
          // add featured bid
          this.moduleAddProjectFeaturedBid({ bidModel: this.projectBidModel });
        } else {
          // add normal bid!
          this.moduleAddProjectBid({ bidModel: this.projectBidModel });
        }
        this.modal = true;
      }
    },
    Images_onFileChanged(event) {
      this.selectedFile = event.target.files;
      for (var i = 0; i < this.selectedFile.length; i++) {
        var file = this.selectedFile[i];
        this.encodeImage(file);
      }
    },
    encodeImage(input) {
      if (input) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.base64Img = e.target.result;
          this.b64files.push(this.base64Img);
          this.projectBidModel.attachedFile = this.b64files;
        };
        reader.readAsDataURL(input);
      }
    },
    checkIfUserHasAlreadyBided(bits) {
      for (let item in bits) {
        // console.log(bits[item])
        if (bits[item].userName == this.currentUser) {
          console.log("alreadyBided");
          this.alreadyBided = true;
        }
      }
    },
  },
  mounted() {
    window.scrollTo({ top: 0 });
    this.modal = false;

    this.currentProject = this.$route.params.id;
    console.log(this.currentProject.userName);

    //get bid user contents
    // if(this.bids_data_loaded == true){

    // }

    this.moduleGetProjectById({ projectId: this.currentProject }).then(
      (data) => {
        this.project_data = data.data;
        console.log(this.project_data);
        //  this.sortBids();

        this.checkIfUserHasAlreadyBided(this.project_data.bits);

        for (let item in this.project_data.bits) {
          // console.log(this.project_data.bits[item]);
          var single_bid = this.project_data.bits[item];

          if (single_bid.featuredType == "IS_NOT_FEATURED") {
            this.project_data.bits[item].isFeatured = "0";
          } else if (single_bid.featuredType == "IS_FEATURED") {
            this.project_data.bits[item].isFeatured = "1";
          }
        }

        //Bids with lower value go first

        this.project_data.bits.sort(
          (a, b) => parseFloat(a.value) - parseFloat(b.value)
        );

        //featured bids go first, sorted by lowest value

        this.project_data.bits.sort(
          (a, b) => parseFloat(b.isFeatured) - parseFloat(a.isFeatured)
        );

        if (this.currentUser == this.project_data.userCreated) {
          this.my_project = true;
        }

        this.moduleGetUserProfileByUserName({
          username: this.project_data.userCreated,
        }).then((data) => {
          var user_data = data.data;
          // console.log(user_data);

          this.project_data.UserData = user_data;
          var memberS = this.project_data.UserData.memberSince;
          this.memberSince = memberS.slice(0, 4);
          this.data_loaded = true;

          var count = [];
          if (this.project_data.bits.length < 1) {
            this.bids_data_loaded = true;
          }
          for (let i = 0; i < this.project_data.bits.length; i++) {
            this.moduleGetUserProfileByUserName({
              username: this.project_data.bits[i].userName,
            }).then((data) => {
              let bid_user_data = data.data;
              this.project_data.bits[i].BidUserData = bid_user_data;

              // console.log(this.project_data);

              count.push(i);

              // console.log(count.length)
              // console.log(this.project_data.bits.length)

              if (this.project_data.bits.length == count.length) {
                this.bids_data_loaded = true;
                // console.log("LOADED!!")
              }
            });
          }
        });
      }
    );
  },
};
</script>

<style>
.rating {
  padding-top: 0px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
