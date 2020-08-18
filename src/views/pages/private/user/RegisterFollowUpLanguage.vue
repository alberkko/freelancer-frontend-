<template>
  <div class="h-screen flex justify-center">
    <div class="w-2/3 mt-16 ml-5">
      <!-- LANGUAGES SECTION -->
      <div class="bg-white shadow rounded-lg">
        <div class="px-4 py-5 sm:p-6 mb-0">
          <div class="flex justify-between">
            <h3 class="text-xl leading-6 font-bold text-gray-900 mb-3 mt-2 mb-10">Languages</h3>
          </div>
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
        </div>
      </div>

      <div v-if="profileModel.languages.length" class="flex justify-end">
        <button
          @click="$router.push({ path: `/register/new/membership` }), addLanguage()"
          class="px-5 py-1 bg-blue-700 hover:bg-blue-500 mt-5 text-white rounded"
        >Next Step</button>
      </div>

      <div v-else class="flex justify-between">
        <button
          @click="$router.push({ path: `/register/new/membership` })"
          class="px-5 py-1 bg-blue-500 hover:bg-blue-500 mt-5 text-white rounded"
        >Skip</button>
        <button
          @click="$router.push({ path: `/register/new/membership` }), addLanguage()"
          class="px-5 py-1 bg-blue-700 hover:bg-blue-500 mt-5 text-white rounded"
        >Next Step</button>
      </div>
    </div>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
import { mapActions } from "vuex";
export default {
  data: () => ({
    // code = id
    value: [],
    options: [
      { name: "Russian", code: "Russian" },
      { name: "Albanian", code: "Albanian" },
      { name: "Greek", code: "Greek" },
    ],
    newLang: "",
    addLang: false,
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
  }),
  components: { Multiselect },
  methods: {
    ...mapActions("projectCategory", ["moduleAllProjectCategory"]),
    ...mapActions("profile", [
      "moduleGetUserProfile",
      "moduleUpdateUserProfile",
      "moduleDisplayToBrowseFreeLancers",
    ]),

    addLanguage() {
      let langArr = [];
      for (let item in this.value) {
        langArr.push(this.value[item].name);
      }

      this.profileModel.languages = langArr;
      console.log(this.profileModel.languages);

      this.moduleUpdateUserProfile({ profileModel: this.profileModel });
      // location.reload();
      // this.newLang = "";
      // this.addLang = false;
    },
  },
  mounted() {
    this.moduleGetUserProfile().then((data) => {
      this.profileModel = data.data;
      console.log(this.profileModel);

      for (let i in this.profileModel.languages) {
        this.value.push({
          name: this.profileModel.languages[i],
          code: this.profileModel.languages[i],
        });
      }
    });
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
</style>