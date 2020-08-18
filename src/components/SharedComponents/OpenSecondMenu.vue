<template>
  <div class="lg:hidden pr-2">
    <button
      class="text-blue-800 h-10 w-10 flex items-center justify-center"
      @click="changeSecondMenu()"
    >
      <span
        class="iconify"
        data-icon="jam:settings-alt"
        data-inline="false"
        data-width="27"
        data-height="27"
      ></span>
    </button>
  </div>
</template>
 
<script>
export default {
  methods: {
    changeSecondMenu() {
      this.$emit("secondMenuClicked");
    },
  },
};
</script>

<style>
</style>