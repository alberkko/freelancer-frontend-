<template>
  <div class="flex items-center flex-1">
    <div class="flex-1 flex items-center">
      <input
        v-on:input="getSearchData()"
        v-model="searchTerm"
        type="text"
        class="rounded-md rounded-tr-none rounded-br-none focus:outline-none p-4 w-full"
        placeholder="Search for freelancers"
      />
      <button @click="getSearchData()" class>
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
  </div>
</template>

<script>
export default {
  data: () => ({
    sortBy: "",
    searchTerm: "",
    empty: "empty",
  }),
  methods: {
    getSearchData() {
      this.$root.$emit("freeLancerSearchTerm", this.searchTerm);
    },
  },
};
</script>

<style></style>
