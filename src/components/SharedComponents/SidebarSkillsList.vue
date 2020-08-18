 <template>
  <div>
    <div class="uppercase text-sm font-bold text-blue-900 mb-2">Skills</div>
    <div class="w-64 text-sm">
      <vue-tags-input
        id="tags"
        autocomplete="off"
        v-model="tag"
        :tags="tags"
        :autocomplete-items="filteredItems"
        @tags-changed="newTags => tags = newTags"
      />
    </div>
    <div
      @click="clearTags()"
      class="text-xs bg-blue-800 rounded-sm w-2/6 pl-3 py-1 mt-2 text-white cursor-pointer"
    >Clear Skills</div>
  </div>
</template>
 
<script>
import VueTagsInput from "@johmun/vue-tags-input";
export default {
  data: () => ({
    tag: "",
    tags: ["javascript", "python"],
    autocompleteItems: [
      {
        text: "Css"
      },
      {
        text: "Javascript"
      },
      {
        text: "Java"
      },
      {
        text: "Web Design"
      },
      {
        text: "Spring"
      }
    ]
  }),
  components: { VueTagsInput },
  computed: {
    filteredItems() {
      return this.autocompleteItems.filter(i => {
        return i.text.toLowerCase().indexOf(this.tag.toLowerCase()) !== -1;
      });
    }
  },
  methods: {
    clearTags() {
      this.tags = [];
    }
  }
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