<template>
  <div class="min-h-screen">
    <div class="bg-blue-800">
      <div
        class="flex flex-col max-w-screen-sxl mx-auto py-4 sm:py-8 px-4 sm:px-6 lg:py-16 lg:px-8"
      >
        <h2 class="text-4xl font-bold tracking-tight sm:leading-10 text-white sm:text-5xl">Forgot Password</h2>
      </div>
    </div>
    <div class="max-w-screen-sxl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex lg:flex-row flex-col space-x-64">
        <div class="flex-1">
          <div>
            <div class="mt-6">
              <div class="mt-1 rounded-md shadow-sm">
                <input
                  id="email"
                  type="email"
                  required
                  v-model="registerModel.email"
                  placeholder="Email"
                  class="appearance-none block w-full px-3 py-4 border border-gray-300 rounded-md placeholder-gray-600 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out"
                />
              </div>
            </div>

            <div class="mt-6 flex items-center justify-end">
            </div>

            <div class="mt-6 flex space-x-4">
              <span class="block w-full rounded-md shadow-sm">
                <button
                  @click="forgotPassword()"
                  class="w-full flex justify-center py-4 px-4 border border-white font-medium rounded-md text-white bg-blue-800 hover:border-transparent hover:bg-blue-900 focus:outline-none focus:border-transparent focus:shadow-outline-indigo active:bg-blue-900 transition duration-150 ease-in-out"
                >Send recovery email</button>
              </span>
            </div>
          </div>
        </div>
        <div>

        <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      confirmPassword: "",
      registerModel: {
        email: "",
      },
    };
  },
  methods: {
    ...mapActions("auth", ["moduleSignUp"]),
    forgotPassword() {
    //   this.moduleSignUp({ profile: this.registerModel });
    },
  },
};
</script>

<style lang="scss" scoped></style>
