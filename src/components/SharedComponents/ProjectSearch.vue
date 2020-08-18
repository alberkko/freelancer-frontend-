<template>
  <div class="flex items-center flex-1">
    <div class="flex-1 flex items-center">
      <input
        v-on:input="getSearchData()"
        v-model="searchTerm"
        type="text"
        class="rounded-md rounded-tr-none rounded-br-none focus:outline-none p-4 w-full"
        placeholder="Search for projects"
      />
      <button @click="getSearchData" class>
        <span
          class="iconify my-5 mx-5"
          data-icon="bx:bx-search"
          data-inline="false"
          style="color: #0046AA;"
          data-width="24"
          data-height="24"
        ></span>
      </button>
    </div>
    <div
      class="border-gray-100 border-l border-r lg:border-r-0 hidden lg:flex items-center pl-4 text-sm"
    >
      <span class="text-gray-500">Sort by:</span>
      <div class="relative self-stretch">
        <select
          class="appearance-none w-full h-full font-semibold text-blue-800 px-2 pr-8 leading-tight focus:outline-none bg-white"
          id="grid-state"
          v-model="sortBy"
          @change="changeSortByProject"
        >
          <option value="NEWS_FIRST">Latest</option>
          <option value="LOWEST_PROJECT_FIRST">Lowest Price</option>
          <option value="HIGHEST_PROJECT_FIRST">Highest Price</option>
          <option value="LOWEST_BID_ENTRIES">Fewest Bids</option>
          <option value="HIGHEST_BID_ENTRIES">Most Bids</option>
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
export default {
  data: () => ({
    sortBy: "NEWS_FIRST",
    searchTerm: "",
    empty: "empty",
  }),
  methods: {
    getSearchData: function () {
      this.$root.$emit("projectTitleSearched", this.searchTerm);
    },
    changeSortByProject() {
      this.$root.$emit("sortBy", this.sortBy);
    },
  },
};
</script>

<style>
</style>