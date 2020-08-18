<template>
  <div class>
    <div class="relative overflow-hidden bg-white">
      <div class="max-w-screen-sxl mx-auto">
        <div class="bg-white relative z-10 lg:max-w-3xl lg:w-full pb-16 lg:pb-28 xl:pb-32 pt-1">
          <svg
            class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div
            class="mt-8 mx-auto max-w-screen-sxl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
          >
            <div>
              <div class="flex flex-col">
                <div
                  class="tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none text-4xl md:text-5xl lg:text-6xl"
                >
                  Wellcome to
                  <!-- {{ getWordInLanguage("welcomeLabel") }} -->
                  <span class="whitespace-no-wrap">free-lancer.eu</span>
                </div>
                <div
                  class="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight leading-10 text-gray-600 font-light"
                >For freelancers and successful projects</div>
              </div>
              <p class="mt-3 font-normal text-gray-700 sm:mt-5 text-lg md:mt-5 md:text-xl lg:mx-0">
                Find projects and clients that you enjoy! Let your portfolio
                speak and show your skills to other members! New: Use our
                project management tools! Simply register with your name, email
                address and a reasonable password and you're good to go.
              </p>
              <div class="mt-5 sm:mt-8 sm:flex lg:justify-start">
                <div class="rounded-md shadow">
                  <a
                    href="/freelancers"
                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-800 hover:bg-blue-700 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  >Free-Lancers</a>
                </div>
                <div class="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="/projects"
                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-800 hover:bg-blue-700 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  >Projects</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-2/3">
        <img
          class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          alt
        />
      </div>
    </div>
    <div class="py-20 bg-gray-100">
      <div class="max-w-screen-sxl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <p
            class="text-base leading-6 text-blue-800 font-semibold tracking-wide uppercase"
          >Transactions</p>
          <h3
            class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
          >Your advantages with free-lancer.eu</h3>
          <p class="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>

        <div class="mt-20">
          <ul class="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
            <li>
              <div class="flex">
                <div class="flex-shrink-0">
                  <div
                    class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white"
                  >
                    <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h5
                    class="text-lg leading-6 font-medium text-gray-900"
                  >Publish your project for free</h5>
                  <p class="mt-2 text-base leading-6 text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </p>
                </div>
              </div>
            </li>
            <li class="mt-10 md:mt-0">
              <div class="flex">
                <div class="flex-shrink-0">
                  <div
                    class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white"
                  >
                    <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                      />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h5
                    class="text-lg leading-6 font-medium text-gray-900"
                  >Quick and easy to find your expert</h5>
                  <p class="mt-2 text-base leading-6 text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </p>
                </div>
              </div>
            </li>
            <li class="mt-10 md:mt-0">
              <div class="flex">
                <div class="flex-shrink-0">
                  <div
                    class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white"
                  >
                    <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h5
                    class="text-lg leading-6 font-medium text-gray-900"
                  >Project creation with two clicks</h5>
                  <p class="mt-2 text-base leading-6 text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </p>
                </div>
              </div>
            </li>
            <li class="mt-10 md:mt-0">
              <div class="flex">
                <div class="flex-shrink-0">
                  <div
                    class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-800 text-white"
                  >
                    <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h5 class="text-lg leading-6 font-medium text-gray-900">Free registration</h5>
                  <p class="mt-2 text-base leading-6 text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="max-w-screen-sxl mx-auto py-12 px-4 lg:py-16 lg:px-8">
      <div class="relative bg-blue-800">
        <div class="flex flex-col max-w-screen-sxl mx-auto py-4 sm:py-8 lg:py-16">
          <h2
            class="text-4xl font-bold tracking-tight sm:leading-10 text-white sm:text-5xl"
          >Categories</h2>
          <h3
            class="text-2xl sm:text-3xl font-light leading-9 tracking-tight text-white sm:leading-10"
          >For freelancers and successful projects</h3>
        </div>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 row-gap-4 md:col-gap-8 md:row-gap-10"
      >
        <a href="#" class="h-full">
          <div class="flex rounded-lg bg-blue-900 p-8 h-full flex">
            <div class="flex flex-col items-start justify-center">
              <img src="../../../../assets/web-programming 1.svg" />
              <p class="mt-4 text-2xl text-white font-bold">Websites, Software & Mobile</p>
            </div>
          </div>
        </a>
        <a href="#" class="h-full">
          <div class="flex rounded-lg bg-blue-900 p-8 h-full flex">
            <div class="flex flex-col items-start justify-center">
              <img src="../../../../assets/web-programming 1.svg" />
              <p class="mt-4 text-2xl text-white font-bold">Data Entry, Analytics & Admin</p>
            </div>
          </div>
        </a>
        <a href="#" class="h-full">
          <div class="flex rounded-lg bg-blue-900 p-8 h-full flex">
            <div class="flex flex-col items-start justify-center">
              <img src="../../../../assets/web-programming 1.svg" />
              <p class="mt-4 text-2xl text-white font-bold">Sales, Marketing & Digital Marketing</p>
            </div>
          </div>
        </a>
        <a href="#" class="h-full">
          <div class="flex rounded-lg bg-blue-900 p-8 h-full flex">
            <div class="flex flex-col items-start justify-center">
              <img src="../../../../assets/web-programming 1.svg" />
              <p class="mt-4 text-2xl text-white font-bold">Data Entry, Analytics & Admin</p>
            </div>
          </div>
        </a>
        <a href="#" class="h-full">
          <div class="flex rounded-lg bg-blue-900 p-8 h-full flex">
            <div class="flex flex-col items-start justify-center">
              <img src="../../../../assets/web-programming 1.svg" />
              <p class="mt-4 text-2xl text-white font-bold">Data Entry, Analytics & Admin</p>
            </div>
          </div>
        </a>
        <a href="#" class="h-full">
          <div class="flex rounded-lg bg-blue-900 p-8 h-full flex">
            <div class="flex flex-col items-start justify-center">
              <img src="../../../../assets/web-programming 1.svg" />
              <p class="mt-4 text-2xl text-white font-bold">Data Entry, Analytics & Admin</p>
            </div>
          </div>
        </a>
      </div>
    </div>

    <div class="py-20 bg-gray-100">
      <div class="max-w-screen-sxl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h3
            class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
          >Testimonials</h3>
          <p class="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>

        <carousel :perPage="1">
          <slide>
            <div class="mt-20">
              <ul class="md:grid">
                <li class="mt-10 md:mt-0">
                  <blockquote>
                    Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while. That's because they were able to connect experiences they've had and synthesize new things.
                    <div class="flex mt-10 justify-center items-center">
                      <div>
                        <img
                          class="inline-block h-15 w-15 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt
                        />
                      </div>
                      <div class="flex flex-row ml-5">
                        <div class="text-lg font-bold">Steve Jobs</div>
                        <div class="text-lg font-bold px-2 text-blue-900">/</div>
                        <div class="text-lg text-gray-400">CEO, Apple Inc.</div>
                      </div>
                    </div>
                  </blockquote>
                </li>
              </ul>
            </div>
          </slide>
          <slide>
            <div class="mt-20">
              <ul class="md:grid">
                <li class="mt-10 md:mt-0">
                  <blockquote>
                    Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while. That's because they were able to connect experiences they've had and synthesize new things.
                    <div class="flex mt-10 justify-center items-center">
                      <div>
                        <img
                          class="inline-block h-15 w-15 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt
                        />
                      </div>
                      <div class="flex flex-row ml-5">
                        <div class="text-lg font-bold">Steve Jobs</div>
                        <div class="text-lg font-bold px-2 text-blue-900">/</div>
                        <div class="text-lg text-gray-400">CEO, Apple Inc.</div>
                      </div>
                    </div>
                  </blockquote>
                </li>
              </ul>
            </div>
          </slide>
          <slide>
            <div class="mt-20">
              <ul class="md:grid">
                <li class="mt-10 md:mt-0">
                  <blockquote>
                    Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while. That's because they were able to connect experiences they've had and synthesize new things.
                    <div class="flex mt-10 justify-center items-center">
                      <div>
                        <img
                          class="inline-block h-15 w-15 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt
                        />
                      </div>
                      <div class="flex flex-row ml-5">
                        <div class="text-lg font-bold">Steve Jobs</div>
                        <div class="text-lg font-bold px-2 text-blue-900">/</div>
                        <div class="text-lg text-gray-400">CEO, Apple Inc.</div>
                      </div>
                    </div>
                  </blockquote>
                </li>
              </ul>
            </div>
          </slide>
        </carousel>
      </div>
    </div>

    <div class="py-20 bg-gray-100">
      <div class="mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div class="bg-gray-100 pt-10">
          <div class="mx-auto w-5/6">
            <div class="p-2 bg-gray-100 rounded">
              <div class="flex flex-col md:flex-row">
                <div class="md:w-1/3 p-4 text-sm">
                  <div class="text-3xl">
                    Frequently asked
                    <span class="font-medium">Questions</span>
                  </div>
                  <div class="my-2">Wondering how our service works ?</div>
                  <div class="mb-2">Confused about how we can improve your business ?</div>
                  <div class="text-xs text-gray-600">Dive into our FAQ for more details</div>
                </div>
                <div class="md:w-2/3">
                  <div class="p-4">
                    <div class="mb-2">
                      <div
                        class="font-medium rounded-sm text-lg px-2 py-3 flex text-gray-800 flex-row-reverse mt-2 cursor-pointer text-black bg-white hover:bg-white"
                        v-on:click="expand1 = !expand1"
                      >
                        <div class="flex-auto">How to build an app ?</div>
                        <div class="px-2 mt-1">
                          <div v-if="!expand1" style>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              height="100%"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-chevron-up w-5 h-5"
                            >
                              <polyline points="18 15 12 9 6 15" />
                            </svg>
                          </div>

                          <div v-else class style>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              height="100%"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-chevron-down w-5 h-5"
                            >
                              <polyline points="6 9 12 15 18 9" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <transition-expand>
                        <div
                          v-if="expand1"
                          class="box p-2 px-5 pb-5 text-justify text-left text-gray-800 mb-5 bg-white"
                        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                      </transition-expand>
                    </div>

                    <div class="mb-2">
                      <div
                        class="font-medium rounded-sm text-lg px-2 py-3 flex text-gray-800 flex-row-reverse mt-2 cursor-pointer text-black bg-white hover:bg-white"
                        v-on:click="expand2 = !expand2"
                      >
                        <div class="flex-auto">How do I create a Facebook account?</div>
                        <div class="px-2 mt-1">
                          <div v-if="!expand2" style>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              height="100%"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-chevron-up w-5 h-5"
                            >
                              <polyline points="18 15 12 9 6 15" />
                            </svg>
                          </div>

                          <div v-else class style>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              height="100%"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-chevron-down w-5 h-5"
                            >
                              <polyline points="6 9 12 15 18 9" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <transition-expand>
                        <div
                          v-if="expand2"
                          class="box p-2 px-5 pb-5 text-justify text-left text-gray-800 mb-5 bg-white"
                        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                      </transition-expand>
                    </div>

                    <div class="mb-2">
                      <div
                        class="font-medium rounded-sm text-lg px-2 py-3 flex text-gray-800 flex-row-reverse mt-2 cursor-pointer text-black bg-white hover:bg-white"
                        v-on:click="expand3 = !expand3"
                      >
                        <div class="flex-auto">How do I log into my Facebook account?</div>
                        <div class="px-2 mt-1">
                          <div v-if="!expand3" style>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              height="100%"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-chevron-up w-5 h-5"
                            >
                              <polyline points="18 15 12 9 6 15" />
                            </svg>
                          </div>

                          <div v-else class style>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              height="100%"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-chevron-down w-5 h-5"
                            >
                              <polyline points="6 9 12 15 18 9" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <transition-expand>
                        <div
                          v-if="expand3"
                          class="p-2 px-5 pb-5 text-justify text-left text-gray-800 mb-5 bg-white"
                        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                      </transition-expand>
                    </div>

                    <div class="mb-2">
                      <div
                        class="font-medium rounded-sm text-lg px-2 py-3 flex text-gray-800 flex-row-reverse mt-2 cursor-pointer text-black bg-white hover:bg-white"
                        v-on:click="expand4 = !expand4"
                      >
                        <div class="flex-auto">Lorem ipsum dolor sit amet?</div>
                        <div class="px-2 mt-1">
                          <div v-if="!expand4" style>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              height="100%"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-chevron-up w-5 h-5"
                            >
                              <polyline points="18 15 12 9 6 15" />
                            </svg>
                          </div>

                          <div v-else class style>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              height="100%"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-chevron-down w-5 h-5"
                            >
                              <polyline points="6 9 12 15 18 9" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <transition-expand>
                        <div
                          v-if="expand4"
                          class="p-2 px-5 pb-5 text-justify text-left text-gray-800 mb-5 bg-white"
                        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                      </transition-expand>
                    </div>

                    <div class="mb-2">
                      <div
                        class="font-medium rounded-sm text-lg px-2 py-3 flex text-gray-800 flex-row-reverse mt-2 cursor-pointer text-black bg-white hover:bg-white"
                        v-on:click="expand5 = !expand5"
                      >
                        <div class="flex-auto">Sed do eiusmod tempor incididunt ut labore?</div>
                        <div class="px-2 mt-1">
                          <div v-if="!expand5" style>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              height="100%"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-chevron-up w-5 h-5"
                            >
                              <polyline points="18 15 12 9 6 15" />
                            </svg>
                          </div>

                          <div v-else class style>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              height="100%"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-chevron-down w-5 h-5"
                            >
                              <polyline points="6 9 12 15 18 9" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <transition-expand>
                        <div
                          v-if="expand5"
                          class="p-2 px-5 pb-5 text-justify text-left text-gray-800 mb-5 bg-white"
                        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                      </transition-expand>
                    </div>

                    <div class="mb-2">
                      <div
                        class="font-medium rounded-sm text-lg px-2 py-3 flex text-gray-800 flex-row-reverse mt-2 cursor-pointer text-black bg-white hover:bg-white"
                        v-on:click="expand6 = !expand6"
                      >
                        <div class="flex-auto">How do I log into my Facebook account?</div>
                        <div class="px-2 mt-1">
                          <div v-if="!expand6" style>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              height="100%"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-chevron-up w-5 h-5"
                            >
                              <polyline points="18 15 12 9 6 15" />
                            </svg>
                          </div>

                          <div v-else class style>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              height="100%"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="feather feather-chevron-down w-5 h-5"
                            >
                              <polyline points="6 9 12 15 18 9" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <transition-expand>
                        <div
                          v-if="expand6"
                          class="p-2 px-5 pb-5 text-justify text-left text-gray-800 mb-5 bg-white"
                        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                      </transition-expand>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { Carousel, Slide } from "vue-carousel";
import { TransitionExpand } from "vue-transition-expand";
import "vue-transition-expand/dist/vue-transition-expand.css";

export default {
  data: () => ({
    expand1: false,
    expand2: false,
    expand3: false,
    expand4: false,
    expand5: false,
    expand6: false,
  }),
  computed: {
    ...mapGetters("lang", ["getWordInLanguage"]),
  },
  components: {
    Carousel,
    Slide,
    TransitionExpand,
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
blockquote {
  font-size: 1.4em;
  width: 80%;
  margin: 50px auto;
  font-family: Open Sans;
  font-style: italic;
  color: #555555;
  padding: 1.2em 30px 1.2em 75px;
  border-left: 8px solid #2552c4;
  line-height: 1.6;
  position: relative;
  background: #ededed;
  text-align: center;
}

blockquote::before {
  font-family: Arial;
  content: "\201C";
  color: #224fc2;
  font-size: 4em;
  position: absolute;
  left: 10px;
  top: -10px;
}

blockquote::after {
  content: "";
}

blockquote span {
  display: block;
  color: #333333;
  font-style: normal;
  font-weight: bold;
  margin-top: 1em;
}

.faq-details {
  height: 30px;
}

// .box,
// .expand-enter-active,
// .expand-leave-active {
//   transition: height 1s ease-in-out;
//   overflow: hidden;
// }

// .expand-enter,
// .expand-leave-to {
//   height: 0;
// }
</style>
