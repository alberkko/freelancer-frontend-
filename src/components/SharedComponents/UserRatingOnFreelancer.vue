<template>
  <div>
    <div class="flex">
      <div class="flex flex-col">
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