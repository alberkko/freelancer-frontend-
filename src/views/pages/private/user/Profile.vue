<template>
  <div class>
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
                <div
                  class="text-3xl font-bold text-white sm:text-4xl"
                >Hi, I'm {{ this.profileModel.firstName }}</div>
              </div>
              <div class="flex space-x-2">
                <div class="flex items-center">
                  <div class="font-semibold text-white">Joined in 2018</div>
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
            <div class="font-light text-white">{{ this.profileModel.state }}</div>
          </div>
          <div class="flex items-center">
            <span
              class="iconify text-xl mr-1"
              data-icon="ant-design:star-filled"
              data-inline="false"
              style="color: #fff;"
            ></span>
            <div class="font-light text-white">{{ this.profileModel.reviewScore }} (16 Reviews)</div>
            <!-- <div class="text-xs">(213 reviews)</div> -->
          </div>
        </div>
      </div>
      <div class="cover-overlay bg-opacity-25 z-20 absolute inset-0"></div>

      <img
        class="object-cover w-full h-full absolute top-0 z-10"
        src="@/assets/banner-default.png"
        alt
      />
    </div>
    <div
      class="max-w-screen-sxl mx-auto p-2 sm:p-6 lg:p-8 flex lg:flex-row flex-col lg:space-x-8 space-y-8 lg:space-y-0 relative z-30 -top-80"
    >
      <div class="flex flex-col w-full lg:w-280">
        <div v-show="!editImage">
          <div class="flex flex-col sm:flex-row lg:flex-col bg-white shadow-lg rounded-lg">
            <div class="p-6">
              <div class="flex items-center justify-center">
                <img
                  v-if="profileModel.base64ProfilePhoto"
                  class="profileImage"
                  v-bind:src="profileModel.base64ProfilePhoto"
                  alt
                />
                <img v-else class="profileImage" src="https://i.stack.imgur.com/l60Hf.png" alt />
              </div>
            </div>
            <div class="flex-1 relative px-6 pb-6 flex items-center">
              <div class="flex flex-col space-y-1">
                <div class="flex items-center">
                  <span class="iconify mr-2" data-icon="foundation:at-sign" data-inline="false"></span>
                  <div class="font-bold text-2xl">{{ this.profileModel.userName }}</div>
                </div>
                <div class="flex items-center">
                  <span class="iconify mr-2" data-icon="si-glyph:badge-name" data-inline="false"></span>
                  {{ this.profileModel.firstName }}
                  {{ this.profileModel.lastName }}
                </div>

                <div class="flex items-center">
                  <span class="iconify mr-2" data-icon="gridicons:location" data-inline="false"></span>
                  <div class="text-sm">{{ this.profileModel.state }}</div>
                </div>
                <div class="flex items-center">
                  <span class="iconify mr-2" data-icon="ant-design:star-filled" data-inline="false"></span>
                  <div class="font-semibold">{{ this.profileModel.reviewScore }}</div>
                  <!-- <div class="text-xs">(213 reviews)</div> -->
                </div>
              </div>
              <button @click="editImage = !editImage" class="absolute right-0 bottom-0 pr-4 pb-4">
                <span class="iconify h-6 w-6" data-icon="feather:edit" data-inline="false"></span>
              </button>
            </div>
          </div>
        </div>

        <div v-show="editImage">
          <!-- <button @click="editImage =! editImage" class="px-1 py-1 text-sm text-gray-500">Edit</button> -->
          <div class="bg-white shadow-lg rounded-lg">
            <div class="px-4 pt-5 sm:px-6 mb-0">
              <div class="justify-center">
                <img
                  v-if="profileModel.base64ProfilePhoto"
                  class="profileImage"
                  v-bind:src="profileModel.base64ProfilePhoto"
                  alt
                />
                <img v-else class="profileImage" src="https://i.stack.imgur.com/l60Hf.png" alt />
              </div>
            </div>
            <div class="p-4 cursor-pointer text-green-500 rounded flex items-center">
              <input
                type="checkbox"
                id="checkbox"
                class="form-checkbox h-6 w-6 rounded-full text-green-500 mr-2"
                v-model="checked"
                @change="showHideMyProfileInBrowse"
              />
              <label
                v-if="!checked"
                class="text-sm font-semibold"
                for="checkbox"
              >Show my profile on Browse</label>
              <label v-else class="text-sm font-semibold" for="checkbox">Hide my profile on Browse</label>
            </div>
            <div class="bottom-0">
              <div class="w-full bg-white rounded-md rounded-t-none flex justify-between">
                <div class="px-4 py-2 items-left rounded-md rounded-t-none text-white bg-white">
                  <div
                    class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
                  >Edit Profile Image</div>
                  <div class="py-2 w-full">
                    <input
                      type="file"
                      class="text-black w-full"
                      accept="image/*"
                      @change="Images_onFileChanged"
                    />
                  </div>
                  <div @click="rmProfileImage" class="flex items-center">
                    <span
                      class="iconify"
                      data-icon="ic:outline-delete-forever"
                      data-inline="false"
                      style="color: #ff5252;"
                      data-width="20"
                      data-height="20"
                    ></span>
                    <div
                      class="block ml-2 uppercase tracking-wide text-red-500 text-xs font-bold mb-2 mt-2 cursor-pointer"
                    >Remove Profile Image</div>
                  </div>

                  <div
                    class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2 mt-6"
                  >Edit Your Firstname</div>

                  <input
                    v-model="profileModel.firstName"
                    id="first_name"
                    class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5 text-gray-500"
                    placeholder="FirstName"
                  />

                  <div
                    class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2 mt-6"
                  >Edit Your Lastname</div>

                  <input
                    v-model="profileModel.lastName"
                    id="first_name"
                    class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5 text-gray-500"
                    placeholder="Lastname"
                  />

                  <div
                    class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2 mt-6"
                  >Edit Location</div>

                  <input
                    v-model="profileModel.state"
                    id="first_name"
                    class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5 text-gray-500"
                    placeholder="Location"
                  />

                  <div class="flex justify-end my-5">
                    <button
                      @click="editImage = false"
                      class="bg-white text-red-500 font-semibold text-sm tracking-wider py-2 px-4 rounded-lg flex items-center mr-1"
                    >
                      <span>Cancel</span>
                    </button>
                    <button
                      class="bg-green-500 text-white font-bold text-sm tracking-wider py-2 px-8 rounded-lg flex items-center"
                      @click="editUserName(), (editImage = !editImage)"
                    >
                      <span>Save</span>
                    </button>
                  </div>
                  <!-- <div class="font-bold text-2xl">@ {{this.profileModel.userName}}</div> -->
                  <!-- <div class="flex items-center mb-3 mt-1"> -->
                  <!-- <div class="mr-1">
                    <span
                      class="iconify"
                      data-icon="gridicons:location"
                      data-inline="false"
                      style="color: #fff;"
                      data-width="20"
                      data-height="20"
                    ></span>
                  </div>-->
                  <!-- <div class="text-sm text-white">{{this.profileModel.state}}</div> -->
                  <!-- </div> -->
                  <!-- <div
                  class="text-sm text-left my-1 px-2 my-2 bg-yellow-200 text-blue-900 font-bold w-2/12 pl-1"
                  >4.5</div>-->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1">
        <div class="space-y-8">
          <!-- HEADLINE SECTION -->

          <div v-if="!editTitleSection">
            <div
              class="cursor-pointer relative bg-white shadow-md hover:shadow-xl transition duration-200 ease-in-out rounded-lg"
            >
              <div class="p-6 mb-0">
                <div class="flex justify-between">
                  <span
                    class="text-xl leading-6 font-bold text-gray-900 mb-3"
                  >{{ profileModel.shortSelfDescription }}</span>
                  <p
                    @click="editTitleSection = !editTitleSection"
                    class="text-sm text-gray-500"
                  >Edit</p>
                  <!-- <span>Short Self Description</span> -->
                </div>
                <div>
                  <div class="mt-0 mb-3 max-w-full text-sm leading-5 text-gray-500">
                    <span>{{ profileModel.longSelfDescription }}</span>
                    <!-- <span>Long Self Description</span> -->
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- EDIT HEADLINE SECTION -->
          <div v-if="editTitleSection">
            <div
              class="cursor-pointer relative bg-white shadow-md hover:shadow-xl transition duration-200 ease-in-out rounded-lg"
            >
              <div class="p-6 mb-0">
                <div class="text-xl leading-6 font-bold text-gray-900 mb-3">
                  <span class="text-sm font-bold text-gray-600">Professional Headline</span>
                  <input
                    v-model="profileModel.shortSelfDescription"
                    id="first_name"
                    class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    placeholder="Enter professional headline"
                  />
                </div>
                <div>
                  <div class="mt-0 mb-3 max-w-full text-sm leading-5 text-gray-500">
                    <span class="text-sm font-bold text-gray-600">Description</span>
                    <textarea
                      placeholder="Enter a profile description"
                      v-model="profileModel.longSelfDescription"
                      id="about"
                      rows="3"
                      class="form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="flex justify-end pb-6 pr-6 space-x-4">
                <button
                  @click="editTitleSection = false"
                  class="bg-gray-200 text-gray-800 font-bold text-sm tracking-wider py-2 px-4 rounded-lg flex items-center"
                >
                  <span>Cancel</span>
                </button>
                <button
                  class="bg-green-500 text-white font-bold text-sm tracking-wider py-2 px-4 rounded-lg flex items-center"
                  @click="editUserDescription()"
                >
                  <span>Save</span>
                </button>
              </div>
            </div>
          </div>

          <!-- SKILLS SECTION -->
          <div v-if="!editSkills">
            <div
              class="cursor-pointer relative bg-white shadow-md hover:shadow-xl transition duration-200 ease-in-out rounded-lg"
            >
              <div class="px-4 py-5 sm:p-6 mb-0">
                <div class="flex justify-between">
                  <h3 class="text-xl leading-6 font-bold text-gray-900 mb-3 mt-2">Skills</h3>
                  <div>
                    <p @click="editSkills = !editSkills" class="text-sm text-gray-500">Edit</p>
                  </div>
                </div>
                <div>
                  <!-- <ProjectCardSkillsList /> -->
                  <div>
                    <div class="flex flex-col w-full">
                      <div class="h-0 flex-1 flex flex-col">
                        <div class="pr-3 pb-3">
                          <div class="flex flex-wrap">
                            <div
                              v-for="(skill, key) in skz"
                              v-bind:key="key"
                              class="flex items-center my-1 mr-1 font-medium py-2 px-4 bg-white rounded-full text-blue-400 bg-blue-100"
                            >
                              <div
                                class="text-xs font-normal leading-none max-w-full flex-initial"
                              >{{ skill }}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-if="!skz.length" class="rounded-md bg-blue-50 p-4">
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

          <!-- EDIT SKILLS SECTION -->
          <div v-if="editSkills">
            <div
              class="cursor-pointer relative bg-white shadow-md hover:shadow-xl transition duration-200 ease-in-out rounded-lg"
            >
              <div class="p-6 mb-0 flex flex-col space-y-5">
                <h3 class="text-xl leading-6 font-bold text-gray-900 mt-2">Skills</h3>
                <div>
                  <!-- <EditProfileSkills /> -->
                  <div>
                    <div class="flex flex-col text-sm">
                      <div class="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4">
                        <div class="w-full md:w-2/4">
                          <label
                            class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
                            for="grid-state"
                          >Category</label>
                          <div class="relative">
                            <select
                              class="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-state"
                              v-model="selected"
                              @change="onChange()"
                            >
                              <option v-for="(item, key) in category" v-bind:key="key">{{ item }}</option>
                              <option value disabled hidden>Select Category</option>
                            </select>
                            <div
                              class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                            >
                              <svg
                                class="fill-current h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>

                        <div class="w-full md:w-2/4">
                          <label
                            for="title"
                            class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
                          >What skills are required?</label>
                          <div id="continue1">
                            <vue-tags-input
                              style="max-width:100%!important;"
                              id="tags"
                              autocomplete="off"
                              v-model="tag"
                              :disabled="disabled"
                              :tags="tags"
                              :autocomplete-items="filteredItems"
                              :add-only-from-autocomplete="true"
                              @tags-changed="(newTags) => (tags = newTags)"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="mx-6 mb-5 rounded flex items-center bg-blue-300 text-white text-sm font-semibold px-4 py-3 cursor-default"
                role="alert"
              >
                <svg
                  class="fill-current w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"
                  />
                </svg>
                <p>
                  Please make sure a category is selected before searching for
                  skills.
                </p>
              </div>
              <div class="flex justify-end pb-6 pr-6 space-x-4">
                <button
                  @click="editSkills = false"
                  class="bg-gray-200 text-gray-800 font-bold text-sm tracking-wider py-2 px-4 rounded-lg flex items-center"
                >
                  <span>Cancel</span>
                </button>
                <button
                  @click="editUserSkills"
                  class="bg-green-500 text-white font-bold text-sm tracking-wider py-2 px-4 rounded-lg flex items-center"
                >
                  <span>Save</span>
                </button>
              </div>
            </div>
          </div>

          <!-- EXPERIENCES SECTION -->
          <div>
            <div
              class="cursor-pointer relative bg-white shadow-md hover:shadow-xl transition duration-200 ease-in-out rounded-lg"
            >
              <div class="px-4 py-5 sm:p-6 mb-0">
                <div class="flex justify-between">
                  <h3 class="text-xl leading-6 font-bold text-gray-900 mb-3 mt-2">Experiences</h3>
                  <div
                    @click="editExperiencesSection = !editExperiencesSection"
                    class="text-sm text-gray-500"
                  >Add More</div>
                </div>
                <div
                  v-for="(item, key) in this.profileModel.experience"
                  v-bind:key="key"
                  class="mt-0 mb-3 max-w-full text-sm leading-5 text-gray-600"
                >
                  <div class="flex justify-between">
                    <div class="font-bold">{{ item.title }}</div>
                    <div @click="removeExperience(key)" class="text-sm text-gray-500">Remove</div>
                  </div>
                  <div class="py-2">
                    <div class="text-xs text-gray-600">{{ item.institutionName }}</div>
                    <div class="text-xs text-gray-400">{{ item.startTime }} - {{ item.endTime }}</div>
                  </div>
                  <div>{{ item.description }}</div>
                </div>
                <div v-if="!this.profileModel.experience.length" class="rounded-md bg-blue-50 p-4">
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

          <!-- EDIT EXPERIENCES SECTION -->
          <div v-if="editExperiencesSection">
            <div
              class="cursor-pointer relative bg-white shadow-md hover:shadow-xl transition duration-200 ease-in-out rounded-lg"
            >
              <div class="p-6 mb-0 flex flex-col space-y-5">
                <h3 class="text-xl leading-6 font-bold text-gray-900 mt-2">Experiences</h3>
                <div
                  class="flex flex-col md:flex-row space-x-0 md:space-x-5 space-y-8 md:space-y-0"
                >
                  <div class="w-full lg:w-1/2 relative">
                    <span class="text-sm font-bold text-gray-600">Title</span>
                    <input
                      id="first_name"
                      class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      placeholder="Enter your position"
                      v-model="employmentModel.title"
                    />
                  </div>
                  <div class="w-full lg:w-1/2 relative">
                    <span class="text-sm font-bold text-gray-600">Company</span>
                    <input
                      id="first_name"
                      class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      placeholder="Enter company name"
                      v-model="employmentModel.institutionName"
                    />
                  </div>
                </div>
                <div
                  class="flex flex-col md:flex-row space-x-0 md:space-x-5 space-y-8 md:space-y-0"
                >
                  <div class="w-full lg:w-1/2 relative">
                    <span class="text-sm font-bold text-gray-600">Start</span>
                    <vc-date-picker
                      class="block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      v-model="employmentModel.startTime"
                    ></vc-date-picker>
                  </div>
                  <div class="w-full lg:w-1/2 relative">
                    <span class="text-sm font-bold text-gray-600">End</span>
                    <vc-date-picker
                      class="block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      v-model="employmentModel.endTime"
                    ></vc-date-picker>
                  </div>
                </div>
                <div
                  class="flex flex-col md:flex-row space-x-0 md:space-x-5 space-y-8 md:space-y-0"
                >
                  <div class="w-full relative">
                    <span class="text-sm font-bold text-gray-600">Description</span>
                    <textarea
                      placeholder="Describe your work experience"
                      id="about"
                      rows="3"
                      class="form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      v-model="employmentModel.description"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="flex justify-end pb-6 pr-6 space-x-4">
                <button
                  @click="editExperiencesSection = false"
                  class="bg-gray-200 text-gray-800 font-bold text-sm tracking-wider py-2 px-4 rounded-lg flex items-center"
                >
                  <span>Cancel</span>
                </button>
                <button
                  @click="addUserExperience"
                  class="bg-green-500 text-white font-bold text-sm tracking-wider py-2 px-4 rounded-lg flex items-center"
                >
                  <span>Save</span>
                </button>
              </div>
            </div>
          </div>

          <!-- EDUCATION SECTION -->
          <div>
            <div
              class="cursor-pointer relative bg-white shadow-md hover:shadow-xl transition duration-200 ease-in-out rounded-lg"
            >
              <div class="px-4 py-5 sm:p-6 mb-0">
                <div class="flex justify-between">
                  <h3 class="text-xl leading-6 font-bold text-gray-900 mb-3 mt-2">Education</h3>
                  <div
                    @click="editEducation = !editEducation"
                    class="text-sm text-gray-500"
                  >Add Education</div>
                </div>
                <div
                  v-for="(item, key) in this.profileModel.education"
                  v-bind:key="key"
                  class="mt-0 mb-3 max-w-full text-sm leading-5 text-gray-600"
                >
                  <div class="flex justify-between" @click="RemoveEducation(key)">
                    <div class="font-bold">{{ item.degree }}</div>
                    <div class>Remove</div>
                  </div>
                  <div class="py-2">
                    <div class="text-xs text-gray-600">{{ item.universityName }}, {{ item.country }}</div>
                    <div class="text-xs text-gray-400">{{ item.startTime }} - {{ item.endTime }}</div>
                  </div>
                </div>
                <div v-if="!this.profileModel.education.length" class="rounded-md bg-blue-50 p-4">
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
                      <p class="text-sm leading-5 text-blue-700">No educations have been added.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- EDIT EDUCATION SECTION -->
          <div v-if="editEducation">
            <div
              class="cursor-pointer relative bg-white shadow-md hover:shadow-xl transition duration-200 ease-in-out rounded-lg"
            >
              <div class="p-6 mb-0 flex flex-col space-y-5">
                <h3 class="text-xl leading-6 font-bold text-gray-900 mt-2">Education</h3>
                <div
                  class="flex flex-col md:flex-row space-x-0 md:space-x-5 space-y-8 md:space-y-0"
                >
                  <div class="w-full lg:w-1/2 relative">
                    <span class="text-sm font-bold text-gray-600">Country</span>
                    <div class="rounded-md shadow-sm">
                      <select
                        class="block form-select w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        v-model="educationModel.country"
                        id="grid-state"
                      >
                        <option value="Albania">Albania</option>
                        <option value="Kosovo">Kosovo</option>
                        <option value="Germany">Germany</option>
                      </select>
                    </div>
                  </div>
                  <div class="w-full lg:w-1/2 relative">
                    <span class="text-sm font-bold text-gray-600">University or College</span>
                    <input
                      id="first_name"
                      v-model="educationModel.universityName"
                      class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      placeholder="Enter university or college"
                    />
                  </div>
                </div>
                <div
                  class="flex flex-col md:flex-row space-x-0 md:space-x-5 space-y-8 md:space-y-0"
                >
                  <div class="w-full relative">
                    <span class="text-sm font-bold text-gray-600">Degree</span>
                    <input
                      id="first_name"
                      v-model="educationModel.degree"
                      class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      placeholder="Enter degree"
                    />
                  </div>
                </div>
                <div
                  class="flex flex-col md:flex-row space-x-0 md:space-x-5 space-y-8 md:space-y-0"
                >
                  <div class="w-full lg:w-1/2 relative">
                    <span class="text-sm font-bold text-gray-600">Start</span>
                    <vc-date-picker
                      class="block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      v-model="educationModel.startTime"
                    ></vc-date-picker>
                  </div>
                  <div class="w-full lg:w-1/2 relative">
                    <span class="text-sm font-bold text-gray-600">End</span>
                    <vc-date-picker
                      class="block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      v-model="educationModel.endTime"
                    ></vc-date-picker>
                  </div>
                </div>
              </div>
              <div class="flex justify-end pb-6 pr-6 space-x-4">
                <button
                  @click="editEducation = false"
                  class="bg-gray-200 text-gray-800 font-bold text-sm tracking-wider py-2 px-4 rounded-lg flex items-center"
                >
                  <span>Cancel</span>
                </button>
                <button
                  @click="addEducation()"
                  class="bg-green-500 text-white font-bold text-sm tracking-wider py-2 px-4 rounded-lg flex items-center"
                >
                  <span>Save</span>
                </button>
              </div>
            </div>
          </div>

          <!-- LANGUAGES SECTION -->
          <div class="bg-white shadow rounded-lg">
            <div class="px-4 py-5 sm:p-6 mb-0">
              <div class="flex justify-between">
                <h3 class="text-xl leading-6 font-bold text-gray-900 mb-3 mt-2">Languages</h3>
                <div
                  @click="addLang = !addLang, addLanguagesToLanguageBar()"
                  class="text-sm text-gray-500 cursor-pointer"
                >Add Language</div>
              </div>
              <div class="mt-0 mb-3 max-w-full text-sm leading-5 text-gray-500">
                <div class="flex">
                  <div
                    v-for="(item, key) in this.profileModel.languages"
                    v-bind:key="key"
                    class="px-4 rounded-full border border-blue-300 bg-blue-200 text-blue-600 py-1 flex mr-2"
                  >
                    <div>{{ item }}</div>
                    <div @click="removeLang(key)" class="pl-2">
                      <span
                        class="iconify"
                        data-icon="bi:x"
                        data-inline="false"
                        style="color: #4576ff;"
                        data-width="20"
                        data-height="20"
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="!this.profileModel.languages.length" class="rounded-md bg-blue-50 p-4">
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
                    <p class="text-sm leading-5 text-blue-700">No languages have been added.</p>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="addLang" class="px-6 pb-8">
              <div
                class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2 mt-0"
              >Add a language</div>

              <div class="mb-10">
                <multiselect
                  v-model="value"
                  tag-placeholder="Add this as new language"
                  placeholder="Search or add a language"
                  label="name"
                  track-by="code"
                  :options="options"
                  :multiple="true"
                  :taggable="true"
                  @tag="addTag"
                ></multiselect>
              </div>

              <div class="flex justify-end my-5">
                <button
                  @click="addLang = false"
                  class="bg-white text-red-500 font-semibold text-sm tracking-wider py-2 px-4 rounded-lg flex items-center mr-1"
                >
                  <span>Cancel</span>
                </button>
                <button
                  class="bg-green-500 text-white font-bold text-sm tracking-wider py-2 px-8 rounded-lg flex items-center"
                  @click="addLanguage()"
                >
                  <span>Save</span>
                </button>
              </div>
            </div>
          </div>

          <!-- REVIEW SECTION -->
          <div class="py-0 mb-0">
            <div class="flex flex-col justify-start mb-3 mt-0">
              <div class="flex mt-0">
                <div class="flex shadow rounded-lg my-0 w-full bg-white">
                  <div class="items-start px-4 py-6 w-full">
                    <div class="flex justify-between items-center">
                      <div
                        class="mb-5 text-xl leading-6 font-bold text-gray-900 mb-3 mt-2 ml-5"
                      >Latest Reviews</div>
                      <div
                        @click="
                          $router.push({
                            path: `/profile/user/${profileModel.userName}/reviews`,
                          })
                        "
                        class="border border-green-400 text-sm px-5 py-1 rounded text-green-500 font-semibold hover:bg-green-400 hover:text-white cursor-pointer"
                      >Read all {{ reviewdata.length }} reviews</div>
                    </div>
                    <div class="flex flex-wrap w-full">
                      <div class="w-1/2 px-5" v-for="review in reviewdata" :key="review.id">
                        <div class="mb-10">
                          <small class="text-xs text-green-500">
                            {{
                            review.dateCreated | moment("from", "now")
                            }}
                          </small>
                          <div class="flex items-center justify-between">
                            <h2
                              class="font-semibold text-gray-900 -mb-2"
                            >{{ review.reviewerUserName }}</h2>
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
                          <p class="mt-3 text-gray-700 text-sm mb-10 comments">{{ review.comments }}</p>
                        </div>
                      </div>
                    </div>
                    <div v-if="!reviewdata.length" class="rounded-md bg-blue-50 p-4 ">
                      <div class="flex">
                        <div class="flex-shrink-0">
                          <svg
                            class="h-5 w-5 text-blue-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                        <div class="ml-3 flex-1 md:flex md:justify-between">
                          <p class="text-sm leading-5 text-blue-700">You have not received any reviews</p>
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
</template>

<script>
import { mapActions } from "vuex";
// import EditProfileSkills from "@/components/SharedComponents/EditProfileSkills";
// import ProjectCardSkillsList from "@/components/SharedComponents/ProjectCardSkillsList";
import VueTagsInput from "@johmun/vue-tags-input";
import Multiselect from "vue-multiselect";
export default {
  name: "My Project",
  data() {
    return {
      value: [],
      options: [
        { name: "Russian", code: "Russian" },
        { name: "Albanian", code: "Albanian" },
        { name: "Greek", code: "Greek" },
      ],
      reviewdata: [],
      newLang: "",
      addLang: false,
      editEducation: false,
      editSkills: false,
      checked: true,
      disabled: true,
      ip_data: "",
      ui_skills: [],
      all_data_skills: [],
      category: [],
      skills: [],
      skill: [],
      ski: [],
      skz: [],
      tag: "",
      tags: [],
      selected: "",
      autocompleteItems: [],
      all_skills: [],

      editImage: false,
      editTitleSection: false,
      editSkillsSection: false,
      editReviewSection: true,
      editExperiencesSection: false,
      b64files: [],
      shortSelfDesc: "",
      longSelfDesc: "",
      employmentModel: {
        description: "",
        endTime: "",
        experienceType: "EMPLOYMENT",
        id: "",
        startTime: "",
        title: "",
        institutionName: "",
      },
      educationModel: {
        id: "",
        country: "",
        degree: "",
        universityName: "",
        endTime: "",
        startTime: "",
        experienceType: "EDUCATION",
      },
      profileModel: {
        userName: "",
        firstName: "",
        lastName: "",
        email: "",
        reviewScore: 0,
        base64CoverPhoto: "",
        base64ProfilePhoto: "",
        experience: [],
        education: [],
        gender: "",
        displayFreeLancerToBrowse: "UNDEFINED",
        skillsModel: [
          {
            id: "",
            title: "",
            ico: "",
          },
        ],
        languages: [],
        longSelfDescription: "",
        phoneNumber: "",
        shortSelfDescription: "",
        state: "",
        webUrl: "",
        memberSince: "",
      },
    };
  },
  components: {
    // ProjectCardSkillsList,
    // EditProfileSkills,
    VueTagsInput,
    Multiselect,
  },
  computed: {
    filteredItems() {
      return this.autocompleteItems.filter((i) => {
        return i.text.toLowerCase().indexOf(this.tag.toLowerCase()) !== -1;
      });
    },
  },
  methods: {
    ...mapActions("profile", [
      "moduleGetUserProfile",
      "moduleUpdateUserProfile",
      "moduleDisplayToBrowseFreeLancers",
    ]),
    ...mapActions("experience", [
      "moduleAddEmployment",
      "moduleAddEducation",
      "moduleRemoveEducation",
      "moduleRemoveEmployment",
      "moduleEditEducation",
    ]),
    ...mapActions("projectCategory", ["moduleAllProjectCategory"]),
    ...mapActions("skill", ["moduleEditSkill"]),
    ...mapActions("review", [
      "moduleGetMyReviews",
      "moduleGetReviewsThatIHaveMade",
    ]),

    onChange() {
      this.disabled = false;
      this.skill = [];
      this.ski = [];
      this.skiModel = [];

      this.all_skills = [];

      //get all the categories data from API
      this.moduleAllProjectCategory().then((data) => {
        this.all_data_skills = data.data;

        // console.log(this.all_data_skills);
        //loop through all the items in category array and find the one whose title = selected [in the ui]
        //get the skillModel of that particular category
        //get the titles of all skills in the skillModel of that category and put them in autocompleteItems.
        for (var i = 0; i < this.all_data_skills.length; i++) {
          if (this.all_data_skills[i].title == this.selected) {
            this.skill.push(this.all_data_skills[i].skillModel);
            for (var k = 0; k < this.skill[0].length; k++) {
              this.ski.push(this.skill[0][k].title);
              this.skiModel.push(this.skill[0][k]);
              this.autocompleteItems = this.ski.map((o) => ({ text: o }));
            }
          }
        }

        for (var j in this.all_data_skills) {
          this.all_skills.push(this.all_data_skills[j].skillModel);
        }
      });
    },
    editUserDescription() {
      if (this.profileModel.shortSelfDescription != "") {
        // this.profileModel.shortSelfDescription = this.shortSelfDesc;
        // this.profileModel.longSelfDescription = this.longSelfDesc;
        this.moduleUpdateUserProfile({ profileModel: this.profileModel });
        this.editTitleSection = false;
      } else {
        alert("headline cannot be empty!");
      }
    },
    addLanguage() {
      let langArr = [];
      for (let item in this.value) {
        langArr.push(this.value[item].name);
      }

      this.profileModel.languages = langArr;
      console.log(this.profileModel.languages);

      this.moduleUpdateUserProfile({ profileModel: this.profileModel });

      this.value = "";
      this.addLang = false;

      location.reload();
    },
    removeLang(key) {
      this.profileModel.languages.splice(key, 1);
      this.moduleUpdateUserProfile({ profileModel: this.profileModel });
      // location.reload();
    },
    showHideMyProfileInBrowse() {
      var displayFreeLancer = {
        freeLancerToBrowse: this.checked ? "DISPLAY" : "DO_NOT_DISPLAY",
      };
      this.moduleDisplayToBrowseFreeLancers({ displayFreeLancer });
    },
    editUserName() {
      this.moduleUpdateUserProfile({ profileModel: this.profileModel });
    },
    // updateUserLocation(userLocation) {
    //   this.profileModel.state = userLocation;
    //   this.moduleUpdateUserProfile({ profileModel: this.profileModel });
    // },
    editUserSkills() {
      var itemz = [];
      var selected_skills = [];
      if (this.tags.length) {
        for (var i = 0; i < this.tags.length; i++) {
          selected_skills.push(this.tags[i].text);
          var temp_itemz = [];
          for (var j = 0; j < selected_skills.length; j++) {
            for (let s in this.all_skills) {
              temp_itemz.push(
                this.all_skills[s].find((x) => x.title === selected_skills[j])
              );
            }

            itemz = temp_itemz;

            var filtered_itemz = itemz.filter(function (el) {
              return el != null;
            });

            this.profileModel.skillsModel = filtered_itemz;
          }
        }

        this.moduleUpdateUserProfile({ profileModel: this.profileModel });
        location.reload();
        // console.log(this.profileModel);
      } else {
        this.profileModel.skillsModel = selected_skills; //empty
        this.moduleUpdateUserProfile({ profileModel: this.profileModel });
        location.reload();
      }
    },
    addEducation() {
      console.log(this.educationModel);
      this.moduleAddEducation({ educationModel: this.educationModel });
      location.reload();
    },
    RemoveEducation(key) {
      this.educationModel = this.profileModel.education[key];
      this.moduleRemoveEducation({ educationModel: this.educationModel });
      location.reload();
    },
    removeExperience(key) {
      this.employmentModel = this.profileModel.experience[key];
      console.log(this.employmentModel);
      this.moduleRemoveEmployment({ experienceModel: this.employmentModel });
      location.reload();
    },
    addUserExperience() {
      console.log(this.employmentModel);
      this.moduleAddEmployment({ employmentModel: this.employmentModel });
      location.reload();
    },
    rmProfileImage() {
      this.base64files = [];
      this.profileModel.base64ProfilePhoto = this.b64files[
        this.b64files.length - 1
      ];
      this.moduleUpdateUserProfile({ profileModel: this.profileModel });
    },
    Images_onFileChanged(event) {
      this.editImage = false;
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
          this.profileModel.base64ProfilePhoto = this.b64files[
            this.b64files.length - 1
          ];
          // console.log(this.profileModel.base64ProfilePhoto);
          this.moduleUpdateUserProfile({ profileModel: this.profileModel });
        };
        reader.readAsDataURL(input);
      }
    },
    addLanguagesToLanguageBar() {
      console.log(this.profileModel.languages);
      for (let item in this.profileModel.languages) {
        this.value.push({
          name: this.profileModel.languages[item],
          code: this.profileModel.languages[item],
        });
        // console.log(this.value)
      }
    },
  },
  mounted() {
    this.moduleGetMyReviews().then((data) => {
      this.reviewdata = data.data;
      console.log(this.reviewdata, "moduleGetMyReviews");
    });

    this.moduleAllProjectCategory().then((data) => {
      var all_data = data.data;
      for (var i = 0; i < all_data.length; i++) {
        this.category.push(all_data[i].title);
      }
    });

    this.moduleGetUserProfile().then((data) => {
      this.profileModel = data.data;
      console.log(data.data);

      this.checked = this.profileModel.displayFreeLancerToBrowse === "DISPLAY";

      //  this.value = {name:'whatever', code:'meh'}

      if (this.profileModel.shortSelfDescription == null) {
        this.editTitleSection = true;
      }

      //push skill into tags
      for (let m in this.profileModel.skillsModel) {
        this.skz.push(this.profileModel.skillsModel[m].title);
        this.tags = this.skz.map((o) => ({ text: o }));
      }
    });
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
.profileImage {
  object-fit: cover;
  height: 240px;
  width: 240px;
  border-radius: 50%;
}

.cover-overlay {
  background-image: linear-gradient(0deg, rgb(0 0 0 / 0.5), transparent);
}

.comments {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
}
</style>
