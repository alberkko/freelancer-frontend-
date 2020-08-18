<template>
  <div class="flex flex-wrap">
    <div class="md:w-1/2 lg:w-1/2 xl:w-1/3">
      <div class="bg-white shadow sm:rounded-lg mb-4 mx-2 relative">
        <div class="px-4 py-5 sm:p-6">
          <div class="flex mb-6">
            <div class="flex items-center">
              <img
                class="inline-block h-15 w-15 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt
              />
            </div>
            <div class="text-sm leading-5 text-gray-500 mt-0 ml-2">
              <p>Daniel Ehrenberg</p>
              <p>Germany</p>
              <div class="flex">
                <div>
                  <p class="text-sm leading-5 text-yellow-400 mt-1 bg-yellow-200 pl-2 pr-2">4.5</p>
                </div>
                <div>
                  <vue-stars class="text-xl mt-0 rating" :max="5" :value="3" />
                </div>
              </div>
            </div>
          </div>
          <div class="mt-0 mb-0 max-w-xl text-sm leading-5 text-gray-500">
            <p>We need to create a simple website (15 pages approx) for our online store for watches and accessories. You will be provided with all the necessary information and docs.</p>
          </div>
          <div>
            <UserRatingOnCard />
          </div>
        </div>
        <div class="bottom-0">
          <div class="w-full bg-blue-800 rounded-md rounded-t-none flex justify-between h-16">
            <button
              type="button"
              class="justify-center rounded-md rounded-t-none rounded-r-none bg-blue-700 w-4/12"
            >
              <span class="font-bold text-2xl text-white sm:text-2xl sm:leading-5">€250</span>
            </button>
            <button
              type="button"
              class="uppercase font-bold px-4 py-2 text-sm rounded-md rounded-t-none rounded-l-none text-white bg-blue-800 w-8/12"
            >Reply</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
import { VueStars } from "vue-stars";
export default {
  name: "My Project",
  components: {
    VueStars
  }
};
</script>

<style>
.rating {
  padding-top: 0px;
}
</style>