<template>
  <footer class="bg-blue-800 z-20 relative">
    <div
      class="border-t border-white border-opacity-25 flex lg:flex-row flex-col justify-between items-center max-w-screen-sxl mx-auto text-xs text-white sm:h-24 h-20 py-4 px-4 sm:px-6 lg:px-8"
    >
      <div class="flex-1">Copyright © 2020 Free-lancer.eu</div>
      <div class="flex space-x-4 flex-1 justify-center">
        <div>Contact Us</div>
        <div>FAQ</div>
        <div>AGB</div>
        <div>Impressum</div>
        <div>Privacy Policy</div>
      </div>
      <div class="text-white flex flex-1 justify-end">
        <div @click="changeLanguage('EN')">EN</div>
        <div @click="changeLanguage('DE')">DE</div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions("lang", ["changeLanguageModule"]),
    changeLanguage(langKey) {
      this.changeLanguageModule({ langKey: langKey });
    },
  },
};
</script>

<style></style>
