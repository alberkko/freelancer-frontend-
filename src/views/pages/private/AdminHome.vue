<template>
  <div class="h-screen flex overflow-hidden bg-gray-100">
    <AdminSecondHeader />

    <div class="flex flex-col w-0 flex-1 overflow-hidden">
      <div class="relative z-10 flex-shrink-0 flex h-16 bg-white shadow">
        <button
          class="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-600 md:hidden"
          aria-label="Open sidebar"
        >
          <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </button>
        <div class="flex-1 px-4 flex justify-between">
          <!-- Search -->
          <div class="flex-1 flex">
            <form class="w-full flex md:ml-0" action="#" method="GET">
              <label for="search_field" class="sr-only">Search</label>
              <div class="relative w-full text-gray-400 focus-within:text-gray-600">
                <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    />
                  </svg>
                </div>
                <input
                  id="search_field"
                  class="block w-full h-full pl-8 pr-3 py-2 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 sm:text-sm"
                  placeholder="Search"
                  type="search"
                />
              </div>
            </form>
          </div>
          <!-- notifications -->
          <div class="ml-4 flex items-center md:ml-6">
            <button
              class="p-1 text-gray-400 rounded-full hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:shadow-outline focus:text-gray-500"
              aria-label="Notifications"
            >
              <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>

            <!-- Profile dropdown -->
            <div class="ml-3 relative">
              <div>
                <button
                  class="max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:shadow-outline"
                  id="user-menu"
                  aria-label="User menu"
                  aria-haspopup="true"
                >
                  <img
                    class="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt
                  />
                </button>
              </div>
              <!--
              Profile dropdown panel, show/hide based on dropdown state.

              Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
              -->
              <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
                <div
                  class="py-1 rounded-md bg-white shadow-xs"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu"
                >
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition ease-in-out duration-150"
                    role="menuitem"
                  >Your Profile</a>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition ease-in-out duration-150"
                    role="menuitem"
                  >Settings</a>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition ease-in-out duration-150"
                    role="menuitem"
                  >Sign out</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none" tabindex="0">
        <transition name="router-animation" mode="out-in">
          <router-view></router-view>
        </transition>
      </main>
    </div>
  </div>
  <!-- <div>
    <main class="bg-gray-300 mt-20 lg:mt-140">
      <div class="max-w-screen-sxl mx-auto p-2 sm:p-6 lg:p-8">
        <transition name="router-animation" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </main>
  </div>-->
</template>

<script>
import AdminSecondHeader from "@/components/AdminComponents/AdminSecondHeader";
// import UserFooter from "@/components/SharedComponents/UserFooter";

import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    AdminSecondHeader
    // UserFooter
  },
  computed: {
    ...mapGetters("event", ["getShowMessageEvent"])
  }
};
</script>

<style lang="scss" scoped>
/* router transitions */
.router-animation-enter-active,
.router-animation-leave-active {
  transition-duration: 0.1s;
  transition-property: opacity;
  transition-timing-function: ease-in;
}

.router-animation-enter,
.router-animation-leave-active {
  opacity: 0;
}

.router-animation-enter-active {
  animation: enter 0.2s;
  opacity: 0;
}

.router-animation-leave-active {
  animation: leave 0.2s;
}

@keyframes leave {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(50px);
    opacity: 0;
  }
}

@keyframes enter {
  0% {
    transform: translateY(50px);
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}
/* router transitions END */
</style>
