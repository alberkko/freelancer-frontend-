<template>
  <div>
    <div class="flex">
      <div class="mr-2">
        <img
          class="inline-block h-12 w-12 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt
        />
      </div>
      <div class="flex flex-col">
        <div class="text-sm leading-5 text-gray-500">
          <p>Daniel Ehrenberg</p>
        </div>
        <div class="flex items-center mt-1">
          <div class>
            <p class="text-sm leading-5 text-white bg-yellow-300 px-1">4.5</p>
          </div>
          <vue-stars class="text-xl rating" :max="5" :value="3" />
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
import { VueStars } from "vue-stars";
export default {
  components: {
    VueStars
  }
};
</script>

<style>
.rating {
  padding-top: 4px;
}
</style>