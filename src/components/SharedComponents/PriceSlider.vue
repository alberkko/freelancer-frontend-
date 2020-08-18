<template>
  <div>
    <div class="mt-4">
      <div class="uppercase text-sm font-bold text-blue-900 mb-2 mt-3">Price</div>
      <vue-range-slider
        class="text-blue-800"
        v-model="value"
        tooltip-dir="bottom"
        :min="min"
        :max="max"
        :formatter="formatter"
        :tooltip-merge="tooltipMerge"
        :enable-cross="enableCross"
      ></vue-range-slider>
      <!-- <button @click="cp = !cp" class="mt-16 text-xs text-gray-500">Set custom price</button>
      <div v-if="cp" class="flex">
        <div class="flex mt-3">
          <div class="text-sm text-gray-500 px-2 mr-1 border rounded">$</div>
          <input
            class="border rounded w-24 text-sm text-gray-600 px-1"
            v-model.number="min"
            placeholder="min price"
            type="number"
          />
        </div>
        <div class="flex mt-3 pl-3">
          <div class="text-sm text-gray-500 px-2 mr-1 border rounded">$</div>
          <input
            type="number"
            class="border rounded w-24 text-sm text-gray-600 px-1"
            v-model.number="max"
            placeholder="max price"
          />
        </div>
      </div>
      <button class="border rounded text-sm px-2 mt-2 text-gray-500" v-if="cp" @click="CustomP">Set</button>
      <div v-if="min_err" class="text-red-500 text-xs break-word">*min cannot be larger than max</div> -->
    </div>
  </div>
</template>
 
<script>
import "vue-range-component/dist/vue-range-slider.css";
import VueRangeSlider from "vue-range-component";

export default {
  data() {
    return {
      // min: null,
      // max: null,
      cp: false,
      max_err: false,
      min_err: false,
      value: [0, 1000]
    };
  },
  components: {
    VueRangeSlider
  },
  created() {
    this.min = 0;
    this.max = 1000;
    this.enableCross = false;
    this.tooltipMerge = false;
    this.formatter = value => `$${value}`;
  },
  methods: {
    // CustomP() {
    //   if (this.min >= this.max) {
    //     this.min_err = true;
    //     this.min = 0;
    //     this.max = 500;
    //     this.value = [0, 500];
    //   } else {
    //     this.min_err = false;
    //     this.value = [this.min, this.max];
    //   }
    // }
  },
  watch: {
    // min: function(newValue) {
    //   console.log(newValue);
    // },
    // max: function(newValue) {
    //   console.log(newValue);
    // },
    value: function(newValue) {
      // console.log(newValue);
      this.$root.$emit("priceChange",newValue);
    }
  }
};
</script>

<style lang="css">
.vue-range-slider.slider-component .slider .slider-process {
  background-color: #0046aa;
}

.vue-range-slider.slider-component .slider-tooltip-wrap .slider-tooltip {
  background-color: #0046aa;
  border-color: #0046aa;
}
</style>