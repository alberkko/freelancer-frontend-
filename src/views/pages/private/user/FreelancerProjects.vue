<template>
  <div
    class="min-height flex lg:flex-row flex-col max-w-screen-sxl mx-auto p-2 sm:p-6 lg:p-8"
  >
    <div class="w-280 lg:flex hidden relative">
      <FreelancerLeftSidebar
        class="fixed w-280"
        :openSecondMenu="openSecondMenu"
        v-on:secondMenuClicked="toggleSecondMenu()"
      />
    </div>
    <div class="flex-1 flex lg:ml-5">
      <main
        class="flex-1 relative z-0 overflow-y-auto focus:outline-none"
        tabindex="0"
      >
        <div class="p-2">
          <div
            class="flex items-center shadow-md rounded-lg mb-8 bg-white h-16"
          >
            <FreelancerSearch />
            <OpenSecondMenu v-on:secondMenuClicked="toggleSecondMenu()" />
          </div>
          <FreelancerCard />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import FreelancerSearch from "@/components/SharedComponents/FreelancerSearch";
import FreelancerLeftSidebar from "@/components/SharedComponents/FreelancerLeftSidebar";
import OpenSecondMenu from "@/components/SharedComponents/OpenSecondMenu";
// import ProjectCard from "@/components/SharedComponents/ProjectCard";
import FreelancerCard from "@/components/SharedComponents/FreelancerCard";
export default {
  name: "browse",
  data: () => ({
    openSecondMenu: false,
    key: 1,
  }),
  components: {
    FreelancerSearch,
    FreelancerLeftSidebar,
    OpenSecondMenu,
    // ProjectCard,
    FreelancerCard,
  },
  methods: {
    toggleSecondMenu() {
      this.openSecondMenu = !this.openSecondMenu;
    },
  },
};
</script>

<style scoped></style>
