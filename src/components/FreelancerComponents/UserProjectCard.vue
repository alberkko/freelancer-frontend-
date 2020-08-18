<template>
  <div class="md:w-1/2 lg:w-1/2 xl:w-1/3">
    <div class="bg-white shadow sm:rounded-lg mb-4 mx-2">
      <div class="px-4 py-5 sm:p-6 mb-0">
        <p class="text-xs leading-6 font-medium text-gray-400">
          2 Days Ago
          <span class="font-bold px-1">•</span>
          <span class="font-bold text-green-500">6 DAYS LEFT</span>
        </p>
        <h3
          class="text-lg leading-6 font-bold text-gray-900 mb-3"
        >Wordpress developer needed to make a simple 5-pages</h3>
        <ProjectCardSkillsList />
        <div class="mt-0 mb-3 max-w-xl text-sm leading-5 text-gray-500">
          <p>We need to create a simple website (15 pages approx) for our online store for watches and accessories. You will be provided with all the necessary information and docs.</p>
        </div>
        <ProjectCardSkillsList />
      </div>

      <div class="flex flex-column justify-between mx-6 mb-5">
        <div>
          <p class="text-xs text-gray-400">Budget</p>
          <p class="font-bold text-blue-600">€100 - €250</p>
        </div>
        <div>
          <p class="text-xs text-gray-400">Average Bid</p>
          <p class="font-bold text-blue-600">€160</p>
        </div>
        <div>
          <p class="text-xs text-gray-400">Total Bids</p>
          <p class="font-bold text-blue-600">112</p>
        </div>
      </div>

      <div class="bottom-0">
        <div class="w-full bg-blue-800 rounded-md rounded-t-none flex justify-between h-16">
          <button
            type="button"
            class="rounded-md rounded-t-none rounded-r-none bg-blue-800 border-r w-6/12"
          >
            <div class="flex justify-center">
              <div class="flex flex-col w-auto">
                <div class="text-xs bids-top-text text-gray-300 text-left -mb-2">My Bid</div>
                <div class="text-2xl font-bold text-white">€112</div>
              </div>
            </div>
          </button>
          <button
            type="button"
            class="rounded-md rounded-t-none rounded-l-none text-white bg-blue-800 border-l w-6/12"
          >
            <div class="flex justify-center">
              <div class="flex flex-col w-auto">
                <div class="text-xs bids-top-text text-gray-300 text-left -mb-3">Duration</div>
                <div class="flex flex-row items-baseline">
                  <div class="text-3xl font-bold text-white">15</div>
                  <div class="text-xs bids-top-text text-gray-300 text-left -mb-2">Days</div>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
import UserRatingOnCard from "@/components/SharedComponents/UserRatingOnCard";

export default {
  components: {
    UserRatingOnCard
  }
};
</script>

<style>
.bids-top-text {
  font-size: 0.6em !important;
}

.bids-top-text-edit {
  font-size: 0.8em !important;
}
</style>