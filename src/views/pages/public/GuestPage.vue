<template>
  <div>
    <GuestHeader />
    <main class="mt-20 bg-blue-800">
      <transition name="router-animation" mode="out-in">
        <router-view></router-view>
      </transition>
    </main>
    <GuestFooter />
  </div>
</template>

<script>
import GuestHeader from "@/components/GuestComponents/GuestHeader";
import GuestFooter from "@/components/GuestComponents/GuestFooter";

export default {
  components: {
    GuestHeader,
    GuestFooter,
  },
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
  /* animation-delay: 0.1s; */
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
