<template>
  <div class="flex items-center flex-1">
    <div class="flex-1">
      <input
        v-on:input="getSearchData()"
        v-model="searchTerm"
        type="text"
        class="rounded-md rounded-tr-none rounded-br-none focus:outline-none p-4 w-full"
        placeholder="Search for freelancers"
      />
    </div>
    <div class="border-gray-100 border-l border-r lg:border-r-0 flex items-center pl-4 text-sm">
      <span class="text-gray-500">Sort by:</span>
      <div class="relative self-stretch">
        <select
          class="appearance-none w-full h-full font-semibold text-blue-800 px-2 pr-8 leading-tight focus:outline-none bg-white"
          id="grid-state"
          v-model="sortBy"
          @change="onChange($event)"
        >
          <option value="latest">Latest</option>
          <option value="oldest">Old</option>
          <option value disabled hidden>Latest</option>
        </select>
        <div
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-blue-800"
        >
          <svg class="fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    sortBy: "",
    searchTerm:"",
    empty: "empty"
  }),
  methods: {
    ...mapActions("profile", ["moduleSearchUserProfileByUserName"]),
    getSearchData: function () {
      if (this.searchTerm != "") {
        this.moduleSearchUserProfileByUserName({
          userName: this.searchTerm,
        }).then((data) => {
          var search_data = data.data;
          // console.log(search_data);
          this.$root.$emit("freelancersearchData", search_data);
        });
      } else {
        this.$root.$emit("freelancersearchData", this.empty);
      }
    },
    onChange(event) {
      // console.log(event.target.value);
      this.$root.$emit("sortBy", event.target.value);
    },
  },
};
</script>

<style>
</style>