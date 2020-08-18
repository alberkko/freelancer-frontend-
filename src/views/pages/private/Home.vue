<template>
  <div>
    <UserHeader />
    <UserSecondHeader />
    <main class="mt-20 lg:mt-140 bg-gray-300">
      <transition name="router-animation" mode="out-in">
        <router-view></router-view>
      </transition>
    </main>
    <UserFooter />
    <NotificationPopup />
    <!-- <ErrorAlert /> -->
  </div>
</template>

<script>
import UserHeader from "@/components/SharedComponents/UserHeader";
import UserSecondHeader from "@/components/SharedComponents/UserSecondHeader";
import UserFooter from "@/components/SharedComponents/UserFooter";
import NotificationPopup from "@/components/SharedComponents/NotificationPopup";
// import ErrorAlert from "@/components/SharedComponents/ErrorAlert";

import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    UserHeader,
    UserSecondHeader,
    UserFooter,
    NotificationPopup,
    // ErrorAlert,
  },
  computed: {
    ...mapGetters("event", ["getShowMessageEvent"]),
  },
};
</script>

<style lang="scss" scoped>
.min-height {
  min-height: 1080px;
}
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
