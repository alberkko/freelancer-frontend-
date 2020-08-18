<template>
  <div class="pb-32">
    <div class="bg-blue-800">
      <div
        class="flex flex-col max-w-screen-sxl mx-auto py-4 sm:py-8 px-4 sm:px-6 lg:py-16 lg:px-8"
      >
        <h2 class="text-4xl font-bold tracking-tight sm:leading-10 text-white sm:text-5xl">Register</h2>
        <h3
          class="text-2xl sm:text-3xl font-light leading-9 tracking-tight text-white sm:leading-10"
        >For freelancers and successful projects</h3>
      </div>
    </div>
    <div class="max-w-screen-sxl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex lg:flex-row flex-col space-x-64">
        <div class="flex-1">
          <div>
            <div class="flex flex-col sm:flex-row space-x-6">
              <div class="mt-1 rounded-md shadow-sm flex-1">
                <input
                  id="firstname"
                  type="text"
                  required
                  v-model="registerModel.firstName"
                  placeholder="Firstname"
                  class="appearance-none block w-full px-3 py-4 border border-gray-300 rounded-md placeholder-gray-600 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out"
                />
              </div>
              <div class="mt-1 rounded-md shadow-sm flex-1">
                <input
                  id="lastName"
                  type="text"
                  required
                  v-model="registerModel.lastName"
                  placeholder="Lastname"
                  class="appearance-none block w-full px-3 py-4 border border-gray-300 rounded-md placeholder-gray-600 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out"
                />
              </div>
            </div>

            <div class="mt-6">
              <div class="mt-1 rounded-md shadow-sm">
                <input
                  id="userName"
                  type="text"
                  required
                  v-model="registerModel.userName"
                  placeholder="Username"
                  class="appearance-None block w-full px-3 py-4 border border-gray-300 rounded-md placeholder-gray-600 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out"
                />
              </div>
            </div>
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
            <div class="mt-6">
              <div class="mt-1 rounded-md shadow-sm">
                <input
                  id="password"
                  type="password"
                  required
                  v-model="registerModel.password"
                  placeholder="Password"
                  class="appearance-none block w-full px-3 py-4 border border-gray-300 rounded-md placeholder-gray-600 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out"
                />
              </div>
            </div>
            <div class="mt-6">
              <div class="mt-1 rounded-md shadow-sm">
                <input
                  id="confirmPassword"
                  type="password"
                  required
                  v-model="confirmPassword"
                  placeholder="Confirm Password"
                  class="appearance-none block w-full px-3 py-4 border border-gray-300 rounded-md placeholder-gray-600 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out"
                />
              </div>
            </div>

            <div class="mt-6 flex items-center justify-end">
              <!-- <div class="flex items-center">
                <input
                  id="remember_me"
                  type="checkbox"
                  class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                />
                <label
                  for="remember_me"
                  class="ml-2 block text-sm leading-5 text-gray-900"
                >Remember me</label>
              </div>-->
            </div>

            <div class="mt-6 flex space-x-4">
              <span class="block w-full rounded-md shadow-sm">
                <button
                  @click="registerUser()"
                  class="w-full flex justify-center py-4 px-4 border border-white font-medium rounded-md text-white bg-blue-800 hover:border-transparent hover:bg-blue-900 focus:outline-none focus:border-transparent focus:shadow-outline-indigo active:bg-blue-900 transition duration-150 ease-in-out"
                >Register</button>
              </span>
            </div>
          </div>
        </div>
        <div class="flex-1">image</div>
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
        password: "",
        userName: "",
        firstName: "",
        lastName: "",
        email: ""
      }
    };
  },
  methods: {
    ...mapActions("auth", ["moduleSignUp"]),
    registerUser() {
      this.moduleSignUp({ profile: this.registerModel });
    }
  }
};
</script>

<style lang="scss" scoped></style>
