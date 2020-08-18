<template>
  <div>
    <div class="mt-4">
      <div class="uppercase text-sm font-bold text-blue-900 mb-2 mt-3">Hourly Price</div>
      <vue-range-slider
        v-model="value"
        tooltip-dir="bottom"
        :min="min"
        :max="max"
        :formatter="formatter"
        :tooltip-merge="tooltipMerge"
        :enable-cross="enableCross"
      ></vue-range-slider>
    </div>
  </div>
</template>
 
<script>
import "vue-range-component/dist/vue-range-slider.css";
import VueRangeSlider from "vue-range-component";

export default {
  data() {
    return {
      value: [15, 60]
    };
  },
  components: {
    VueRangeSlider
  },
  created() {
    this.min = 0;
    this.max = 100;
    this.enableCross = false;
    this.tooltipMerge = false;
    this.formatter = value => `$${value}`;
  }
};
</script>

<style>
</style>