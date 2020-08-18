<template>
  <div>
    <div class="bg-white shadow-md rounded-lg">
      <div class="px-4 py-5 sm:p-6 mb-0">
        <div>
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
          <div>
            <p class="text-sm font-bold pb-2 text-gray-700">Job posted</p>
            <p class="text-sm pb-2 text-gray-500">124 jobs</p>
            <p class="text-xs pb-5 text-gray-500">Member since Jan 12, 2013</p>
            <button
              class="bg-gray-300 hover:bg-gray-400 text-gray-900 text-sm py-2 px-4 rounded-lg w-full"
            >See Profile</button>
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