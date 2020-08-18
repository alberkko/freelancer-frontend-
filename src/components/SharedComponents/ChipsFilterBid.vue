<template>
  <div class="overflow-x-auto">
    <div class="min-w-full md-chips flex mb-5 space-x-2">
      <div
        class="flex justify-center whitespace-no-wrap items-center bg-white rounded-full text-gray-700 bg-white shadow-md"
      >
        <div
          class="px-6 font-bold py-3 font-normal leading-none max-w-full flex-initial focus:bg-gray-700 focus:text-white rounded-full"
        >
          <input type="radio" id="ap" value="all" v-model="picked" @change="ChipChange" />
          <label class="bl" for="ap">All Bids</label>
        </div>
      </div>

      <div
        class="flex justify-center whitespace-no-wrap items-center bg-white rounded-full text-gray-700 bg-white shadow-md"
      >
        <div
          class="px-6 font-bold py-3 font-normal text-green-400 leading-none max-w-full flex-initial focus:bg-green-400 focus:text-white rounded-full"
        >
          <input type="radio" id="ab" value="active" v-model="picked" @change="ChipChange" />
          <label class="bl" for="ab">Active Bids</label>
        </div>
      </div>

      <div
        class="flex justify-center whitespace-no-wrap items-center bg-white rounded-full text-gray-700 bg-white shadow-md"
      >
        <div
          class="px-6 font-bold py-3 font-normal text-yellow-300 leading-none max-w-full flex-initial focus:bg-yellow-300 focus:text-white rounded-full"
        >
          <input type="radio" id="pp" value="past" v-model="picked" @change="ChipChange" />
          <label class="bl" for="pp">Past Bids</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    picked: "all"
  }),
  methods:{
    ChipChange(){
      this.$root.$emit("chipChange", this.picked);
    }
  }
};
</script>

<style>
button:focus {
  outline: none !important;
}

.bl{
    margin-left: 8px !important;
}
</style>

