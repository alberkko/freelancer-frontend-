<template>
  <div class="flex">
    <LeftSidebar :openSecondMenu="openSecondMenu" v-on:secondMenuClicked="toggleSecondMenu()" />

    <div class="flex flex-col w-0 flex-1 overflow-hidden lg:ml-64">
      <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none h-screen" tabindex="0">
        <div class="p-2">
          <div class="flex items-center shadow-md rounded-lg mb-8 bg-white h-16">
            <UserSearch />
            <OpenSecondMenu v-on:secondMenuClicked="toggleSecondMenu()" />
          </div>
          <ChipsFilter />

          <ProjectCard />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import UserSearch from "@/components/SharedComponents/UserSearch";
import LeftSidebar from "@/components/SharedComponents/LeftSidebar";
import OpenSecondMenu from "@/components/SharedComponents/OpenSecondMenu";
import ProjectCard from "@/components/SharedComponents/ProjectCard";
import ChipsFilter from "@/components/SharedComponents/ChipsFilter";
export default {
  name: "browse",
  data: () => ({
    openSecondMenu: false,
  }),
  components: {
    UserSearch,
    LeftSidebar,
    OpenSecondMenu,
    ProjectCard,
    ChipsFilter,
  },
  methods: {
    toggleSecondMenu() {
      this.openSecondMenu = !this.openSecondMenu;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>