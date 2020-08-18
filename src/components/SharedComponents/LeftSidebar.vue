<template>
  <div class="w-280 relative">
    <div class="fixed w-280">
      <!-- Static sidebar for desktop -->
      <div class="hidden lg:flex flex-col lg:flex-shrink-0 bg-white shadow-lg mt-2 rounded-lg p-6">
        <CategoriesList />
        <PriceSlider />
        <div class="mt-12">
          <div class="uppercase text-sm font-bold text-blue-900">Language</div>
          <div class="relative">
            <select
              class="block appearance-none w-full text-sm bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              v-model="selected"
              @change="onChange()"
            >
              <option v-for="(item, key) in category" v-bind:key="key">{{item}}</option>
              <option value disabled hidden>Any</option>
            </select>
            <div
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
            >
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PriceSlider from "@/components/SharedComponents/PriceSlider";
import CategoriesList from "@/components/SharedComponents/CategoriesList";
export default {
  data() {
    return {
      category: ["English", "Albanian", "German", "French", "Greek"],
      selected: "",
    };
  },
  props: {
    openSecondMenu: {
      type: Boolean,
    },
  },
  components: {
    PriceSlider,
    CategoriesList,
  },
  methods: {
    changeSecondMenu() {
      this.$emit("secondMenuClicked");
    },
    onChange() {
      this.$root.$emit("lang_change", this.selected);
    },
  },
  mounted() {},
};
</script>

<style>
.slidecontainer {
  width: 100%;
}

.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 5px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #a8a8a8;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #a8a8a8;
  cursor: pointer;
}
</style>