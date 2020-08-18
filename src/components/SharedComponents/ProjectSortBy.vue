<template>
  <div class="flex items-center flex-1 justify-end">
    <div class="border-gray-100 border-l border-r lg:border-r-0 flex items-center pl-4 text-sm">
      <span class="text-gray-500">Sort by:</span>
      <div class="relative self-stretch">
        <select
          class="appearance-none w-full h-full font-semibold text-blue-800 px-2 pr-8 leading-tight focus:outline-none bg-white"
          id="grid-state"
          v-model="sortBy"
          @change="changeSortByProject"
        >
          <option value="NEWS_FIRST">News Projects</option>
          <option value="LOWEST_PROJECT_FIRST">Lowest Project Price</option>
          <option value="HIGHEST_PROJECT_FIRST">Highest Project Price</option>
          <option value="LOWEST_BID_ENTRIES">Lowest Bid Maded</option>
          <option value="HIGHEST_BID_ENTRIES">Highest Bid Maded</option>
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
  }),
  methods: {
    changeSortByProject() {
      this.$root.$emit("sortBy", this.sortBy);
    },
  },
};
</script>

<style>
</style>