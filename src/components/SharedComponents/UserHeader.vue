<template>
  <nav class="z-50 bg-blue-800 fixed inset-x-0 top-0 shadow-md" style="width: 100vw">
    <div class="max-w-screen-sxl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <div class="flex items-center flex-1">
          <router-link to="/browse-projects" class="flex-shrink-0">
            <img
              width="200"
              class="block"
              src="@/assets/free-lancer-logo.svg"
              alt="Free-lancer.eu logo"
            />
          </router-link>
          <div class="hidden lg:block lg:ml-auto">
            <div class="flex space-x-1">
              <div
                class="flex items-center text-white mr-3 relative bg-transparent hover:bg-blue-700 rounded-full cursor-pointer transition duration-200 ease-in-out px-2"
              >
                <router-link
                  :to="`/messages/${userName}`"
                  class="font-semibold focus:outline-none py-2 w-9"
                >
                  <span
                    class="iconify mr-2"
                    data-icon="uil-comment-alt-message"
                    data-inline="false"
                    data-width="27"
                    data-height="27"
                  ></span>
                  <span
                    class="absolute text-xs left-6 top-1 bg-red-700 w-5 h-5 flex justify-center items-top rounded-full"
                  >
                    <div class>0</div>
                  </span>
                </router-link>
              </div>
              <div
                class="flex items-center text-white bg-transparent hover:bg-blue-700 rounded-full cursor-pointer px-2 transition duration-200 ease-in-out"
              >
                <div class="relative inline-block text-left">
                  <div
                    class="flex items-center"
                    @click="OpenProfileDropdown = !OpenProfileDropdown"
                  >
                    <img
                      v-if="profileModel.base64ProfilePhoto"
                      v-bind:src="profileModel.base64ProfilePhoto"
                      class="inline-block h-8 w-8 border-white border-2 rounded-full object-cover"
                      alt
                    />
                    <img
                      v-else
                      class="inline-block h-8 w-8 border-white border-2 rounded-full object-cover"
                      src="https://i.stack.imgur.com/l60Hf.png"
                      alt
                    />
                    <p
                      class="ml-3 text-white text-sm leading-5 font-medium"
                    >{{profileModel.firstName}} {{profileModel.lastName}}</p>
                    <svg
                      class="hidden flex-shrink-0 ml-1 h-5 w-5 text-white lg:block"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>

                  <div
                    class="origin-top-left absolute right-0 mt-4 w-48 rounded-md shadow-lg border-0"
                    v-if="OpenProfileDropdown"
                  >
                    <div class="rounded-md bg-white">
                      <div
                        class="p-1 flex flex-col space-y-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        <router-link
                          to="/profile"
                          class="font-semibold text-sm p-3 leading-5 text-gray-800 rounded hover:rounded-md hover:bg-gray-200 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900 flex transition duration-200 ease-in-out"
                        >
                          <span
                            class="iconify text-xl mr-1"
                            data-icon="ant-design:user-outlined"
                            data-inline="false"
                          ></span>
                          <div>My Profile</div>
                        </router-link>
                        <div
                          class="rounded-md flex items-center p-3 text-sm leading-5 text-white font-bold bg-red-600 hover:bg-red-700 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                          @click="logoutUser"
                        >
                          <span
                            class="iconify text-xl mr-1"
                            data-icon="ic:baseline-power-settings-new"
                            data-inline="false"
                          ></span>Logout
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="-mr-2 flex lg:hidden">
          <!-- Mobile menu button -->
          <button
            @click="openMenu = !openMenu"
            class="inline-flex items-center justify-center p-2 focus:outline-none"
            aria-label="Main menu"
            aria-expanded="false"
          >
            <!-- Icon when menu is closed. -->
            <!-- Menu open: "hidden", Menu closed: "block" -->
            <svg
              :class="openMenu ? 'block' : 'hidden'"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 18H2C1.73478 18 1.48043 18.1054 1.29289 18.2929C1.10536 18.4804 1 18.7348 1 19C1 19.2652 1.10536 19.5196 1.29289 19.7071C1.48043 19.8946 1.73478 20 2 20H22C22.2652 20 22.5196 19.8946 22.7071 19.7071C22.8946 19.5196 23 19.2652 23 19C23 18.7348 22.8946 18.4804 22.7071 18.2929C22.5196 18.1054 22.2652 18 22 18ZM2 6H22C22.2652 6 22.5196 5.89464 22.7071 5.70711C22.8946 5.51957 23 5.26522 23 5C23 4.73478 22.8946 4.48043 22.7071 4.29289C22.5196 4.10536 22.2652 4 22 4H2C1.73478 4 1.48043 4.10536 1.29289 4.29289C1.10536 4.48043 1 4.73478 1 5C1 5.26522 1.10536 5.51957 1.29289 5.70711C1.48043 5.89464 1.73478 6 2 6ZM22 11H2C1.73478 11 1.48043 11.1054 1.29289 11.2929C1.10536 11.4804 1 11.7348 1 12C1 12.2652 1.10536 12.5196 1.29289 12.7071C1.48043 12.8946 1.73478 13 2 13H22C22.2652 13 22.5196 12.8946 22.7071 12.7071C22.8946 12.5196 23 12.2652 23 12C23 11.7348 22.8946 11.4804 22.7071 11.2929C22.5196 11.1054 22.2652 11 22 11Z"
                fill="white"
              />
            </svg>
            <!-- Icon when menu is open. -->
            <!-- Menu open: "block", Menu closed: "hidden" -->
            <svg
              :class="openMenu ? 'hidden' : 'block'"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.4099 11.9999L19.7099 5.70994C19.8982 5.52164 20.004 5.26624 20.004 4.99994C20.004 4.73364 19.8982 4.47825 19.7099 4.28994C19.5216 4.10164 19.2662 3.99585 18.9999 3.99585C18.7336 3.99585 18.4782 4.10164 18.2899 4.28994L11.9999 10.5899L5.70994 4.28994C5.52164 4.10164 5.26624 3.99585 4.99994 3.99585C4.73364 3.99585 4.47824 4.10164 4.28994 4.28994C4.10164 4.47825 3.99585 4.73364 3.99585 4.99994C3.99585 5.26624 4.10164 5.52164 4.28994 5.70994L10.5899 11.9999L4.28994 18.2899C4.19621 18.3829 4.12182 18.4935 4.07105 18.6154C4.02028 18.7372 3.99414 18.8679 3.99414 18.9999C3.99414 19.132 4.02028 19.2627 4.07105 19.3845C4.12182 19.5064 4.19621 19.617 4.28994 19.7099C4.3829 19.8037 4.4935 19.8781 4.61536 19.9288C4.73722 19.9796 4.86793 20.0057 4.99994 20.0057C5.13195 20.0057 5.26266 19.9796 5.38452 19.9288C5.50638 19.8781 5.61698 19.8037 5.70994 19.7099L11.9999 13.4099L18.2899 19.7099C18.3829 19.8037 18.4935 19.8781 18.6154 19.9288C18.7372 19.9796 18.8679 20.0057 18.9999 20.0057C19.132 20.0057 19.2627 19.9796 19.3845 19.9288C19.5064 19.8781 19.617 19.8037 19.7099 19.7099C19.8037 19.617 19.8781 19.5064 19.9288 19.3845C19.9796 19.2627 20.0057 19.132 20.0057 18.9999C20.0057 18.8679 19.9796 18.7372 19.9288 18.6154C19.8781 18.4935 19.8037 18.3829 19.7099 18.2899L13.4099 11.9999Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!--
    Mobile menu, toggle classes based on menu state.

    Menu open: "block", Menu closed: "hidden"
    -->
    <div class="user-menu-mobile lg:hidden flex-col" :class="openMenu ? 'hidden' : 'flex'">
      <div class="px-2 pt-2 pb-3 flex flex-col space-y-1">
        <router-link
          to="/dashboard"
          class="font-semibold text-sm p-3 leading-5 text-white rounded hover:rounded-md bg-transparent hover:bg-blue-700 focus:outline-none flex transition duration-200 ease-in-out"
        >
          <span class="iconify text-xl mr-1" data-icon="uil:create-dashboard" data-inline="false"></span>
          <div>Dashboard</div>
        </router-link>
        <router-link
          to="/browse-projects"
          class="font-semibold text-sm p-3 leading-5 text-white rounded hover:rounded-md bg-transparent hover:bg-blue-700 focus:outline-none flex transition duration-200 ease-in-out"
        >
          <span class="iconify text-xl mr-1" data-icon="bx-bx-file-find" data-inline="false"></span>
          <div>
            <span class="inline-flex lg:hidden">Browse</span> Projects
          </div>
        </router-link>
        <router-link
          to="/browse-freelancers"
          class="font-semibold text-sm p-3 leading-5 text-white rounded hover:rounded-md bg-transparent hover:bg-blue-700 focus:outline-none flex transition duration-200 ease-in-out"
        >
          <span class="iconify text-xl mr-1" data-icon="clarity:users-line" data-inline="false"></span>
          <div>
            <span class="inline-flex lg:hidden">Browse</span> Free-Lancers
          </div>
        </router-link>
        <router-link
          to="/my-projects"
          class="font-semibold text-sm p-3 leading-5 text-white rounded hover:rounded-md bg-transparent hover:bg-blue-700 focus:outline-none flex transition duration-200 ease-in-out"
        >
          <span
            class="iconify text-xl mr-1"
            data-icon="mdi-file-account-outline"
            data-inline="false"
          ></span>
          <div>My Projects</div>
        </router-link>
        <router-link
          to="/my-bids"
          class="font-semibold text-sm p-3 leading-5 text-white rounded hover:rounded-md bg-transparent hover:bg-blue-700 focus:outline-none flex transition duration-200 ease-in-out"
        >
          <span
            class="iconify text-xl mr-1"
            data-icon="mdi-file-certificate-outline"
            data-inline="false"
          ></span>
          <div>My Bids</div>
        </router-link>
      </div>
      <div class="px-2 pt-2 pb-3 flex flex-col space-y-1 mt-auto">
        <router-link
          to="/profile"
          class="font-semibold text-sm p-3 leading-5 text-white rounded hover:rounded-md bg-transparent hover:bg-blue-700 focus:outline-none flex transition duration-200 ease-in-out"
        >
          <span
            class="iconify text-xl mr-1"
            data-icon="ant-design:user-outlined"
            data-inline="false"
          ></span>
          <div>My Profile</div>
        </router-link>
        <div
          class="rounded-md flex items-center p-3 text-sm leading-5 text-white font-bold bg-red-600 hover:bg-red-700 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
          @click="logoutUser"
        >
          <span
            class="iconify text-xl mr-1"
            data-icon="ic:baseline-power-settings-new"
            data-inline="false"
          ></span>Logout
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import routes from "@/router/user.routes.js";
import { mapActions } from "vuex";
import { UserNameProvider } from "../../provider/storage/username.storage";

export default {
  data: () => ({
    openMenu: true,
    openDropdown: false,
    menuActive: false,
    OpenProfileDropdown: false,
    userName: UserNameProvider.getUserName(),
    profileModel: {
      base64ProfilePhoto: "",
    },
  }),
  computed: {
    routes() {
      return routes.filter((el) => {
        return el;
      });
    },
    TopHeader() {
      return this.routes.filter((route) => route.isTopHeader);
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
      this.OpenProfileDropdown = false;
    },
  },
  methods: {
    ...mapActions("auth", ["moduleLogout"]),
    ...mapActions("profile", ["moduleGetUserProfile"]),
    logoutUser() {
      this.moduleLogout();
    },
  },
  mounted() {
    this.moduleGetUserProfile().then((data) => {
      this.profileModel = data.data;

      if (this.profileModel.state == null) {
        fetch("https://api.ipify.org?format=json")
          .then((x) => x.json())
          .then(({ ip }) => {
            this.term = ip;
            fetch(
              "http://api.ipstack.com/" +
                this.term +
                "?access_key=7a12a7849baf735718f66785a160d72f"
            )
              .then((response) => {
                return response.json();
              })
              .then((data) => {
                let userLocation = data.city + ", " + data.country_name;

                self.updateUserLocation(userLocation);
              });
          });
      }
    });
  },
};
</script>

<style scoped land="scss">
.user-menu-mobile {
  height: calc(100vh - 80px);
}

.msg-number {
  font-size: 10px;
}
</style>
