<template>
  <nav class="z-40 bg-white fixed inset-x-0 top-20 shadow hidden lg:block">
    <div class="max-w-screen-sxl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center h-15 w-full">
        <div class="flex items-center w-full">
          <div class="hidden lg:block w-full">
            <div class="flex justify-between items-center">
              <div class="flex items-center">
                <div
                  class="flex items-center text-gray-800 hover:text-gray-900 py-2 px-3 bg-transparent hover:bg-gray-200 transition duration-200 ease-in-out rounded-full"
                >
                  <span
                    class="iconify text-lg mr-1"
                    data-icon="uil:create-dashboard"
                    data-inline="false"
                  ></span>
                  <router-link to="/dashboard" class="font-semibold focus:outline-none">
                    <div>Dashboard</div>
                  </router-link>
                </div>

                <div
                  class="flex items-center py-2 px-3 bg-transparent hover:bg-gray-200 transition duration-200 ease-in-out rounded-full"
                >
                  <div class="relative inline-block text-left">
                    <div>
                      <span class="flex items-center text-gray-800 hover:text-gray-900">
                        <span
                          class="iconify text-2xl mr-1"
                          data-icon="ant-design:search-outlined"
                          data-inline="false"
                        ></span>
                        <button
                          type="button"
                          class="inline-flex justify-center w-full font-semibold focus:outline-none"
                          id="options-menu"
                          aria-haspopup="true"
                          aria-expanded="true"
                          @click="OpenBrowseDropdown = !OpenBrowseDropdown, OpenMyDropdown = false"
                        >Browse</button>
                      </span>
                    </div>

                    <div
                      v-if="OpenBrowseDropdown"
                      class="origin-top-right absolute -left-3 mt-4 w-48 rounded-b-md shadow-lg border-0"
                    >
                      <div class="rounded-md bg-white shadow-md">
                        <div
                          class="p-1 flex flex-col space-y-1"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="options-menu"
                        >
                          <router-link
                            to="/browse-projects"
                            class="font-semibold text-sm block p-3 leading-5 text-gray-800 rounded hover:rounded-md hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900 flex transition duration-200 ease-in-out"
                          >
                            <span
                              class="iconify text-xl mr-1"
                              data-icon="bx-bx-file-find"
                              data-inline="false"
                            ></span>
                            <div @click="OpenBrowseDropdown = false">Projects</div>
                          </router-link>

                          <router-link
                            to="/browse-freelancers"
                            class="font-semibold text-sm block p-3 leading-5 text-gray-800 rounded hover:rounded-md hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900 flex transition duration-200 ease-in-out"
                          >
                            <span
                              class="iconify text-xl mr-1"
                              data-icon="clarity:users-line"
                              data-inline="false"
                            ></span>
                            <div @click="OpenBrowseDropdown = false">Free-Lancers</div>
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="flex items-center py-2 px-3 bg-transparent hover:bg-gray-200 transition duration-200 ease-in-out rounded-full"
                >
                  <div class="relative inline-block text-left">
                    <div>
                      <span class="flex items-center text-gray-800 hover:text-gray-900">
                        <button
                          type="button"
                          class="inline-flex items-center justify-center w-full font-semibold focus:outline-none"
                          id="options-menu"
                          aria-haspopup="true"
                          aria-expanded="true"
                          @click="OpenBrowseDropdown = false, OpenMyDropdown = !OpenMyDropdown "
                        >
                          <span
                            class="iconify text-xl mr-1"
                            data-icon="uil:file-search-alt"
                            data-inline="false"
                          ></span>My Projects
                        </button>
                      </span>
                    </div>

                    <div
                      v-if="OpenMyDropdown"
                      class="origin-top-right absolute -left-3 mt-4 w-56 bg-white rounded-b-md shadow-lg border-0"
                    >
                      <div
                        class="p-1 flex flex-col space-y-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        <router-link
                          to="/my-projects"
                          class="font-semibold text-sm p-3 leading-5 text-gray-800 rounded hover:rounded-md hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900 flex transition duration-200 ease-in-out"
                        >
                          <span
                            class="iconify text-xl mr-1"
                            data-icon="mdi-file-account-outline"
                            data-inline="false"
                          ></span>
                          <div @click="OpenMyDropdown = false">My Projects</div>
                        </router-link>

                        <router-link
                          to="/my-bids"
                          class="font-semibold text-sm p-3 leading-5 text-gray-800 rounded hover:rounded-md hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900 flex transition duration-200 ease-in-out"
                        >
                          <span
                            class="iconify text-xl mr-1"
                            data-icon="mdi-file-certificate-outline"
                            data-inline="false"
                          ></span>
                          <div @click="OpenMyDropdown = false">My Bids</div>
                        </router-link>

                        <router-link
                          to="/my-reviews"
                          class="font-semibold text-sm p-3 leading-5 text-gray-800 rounded hover:rounded-md hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900 flex transition duration-200 ease-in-out"
                        >
                          <span
                            class="iconify text-xl mr-1"
                            data-icon="mdi-file-certificate-outline"
                            data-inline="false"
                          ></span>
                          <div @click="OpenMyDropdown = false">My Reviews</div>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex pr-2">
                <div
                  class="flex items-center bg-green-500 hover:bg-green-600 px-3 py-3 text-white rounded-full cursor-pointer transition duration-200 ease-in-out shadow-none hover:shadow-lg"
                >
                  <router-link
                    to="/post-project"
                    class="font-semibold leading-5 focus:outline-none flex items-center"
                  >
                    <span
                      class="iconify text-xl mr-1"
                      data-icon="bi:plus-circle"
                      data-inline="false"
                      style="color: white;"
                    ></span>
                    <div class="font-semibold">Post Projects</div>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--
    Mobile menu, toggle classes based on menu state.

    Menu open: "block", Menu closed: "hidden"
    -->
    <div class="lg:hidden" :class="openMenu ? 'hidden' : 'block'">
      <div class="px-2 pt-2 pb-3 flex flex-col space-y-1" style="height: 100vh">
        <div>
          <div
            class="block px-3 py-2 rounded-md hover:bg-blue-900 focus:outline-none focus:text-white focus:bg-blue-900 transition duration-150 ease-in-out"
          >
            <div @click="OpenBrowseDropdown = !OpenBrowseDropdown">Browse</div>
          </div>
        </div>
        <div v-show="OpenBrowseDropdown" class="px-5 py-3">
          <div>
            <router-link
              to="/browse-projects"
              class="block px-3 py-2 rounded-md hover:bg-blue-900 focus:outline-none focus:text-white focus:bg-blue-900 transition duration-150 ease-in-out"
            >
              <div>Projects</div>
            </router-link>
          </div>
          <div>
            <router-link
              to="/browse-freelancers"
              class="block px-3 py-2 rounded-md hover:bg-blue-900 focus:outline-none focus:text-white focus:bg-blue-900 transition duration-150 ease-in-out"
            >
              <div>Free-Lancers</div>
            </router-link>
          </div>
        </div>
        <div>
          <router-link
            to="/dashboard"
            class="block px-3 py-2 rounded-md hover:bg-blue-900 focus:outline-none focus:text-white focus:bg-blue-900 transition duration-150 ease-in-out"
          >
            <div>Dashboard</div>
          </router-link>
        </div>
        <div>
          <router-link
            to="/my-projects"
            class="block px-3 py-2 rounded-md hover:bg-blue-900 focus:outline-none focus:text-white focus:bg-blue-900 transition duration-150 ease-in-out"
          >
            <div>My Projects</div>
          </router-link>
        </div>
        <div>
          <router-link
            to="/post-project"
            class="block px-3 py-2 rounded-md hover:bg-blue-900 focus:outline-none focus:text-white focus:bg-blue-900 transition duration-150 ease-in-out"
          >
            <div>Post a Project</div>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import routes from "@/router/user.routes.js";

export default {
  data: () => ({
    openMenu: true,
    openDropdown: false,
    menuActive: false,
    OpenBrowseDropdown: false,
    OpenMyDropdown: false,
  }),
  computed: {
    routes() {
      return routes.filter((el) => {
        return el;
      });
    },
    TopHeader() {
      return this.routes.filter((route) => route.isTopHeader == false);
    },
  },

  created() {
    const handleEscape = (e) => {
      if (e.key === "Esc" || e.key === "Escape") {
        this.openDropdown = false;
      }
    };
    document.addEventListener("keydown", handleEscape);
    this.$once("hook:beforeDestroy", () => {
      document.removeEventListener("keydown", handleEscape);
    });
  },
  watch: {
    $route() {
      this.$forceUpdate()
      // console.log(this.openMenu);
      // if (this.openMenu) {
      //   this.openMenu = !this.openMenu;
      //   this.openMenu = true;
      //   this.OpenBrowseDropdown = false;
      //   this.OpenMyDropdown = false;
      // }
    },
  },
};
</script>

<style scoped land="scss"></style>
