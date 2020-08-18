<template>
  <div class="h-screen flex justify-center">
    <div class="w-2/3 mt-16 ml-5">
      <!-- EXPERIENCES SECTION -->
      <div
        v-if="profileModel.experience.length"
        class="cursor-pointer relative bg-white shadow-md hover:shadow-xl transition duration-200 ease-in-out rounded-lg mb-16"
      >
        <div class="px-4 py-5 sm:p-6 mb-0">
          <div class="flex justify-between">
            <h3 class="text-xl leading-6 font-bold text-gray-900 mb-3 mt-2">Work Experiences</h3>
            <div
              @click="editExperiencesSection = !editExperiencesSection"
              class="text-sm text-gray-500"
            >Add More</div>
          </div>
          <div
            v-for="(item, key) in this.profileModel.experience"
            v-bind:key="key"
            class="mt-0 mb-3 max-w-full text-sm leading-5 text-gray-600 mb-10"
          >
            <div class="flex justify-between mt-5">
              <div class="font-bold">{{item.title}}</div>
              <div @click="removeExperience(key)" class="text-sm text-gray-500">Remove</div>
            </div>
            <div class="py-2">
              <div class="text-xs text-gray-600">{{item.institutionName}}</div>
              <div class="text-xs text-gray-400">{{item.startTime}} - {{item.endTime}}</div>
            </div>
            <div>{{item.description}}</div>
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

      <!-- EDIT EXPERIENCES SECTION -->
      <div v-if="!profileModel.experience.length || editExperiencesSection">
        <div
          class="cursor-pointer relative bg-white shadow-md hover:shadow-xl transition duration-200 ease-in-out rounded-lg"
        >
          <div class="p-6 mb-0 flex flex-col space-y-5">
            <h3
              v-if="!profileModel.education.length"
              class="text-xl leading-6 font-bold text-gray-900 mt-2"
            >Work Experiences</h3>
            <div class="flex flex-col md:flex-row space-x-0 md:space-x-5 space-y-8 md:space-y-0">
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
            <div class="flex flex-col md:flex-row space-x-0 md:space-x-5 space-y-8 md:space-y-0">
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
            <div class="flex flex-col md:flex-row space-x-0 md:space-x-5 space-y-8 md:space-y-0">
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
              @click="addUserExperience()"
              class="bg-green-500 text-white font-bold text-sm tracking-wider py-2 px-4 rounded-lg flex items-center"
            >
              <span>Save</span>
            </button>
          </div>
        </div>
      </div>

      <div v-if="profileModel.experience.length" class="flex justify-end">
        <button
          @click="$router.push({ path: `/register/new/education` })"
          class="px-5 py-1 bg-blue-700 hover:bg-blue-500 mt-5 text-white rounded"
        >Next Step</button>
      </div>

      <div v-else class="flex justify-between">
        <button
          @click="$router.push({ path: `/register/new/education` })"
          class="px-5 py-1 bg-blue-500 hover:bg-blue-500 mt-5 text-white rounded"
        >Skip</button>
        <button
          @click="$router.push({ path: `/register/new/education` })"
          class="px-5 py-1 bg-blue-700 hover:bg-blue-500 mt-5 text-white rounded"
        >Next Step</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    editExperiencesSection: false,
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
    employmentModel: {
      description: "",
      endTime: "",
      experienceType: "EMPLOYMENT",
      id: "",
      startTime: "",
      title: "",
      institutionName: "",
    },
  }),
  components: {},
  methods: {
    ...mapActions("projectCategory", ["moduleAllProjectCategory"]),
    ...mapActions("experience", [
      "moduleAddEmployment",
      "moduleAddEducation",
      "moduleRemoveEducation",
      "moduleRemoveEmployment",
      "moduleEditEducation",
    ]),
    ...mapActions("profile", [
      "moduleGetUserProfile",
      "moduleUpdateUserProfile",
      "moduleDisplayToBrowseFreeLancers",
    ]),

    addUserExperience() {
      console.log(this.employmentModel);
      if (this.employmentModel.title != "") {
        this.moduleAddEmployment({ employmentModel: this.employmentModel });
        location.reload();
      }
    },
    removeExperience(key) {
      this.employmentModel = this.profileModel.experience[key];
      console.log(this.employmentModel);
      this.moduleRemoveEmployment({ experienceModel: this.employmentModel });
      location.reload();
    },
  },
  mounted() {
    this.moduleGetUserProfile().then((data) => {
      this.profileModel = data.data;

      console.log(this.profileModel);
    });
  },
};
</script>

<style scoped>
</style>