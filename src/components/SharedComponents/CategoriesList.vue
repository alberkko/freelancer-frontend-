<template>
  <div>
    <div>
      <div class="uppercase text-sm font-bold text-blue-900 mb-2">Category</div>
      <div class="flex flex-col">
        <div class="h-0 flex-1 flex flex-col">
          <div class="text-sm">
            <div class="w-full">
              <div class="relative">
                <select
                  class="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  v-model="selected"
                  @change="onChange()"
                >
                  <option v-for="(item, key) in category" v-bind:key="key">{{item}}</option>
                  <option value disabled hidden>Any</option>
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
          </div>
        </div>
      </div>
    </div>
    <div class="mt-5">
      <div class="uppercase text-sm font-bold text-blue-900 mb-2">Skills</div>
      <div class="text-sm">
        <vue-tags-input
          id="tags"
          autocomplete="off"
          v-model="tag"
          :tags="tags"
          :autocomplete-items="filteredItems"
          @tags-changed="updateValue"
        />
      </div>
      <div
        @click="clearTags()"
        class="text-xs bg-blue-800 rounded-sm w-2/6 pl-3 py-1 mt-2 text-white cursor-pointer"
      >Clear Skills</div>
    </div>
  </div>
</template>
 
<script>
import { mapActions } from "vuex";
import VueTagsInput from "@johmun/vue-tags-input";
export default {
  data: () => ({
    tag: "",
    tags: [],
    autocompleteItems: [],
    selected: "",
    all_data: [],
    all_data_skills: [],
    category: [],
    skills: [],
    skill: [],
    ski: [],
  }),
  components: { VueTagsInput },
  computed: {
    filteredItems() {
      return this.autocompleteItems.filter((i) => {
        return i.text.toLowerCase().indexOf(this.tag.toLowerCase()) !== -1;
      });
    },
  },
  methods: {
    ...mapActions("projectCategory", ["moduleAllProjectCategory"]),

    onChange() {
      this.skill = [];
      this.ski = [];

      this.moduleAllProjectCategory().then((data) => {
        this.all_data_skills = data.data;
        for (var i = 0; i < this.all_data_skills.length; i++) {
          if (this.all_data_skills[i].title == this.selected) {
            this.$root.$emit("category_id", this.all_data_skills[i].id);
            this.skill.push(this.all_data_skills[i].skillModel);

            for (var k = 0; k < this.skill[0].length; k++) {
              var skillSelected = this.skill[0][k];
              this.ski.push({
                text: skillSelected.title,
                id: skillSelected.id,
              });

              this.autocompleteItems = this.ski.map((skill) => ({
                text: skill.text,
                id: skill.id,
              }));
            }
          }
        }
      });
    },
    clearTags() {
      this.tags = [];
      this.$root.$emit("update_tags", []);
    },
    updateValue(newTags) {
      
      this.$emit("updateTags", newTags);
      this.$root.$emit("update_tags", newTags.map(skill => skill.id));
    },
  },
  mounted() {
    this.moduleAllProjectCategory().then((data) => {
      var all_data = data.data;
      for (var i = 0; i < all_data.length; i++) {
        this.category.push(all_data[i].title);
      }
    });
  },
};
</script>

<style scoped>
.ti-content {
  padding-right: 5px;
}

.ti-input {
  padding-right: 5px;
  border: solid 1px rgb(180, 180, 180);
}

.ti-tag-5 {
  background-color: #f1f8ff !important;
  color: #d60303 !important;
  border-radius: 25px !important;
  padding-right: 0px !important;
  padding-left: 0px !important;
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  align-items: center;
}
</style>