<template>
  <div class="min-height flex lg:flex-row flex-col max-w-screen-sxl mx-auto p-2 sm:p-6 lg:p-8">
    <LeftSidebar />
    <div class="flex-1 flex lg:ml-5">
      <div class="flex flex-col w-0 flex-1 overflow-hidden">
        <div class="flex-1 relative z-0 overflow-y-auto focus:outline-none" tabindex="0">
          <div class="p-2">
            <div class="flex flex-col shadow-md rounded-lg mb-8 bg-white">
              <div class="flex items-center">
                <ProjectSearch />
                <OpenSecondMenu v-on:secondMenuClicked="toggleSecondMenu()" />
              </div>
              <div>
                <ProjectSortBy v-show="openSecondMenu" v-on:secondMenuClicked="toggleSecondMenu()" />
                <LeftSidebarMobile
                  v-show="openSecondMenu"
                  :openSecondMenu="openSecondMenu"
                  v-on:secondMenuClicked="toggleSecondMenu()"
                ></LeftSidebarMobile>
              </div>
            </div>

            <ProjectCard />
            <!-- LOADER WITH h-screen GOES HERE -->
            <div class="mm h-64 text-sm flex justify-center text-gray-500" else></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectSearch from "@/components/SharedComponents/ProjectSearch";
import ProjectSortBy from "@/components/SharedComponents/ProjectSortBy";
import LeftSidebar from "@/components/SharedComponents/LeftSidebar";
import LeftSidebarMobile from "@/components/SharedComponents/LeftSidebarMobile";
import OpenSecondMenu from "@/components/SharedComponents/OpenSecondMenu";
import ProjectCard from "@/components/SharedComponents/ProjectCard";
// import FreelancerCard from "@/components/SharedComponents/FreelancerCard";

export default {
  name: "browse",

  data: () => ({
    no_data: false,
    openSecondMenu: false,
  }),
  components: {
    ProjectSearch,
    ProjectSortBy,
    LeftSidebar,
    OpenSecondMenu,
    ProjectCard,
    LeftSidebarMobile,
    // FreelancerCard,
  },
  methods: {
    toggleSecondMenu() {
      this.openSecondMenu = !this.openSecondMenu;
    },
  },
  mounted() {
    this.$root.$on("no_data", (data) => {
      if (data < 1) {
        this.no_data = true;
      } else {
        this.no_data = false;
      }
    });
  },
};
</script>

<style>
</style>
