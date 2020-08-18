<template>
  <div class="h-screen flex flex-col items-center">
    <!-- HEADLINE SECTION -->

    <div class="w-1/2 mt-10">
      <div
        class="cursor-pointer relative bg-white shadow-md hover:shadow-xl transition duration-200 ease-in-out rounded-lg"
      >
        <div class="p-6 mb-0">
          <div class="text-xl leading-6 font-bold text-gray-900 mb-10">
            <span class="text-sm font-bold text-gray-600">Professional Headline</span>
            <input
              v-model="profileModel.shortSelfDescription"
              id="first_name"
              class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              placeholder="Enter professional headline"
            />
          </div>
          <div>
            <div class="mt-0 mb-10 max-w-full text-sm leading-5 text-gray-500">
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
          <div class="flex">
            <div class="text-xl w-1/2 leading-6 font-bold text-gray-900 mb-10 mr-3">
              <span class="text-sm font-bold text-gray-600">Location</span>
              <input
                v-model="profileModel.state"
                id="first_name"
                class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                placeholder="Enter professional headline"
              />
            </div>

            <div class="text-xl w-1/2 leading-6 font-bold text-gray-900 mb-10 ml-3">
              <span class="text-sm font-bold text-gray-600">Phone number</span>
              <VuePhoneNumberInput v-model="yourValue" />
            </div>
          </div>

          <div class="flex">
            <div class="text-xl flex flex-col w-1/2 leading-6 font-bold text-gray-900 mb-10 mr-3">
              <span class="text-sm font-bold text-gray-600">Gender</span>
              <select v-model="selected" class="border text-gray-600 rounded text-sm py-2">
                <option disabled value>Please select one</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            <div class="text-xl w-1/2 leading-6 font-bold text-gray-900 mb-10 ml-3">
              <span class="text-sm font-bold text-gray-600">Birthday</span>
              <vc-date-picker
                class="block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                v-model="Birthday"
              ></vc-date-picker>
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
            @click="editUserDescription(), $router.push({ path: `/register/new/skills` })"
          >
            <span>Save</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapActions } from "vuex";
import VuePhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";
export default {
  data() {
    return {
      selected: '',
      Birthday: new Date(),
      yourValue: "",
      editTitleSection: false,
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
  components: { VuePhoneNumberInput },
  methods: {
    ...mapActions("profile", [
      "moduleGetUserProfile",
      "moduleUpdateUserProfile",
    ]),

    editUserDescription() {
      if (this.profileModel.shortSelfDescription != "") {
        this.moduleUpdateUserProfile({ profileModel: this.profileModel });
        this.editTitleSection = false;
      } else {
        alert("headline cannot be empty!");
      }
    },
    updateUserLocation(userLocation) {
      this.profileModel.state = userLocation;
      this.moduleUpdateUserProfile({ profileModel: this.profileModel });
    },
  },
  mounted() {
    let self = this;

    this.moduleGetUserProfile().then((data) => {
      this.profileModel = data.data;
      console.log(data.data);
    });

    if (this.profileModel.state == "") {
      fetch("https://api.ipify.org?format=json")
        .then((x) => x.json())
        .then(({ ip }) => {
          this.term = ip;

          fetch(
            "http://api.ipstack.com/" +
              this.term +
              "?access_key=7a12a7849baf735718f66785a160d72f"
          )
            .then(function (response) {
              return response.json();
            })
            .then(function (data) {
              let userLocation = data.city + ", " + data.country_name;

              console.log(userLocation);
              self.updateUserLocation(userLocation);
            });
        });
    }
  },
};
</script>