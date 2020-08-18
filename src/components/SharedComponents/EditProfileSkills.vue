 <template>
  <div class="flex flex-col md:flex-row space-x-0 md:space-x-5 space-y-8 md:space-y-0">
    <div class="w-full lg:w-1/2 relative">
      <span class="text-sm font-bold text-gray-900">Categories</span>
      <div class="rounded-md shadow-sm">
        <select
          class="block form-select w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
          id="grid-state"
          @change="setSelectedSkills($event)"
        >
          <option
            v-for="category in projectCategory"
            :value="category.id"
            :key="category.id"
          >{{category.title}}</option>
        </select>
      </div>
    </div>
    <div class="w-full lg:w-1/2 relative">
      <span class="text-sm font-bold text-gray-900">Skills</span>
      <div class>
        <div class="text-sm h-full">
          <vue-tags-input
            class="vue-tags-input h-full m-0 max-w-none w-full"
            id="tags"
            autocomplete="off"
            v-model="skill"
            :tags="skills"
            :autocomplete-items="filteredItems"
            @tags-changed="skill => skills = skill"
          />
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
import VueTagsInput from "@johmun/vue-tags-input";
import { mapActions } from "vuex";
export default {
  data: () => ({
    skill: "",
    skills: [],
    projectCategory: []
  }),
  components: { VueTagsInput },
  computed: {
    filteredItems() {
      return this.skills.filter(i => {
        return i.toLowerCase().indexOf(this.skill.toLowerCase()) !== -1;
      });
    }
  },
  methods: {
    clearTags() {
      this.tags = [];
    },
    ...mapActions("projectCategory", ["moduleAllProjectCategory"]),
    setSelectedSkills(event) {
      this.skills = this.projectCategory
        .find(category => event.target.value === category.id)
        .skillModel
        .map(el => el.title);
    }
  },
  mounted() {
    this.moduleAllProjectCategory().then(data => {
      this.projectCategory = data.data;
    });
  }
};
</script>

<style scoped>
.vue-tags-input {
  max-width: none !important;
}

.ti-content {
  padding-right: 5px;
}

.ti-input {
  padding: 0 !important;
  border: 0 !important;
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