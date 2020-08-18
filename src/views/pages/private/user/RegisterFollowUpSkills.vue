<template>
  <div class="h-screen flex justify-center">
    <div class="w-2/12 mt-16">
      <div
        class="cursor-pointer relative bg-white shadow hover:shadow-lg transition duration-200 ease-in-out rounded-lg"
      >
        <div class="p-6 mb-0 flex flex-col space-y-5">
          <h3 class="text-xl leading-6 font-bold text-gray-900 mt-2">Category</h3>
          <div class="text-sm text-gray-600">Any</div>
          <div v-for="(item, key) in all_data_skills" v-bind:key="key">
            <div @click="onCategorySelect(item)" class="text-sm text-gray-600">{{item.title}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-1/2 mt-16 ml-5">
      <div
        class="cursor-pointer relative bg-white shadow hover:shadow-lg transition duration-200 ease-in-out rounded-lg"
      >
        <div class="p-6 mb-0 flex flex-col space-y-5">
          <h3 class="text-xl leading-6 font-bold text-gray-900 mt-2">Skills</h3>

          <div>
            <vue-tags-input
              style="max-width:100%!important;"
              id="tags"
              autocomplete="off"
              v-model="tag"
              :disabled="disabled"
              :tags="tags"
              :autocomplete-items="filteredItems"
              :add-only-from-autocomplete="true"
              @tags-changed="newTags => tags = newTags"
            />
            <div class="text-sm text-gray-500 mt-5">Select from list</div>
            <div class="flex">
              <div v-for="(skill,k) in skills" v-bind:key="k">
                <div
                  @click="onSkillSelect(skill)"
                  class="px-5 py-1 bg-green-400 mr-3 rounded-full mt-5 text-white text-sm hover:bg-green-500"
                >{{skill.title}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-end">
        <button
          @click="NextStep()"
          class="px-5 py-1 bg-blue-700 hover:bg-blue-500 mt-5 text-white rounded"
        >Next Step</button>
      </div>
    </div>
  </div>
</template>

<script>
import VueTagsInput from "@johmun/vue-tags-input";
import { mapActions } from "vuex";
export default {
  data: () => ({
    chosenSkills: [],
    showSkillsArea: false,
    ski: [],
    skiModel: [],
    all_data_skills: [],
    skill: [],
    all_data_skills_titles: [],
    skills: [],
    skill_titles: [],
    freelancer: false,
    employer: false,
    noError: false,
    tag: "",
    tags: [],
    autocompleteItems: [],
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
  computed: {
    filteredItems() {
      return this.autocompleteItems.filter((i) => {
        return i.text.toLowerCase().indexOf(this.tag.toLowerCase()) !== -1;
      });
    },
  },
  components: {
    VueTagsInput,
  },
  methods: {
    ...mapActions("projectCategory", ["moduleAllProjectCategory"]),
    ...mapActions("profile", [
      "moduleGetUserProfile",
      "moduleUpdateUserProfile",
      "moduleDisplayToBrowseFreeLancers",
    ]),
    wantToWork() {
      this.freelancer = true;
      this.employer = false;
    },
    wantToHire() {
      this.employer = true;
      this.freelancer = false;
    },
    onCategorySelect(item) {
      this.showSkillsArea = true;

      this.skills = item.skillModel;
      this.selected = item;

      this.ski = [];
      for (let i in this.skills) {
        this.ski.push(this.skills[i].title);
        this.skill_titles.push(this.skills[i].title);
      }
      this.autocompleteItems = this.ski.map((o) => ({ text: o }));
    },
    onSkillSelect(skill) {
      if (this.tags.includes(skill.title) == false) {
        this.tags.push({ text: skill.title });
      }
      console.log(skill);
      this.chosenSkills.push(skill);
    },
    NextStep() {
      var itemz = [];
      var selected_skills = [];
      if (this.tags.length) {
        for (var i = 0; i < this.tags.length; i++) {
          selected_skills.push(this.tags[i].text);
          var temp_itemz = [];
          for (var j = 0; j < selected_skills.length; j++) {
            temp_itemz.push(
              this.chosenSkills.find((x) => x.title === selected_skills[j])
            );

            itemz = temp_itemz;

            var filtered_itemz = itemz.filter(function (el) {
              return el != null;
            });

            this.profileModel.skillsModel = filtered_itemz;
          }
        }
        this.moduleUpdateUserProfile({ profileModel: this.profileModel });
        this.$router.push({ path: `/register/new/experience` });
      } else {
        this.$router.push({ path: `/register/new/experience` });
      }
    },
  },
  mounted() {
    this.moduleAllProjectCategory().then((data) => {
      this.all_data_skills = data.data;
    });
  },
};
</script>

<style scoped>
.cc {
  height: fit-content;
}

.act {
  /* background-color: #e1effe; */
  border: solid 2px #4299e1 !important;
}
</style>