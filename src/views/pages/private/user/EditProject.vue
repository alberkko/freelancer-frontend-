<template>
  <div class=" flex justify-center">
    <div class="flex mt-10  w-9/12 relative">
      <div class="flex flex-col w-0 flex-1 overflow-hidden px-2">
        <div class>
          <div class>
            <div class="title">
              <h1 class="font-bold text-blue-800 text-3xl text-left">1. Tell us what you need done</h1>
              <p
                class="text-xs mt-2 text-gray-400"
              >Contact skilled freelancers within minutes. View profiles, ratings, portfolios and chat with them. Pay the freelancer only when you are 100% satisfied with their work.</p>
            </div>
            <div class="mx-4 card bg-white p-6 shadow-md rounded-lg my-4 mx-auto">
              <div class="form mt-0">
                <div class="flex flex-col text-sm">
                  <label
                    class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >Project Name</label>
                  <input
                    class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="title"
                    type="text"
                    v-model="projectModel.title"
                    placeholder="Project Name"
                    v-bind:class="{ form_err: ((!projectModel.title && cont_err) || (!projectModel.title && title_err))}"
                  />
                  <p
                    v-if="(cont_err && !projectModel.title) || (!projectModel.title && title_err)"
                    class="text-red-500 text-xs italic"
                  >Please fill out this field.</p>
                </div>

                <div class="text-sm flex flex-col">
                  <div>
                    <label
                      for="description"
                      class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2 mt-6"
                    >Project Summary</label>
                  </div>
                  <textarea
                    class="appearance-none block h-32 w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    v-model="project_desc"
                    id="project_desc"
                    placeholder="Enter your description"
                    v-bind:class="{ form_err: (!project_desc && cont_err) || (!project_desc && project_desc_err)}"
                  ></textarea>
                  <p
                    v-if="(!project_desc && cont_err) || (!project_desc && project_desc_err)"
                    class="text-red-500 text-xs italic"
                  >Please fill out this field.</p>
                </div>

                <div class="text-sm flex flex-col">
                  <div>
                    <label
                      class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2 mt-6"
                    >Tell us more about your project (Optional)</label>
                  </div>
                  <!-- <textarea
                    class="appearance-none block h-64 w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    placeholder="Enter project details"
                    v-model="project_details"
                  ></textarea>-->
                  <vue-editor v-model="project_details"></vue-editor>
                </div>
              </div>
              <div class="mt-5 flex justify-between">
                <input type="file" multiple="multiple" @change="Images_onFileChanged" />
              </div>

              <div>
                <div class="pt-10">
                  <div
                    v-if="projectModel.files.length"
                    @click="removeFiles"
                    class="text-xs text-red-500 cursor-pointer"
                  >Remove Files</div>
                  <div v-for="(item, key) in projectModel.files" v-bind:key="key">
                    <div
                      class="border flex rounded px-2 py-1 my-2 w-2/12 text-center hover:bg-blue-100"
                    >
                      <span
                        class="iconify"
                        data-icon="ant-design:download-outlined"
                        data-inline="false"
                        style="color: #b3b3b3;"
                        data-width="20"
                        data-height="20"
                      ></span>
                      <a
                        class="pl-2"
                        :href="projectModel.files[key]"
                        download
                      >Download file {{key+1}}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <transition name="slide-fade">
              <div>
                <div class="title">
                  <h1 class="font-bold text-blue-800 mt-12 text-3xl text-left">2. Project Category</h1>
                  <p
                    class="text-xs mt-2 text-gray-400"
                  >Categorizing your project helps us personalize your job details and match your job to relevant freelancers and agencies.</p>
                </div>
                <div class="mx-4 card bg-white p-6 shadow-md rounded-lg my-4 mx-auto">
                  <div>
                    <div class="flex flex-col text-sm">
                      <div class="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4">
                        <div class="w-full md:w-2/4">
                          <label
                            class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
                            for="grid-state"
                          >Category</label>
                          <div class="relative">
                            <select
                              class="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-state"
                              v-model="selected"
                              @change="onChange()"
                            >
                              <option v-for="(item, key) in category" v-bind:key="key">{{item}}</option>
                              <option value disabled hidden>Select Category</option>
                            </select>
                            <div
                              class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                            >
                              <svg
                                class="fill-current h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>

                        <div class="w-full md:w-2/4">
                          <label
                            for="title"
                            class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
                          >What skills are required?</label>
                          <div id="continue1">
                            <vue-tags-input
                              style="max-width:100%!important;"
                              id="tags"
                              autocomplete="off"
                              v-model="tag"
                              :tags="tags"
                              :autocomplete-items="filteredItems"
                              :add-only-from-autocomplete="true"
                              @tags-changed="newTags => tags = newTags"
                            />
                          </div>
                          <p
                            v-if="(cont_err && !tags.length) || (!tags.length && tags_err)"
                            class="text-red-500 text-xs italic mt-2"
                          >*Please select at least one skill</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </transition>

            <transition name="slide-fade">
              <div>
                <div class="title">
                  <h1
                    class="font-bold text-blue-800 mt-12 text-3xl text-left"
                  >3. Duration and Payment Options</h1>
                  <p
                    class="text-xs mt-2 text-gray-400"
                  >These tricks no longer seem to work in Chrome 66.0.3359.139. I was using autocomplete="nope" and all of a sudden autocomplete is back on those forms.</p>
                </div>
                <div class="mx-4 card bg-white p-6 shadow-md rounded-lg my-4 mx-auto">
                  <!-- <transition name="slide-fade">
                  <div v-show="continue3">-->
                  <div id="continue2" class="flex flex-col text-sm">
                    <div class="mb-12">
                      <label
                        for="title"
                        class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
                      >Duration of your post (in days):</label>
                      <div>
                        <form action>
                          <input
                            class="border rounded-sm w-2/6 py-1 px-2"
                            v-model.number="duration"
                            type="number"
                          />
                          <!-- <input type="submit" /> -->
                        </form>
                      </div>
                    </div>
                    <label
                      for="title"
                      class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
                    >What is your estimated budget?</label>
                    <div class="flex relative">
                      <!-- <div id="continue2"> -->
                      <div id="currency-selector" class="relative w-5/12 md:w-2/12">
                        <select
                          v-model="currency"
                          class="c-selector block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        >
                          <option value="USD">USD</option>
                          <option value="EUR">EUR</option>
                          <option value="NZD">NZD</option>
                          <option value="AUD">AUD</option>
                          <option value="GBP">GBP</option>
                          <option value="ALL">ALL</option>
                          <option value="CAD">CAD</option>
                          <option value="INR">INR</option>
                        </select>
                        <div
                          class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                        >
                          <svg
                            class="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path
                              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                            />
                          </svg>
                        </div>
                      </div>
                      <!-- </div> -->
                      <div class="pl-5">
                        <div id="currency-selector" class="relative">
                          <select
                            v-model="project_size"
                            class="c-selector c-selector block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          >
                            <option value="10.00 - 30.00">Small Project (10.00 - 30.00 {{currency}})</option>
                            <option
                              value="100.00 - 300.00"
                            >Medium Project (100.00 - 300.00 {{currency}})</option>
                            <option
                              value="1,000.00 - 3,000.00"
                            >Large Project (1,000.00 - 3,000.00 {{currency}})</option>
                            <option
                              value="10,000.00 - 30,000.00"
                            >Major Project (10,000.00 - 30,000.00 {{currency}})</option>
                            <option value="c_p">Custom Budget</option>
                          </select>
                          <div
                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                          >
                            <svg
                              class="fill-current h-4 w-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path
                                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div v-if="project_size == 'c_p'">
                      <div class="flex flex-col text-sm">
                        <label
                          for="title"
                          class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2 mt-5"
                        >Minimum Budget</label>
                        <div class="flex items-center">
                          <div
                            v-if="currency == 'EUR'"
                            class="border border-gray-400 px-4 border-r-0 bg-gray-100 py-2 text-gray-400"
                          >€</div>
                          <div
                            v-else
                            class="border border-gray-400 px-4 border-r-0 bg-gray-100 py-2 text-gray-400"
                          >$</div>
                          <input
                            class="appearance-none border border-gray-400 p-2 focus:outline-none focus:border-gray-500 w-6/12 md:w-4/12"
                            v-bind:class="{ form_err: ((min_budget < 1 || min_budget == null)  && cont_err_3) || ((min_budget < 1 || min_budget == null) && min_err)}"
                            type="number"
                            placeholder="10"
                            v-model.number="min_budget"
                          />
                          <transition name="slide-fade-x">
                            <div
                              v-if="hourly_rate"
                              class="border border-gray-500 px-4 border-l-0 bg-gray-100 py-2 text-gray-400"
                            >per hour</div>
                          </transition>
                        </div>
                      </div>
                      <div class="flex flex-col text-sm">
                        <label
                          for="title"
                          class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2 mt-5"
                        >Maximum Budget</label>
                        <div class="flex items-center">
                          <div
                            v-if="currency == 'EUR'"
                            class="border border-gray-400 px-4 border-r-0 bg-gray-100 py-2 text-gray-400"
                          >€</div>
                          <div
                            v-else
                            class="border border-gray-400 px-4 border-r-0 bg-gray-100 py-2 text-gray-400"
                          >$</div>
                          <input
                            class="appearance-none border border-gray-400 p-2 focus:outline-none focus:border-gray-500 w-6/12 md:w-4/12"
                            v-bind:class="{ form_err: ((max_budget < 1 || max_budget == null)  && cont_err_3)}"
                            type="number"
                            placeholder="1,000"
                            v-model.number="max_budget"
                          />
                          <transition name="slide-fade-x">
                            <div
                              v-if="hourly_rate"
                              class="border border-gray-500 px-4 border-l-0 bg-gray-100 py-2 text-gray-400"
                            >per hour</div>
                          </transition>
                        </div>
                      </div>
                      <p
                        v-if="(max_budget < min_budget && cont_err_3) || ( max_budget < min_budget && max_min_err)"
                        class="text-red-500 text-xs italic mt-2"
                      >*Maximum budget cannot be smaller than minimum budget</p>
                    </div>
                  </div>
                </div>
              </div>
            </transition>

            <transition name="slide-fade">
              <div>
                <div class="title">
                  <h1 class="font-bold text-blue-800 mt-12 text-3xl text-left">4. Need Help?</h1>
                  <p
                    class="text-xs mt-2 text-gray-400"
                  >Note that make sure the autocomplete value for each input is different. Hence the random string at the end.</p>
                </div>
                <div class="mx-4 card bg-white p-6 shadow-md rounded-lg my-4 mx-auto">
                  <div class="flex flex-col text-sm">
                    <label
                      for="title"
                      class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
                    >Do you need help looking for freelancers?</label>

                    <div class="md:flex justify-between">
                      <div
                        class="w-full md:w-6/12 md:mr-2 mb-4 md:mb-0 flex items-center border border-gray-300 rounded-lg hover:bg-blue-100 cursor-pointer"
                        v-bind:class="{ act: standard_project, form_err: (sp_rp_err && !(standard_project || recruiter_project)) }"
                        @click="standardProject()"
                      >
                        <svg
                          height="70"
                          viewBox="0 0 512 512"
                          width="250"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="m496 320v16a32 32 0 0 1 -32 32h-416a32 32 0 0 1 -32-32v-16z"
                            fill="#57a4ff"
                          />
                          <path d="m56 120h112v112h-112z" fill="#327fd9" />
                          <path d="m200 120h112v112h-112z" fill="#327fd9" />
                          <path d="m344 120h112v112h-112z" fill="#327fd9" />
                          <path d="m160 416h192v24h-192z" fill="#327fd9" />
                          <path d="m200 120h112v112h-112z" fill="#327fd9" />
                          <path d="m56 120h112v112h-112z" fill="#327fd9" />
                          <path d="m344 120h112v112h-112z" fill="#327fd9" />
                          <g fill="#327fd9">
                            <path
                              d="m464 72h-416a40.045 40.045 0 0 0 -40 40v224a40.045 40.045 0 0 0 40 40h150.36l-6 32h-32.36a8 8 0 0 0 -8 8v24a8 8 0 0 0 8 8h192a8 8 0 0 0 8-8v-24a8 8 0 0 0 -8-8h-33.222l-5.334-32h150.556a40.045 40.045 0 0 0 40-40v-224a40.045 40.045 0 0 0 -40-40zm-440 40a24.027 24.027 0 0 1 24-24h416a24.027 24.027 0 0 1 24 24v200h-464zm320 320h-176v-8h176zm-41.443-24h-93.917l6-32h82.583zm185.443-72a24.027 24.027 0 0 1 -24 24h-416a24.027 24.027 0 0 1 -24-24v-8h464z"
                            />
                            <path d="m56 352h40a8 8 0 0 0 0-16h-40a8 8 0 0 0 0 16z" />
                            <path d="m120 352h8a8 8 0 0 0 0-16h-8a8 8 0 0 0 0 16z" />
                            <path
                              d="m312 112h-112a8 8 0 0 0 -8 8v112a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8v-112a8 8 0 0 0 -8-8zm-8 112h-96v-96h96z"
                            />
                            <path d="m312 248h-112a8 8 0 0 0 0 16h112a8 8 0 0 0 0-16z" />
                            <path d="m264 272h-64a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16z" />
                            <path d="m296 272h-8a8 8 0 0 0 0 16h8a8 8 0 0 0 0-16z" />
                            <path
                              d="m168 112h-112a8 8 0 0 0 -8 8v112a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8v-112a8 8 0 0 0 -8-8zm-8 112h-96v-96h96z"
                            />
                            <path d="m168 248h-112a8 8 0 0 0 0 16h112a8 8 0 0 0 0-16z" />
                            <path d="m120 272h-64a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16z" />
                            <path d="m152 272h-8a8 8 0 0 0 0 16h8a8 8 0 0 0 0-16z" />
                            <path
                              d="m456 112h-112a8 8 0 0 0 -8 8v112a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8v-112a8 8 0 0 0 -8-8zm-8 112h-96v-96h96z"
                            />
                            <path d="m456 248h-112a8 8 0 0 0 0 16h112a8 8 0 0 0 0-16z" />
                            <path d="m408 272h-64a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16z" />
                            <path d="m440 272h-8a8 8 0 0 0 0 16h8a8 8 0 0 0 0-16z" />
                          </g>
                        </svg>
                        <div class="p-4 pb-0 pl-0 flex flex-col justify-between leading-normal">
                          <div class="mb-8">
                            <div class="text-gray-900 text-lg font-bold mb-2">Standard Project</div>
                            <p
                              class="text-gray-600 text-xs"
                            >Free to post, your project will go live instantly and start receiving bids within seconds.</p>
                          </div>
                        </div>
                      </div>

                      <div
                        class="w-full md:w-6/12 md:ml-2 flex items-center border border-gray-300 rounded-lg hover:bg-blue-100 cursor-pointer"
                        v-bind:class="{ act: recruiter_project, form_err: (sp_rp_err && !(recruiter_project || standard_project)) }"
                        @click="recuriterProject()"
                      >
                        <!-- <div> -->

                        <svg
                          height="70"
                          viewBox="0 0 512 512"
                          width="250"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g>
                            <g fill="#57a4ff">
                              <path
                                d="m193.58 201.5 6.42 30.5-28.69-13.52a104.039 104.039 0 0 1 -131.3-24.02c.04-10.52.15-32.31.32-33.62l15.56-.04a72.017 72.017 0 0 0 123.28 8.23 11.8 11.8 0 0 0 1.98-8.52l37.69-.09a103.9 103.9 0 0 1 -25.26 41.08z"
                              />
                              <path d="m256 184v-23.66l24-.06v31.72h-16a8 8 0 0 1 -8-8z" />
                              <path
                                d="m392 192h-16v-31.94l23.96-.06c.03.32.04.66.04 1v24c0 3.42-3.58 7-8 7z"
                              />
                              <path
                                d="m440 296v64h-40v64h-144v-64h-40v-64a24.006 24.006 0 0 1 24-24l64-16c0 8.84 15.16 16 24 16s24-7.16 24-16l64 16a24.006 24.006 0 0 1 24 24z"
                              />
                              <path
                                d="m126.97 150.97 1.03 1.03 2.35-2.35a24.178 24.178 0 0 1 -3.38 1.32zm-30.97-30.97 1.03 1.03a24.178 24.178 0 0 1 1.32-3.38zm30.97 30.97 1.03 1.03 2.35-2.35a24.178 24.178 0 0 1 -3.38 1.32zm-29.94-29.94a24.178 24.178 0 0 1 1.32-3.38l-2.35 2.35zm22.97-97.03a104 104 0 1 0 51.31 194.48l28.69 13.52-6.42-30.5a103.9 103.9 0 0 0 25.26-41.08h.01c.05-.14.09-.28.13-.42a104.068 104.068 0 0 0 -98.98-136zm59.17 145.03a72 72 0 1 1 -100.2-100.2 11.971 11.971 0 0 1 15.28 1.42l17.26 17.26a12 12 0 0 1 0 16.98l-1.86 1.86-11.3 11.3-2.35 2.35 1.03 1.03a24.013 24.013 0 0 0 29.94 29.94l1.03 1.03 2.35-2.35 11.3-11.3 1.86-1.86a12 12 0 0 1 16.98 0l17.26 17.26a12.061 12.061 0 0 1 3.4 6.76 11.8 11.8 0 0 1 -1.98 8.52zm-83.17-49.03 1.03 1.03a24.178 24.178 0 0 1 1.32-3.38zm30.97 30.97 1.03 1.03 2.35-2.35a24.178 24.178 0 0 1 -3.38 1.32zm-30.97-30.97 1.03 1.03a24.178 24.178 0 0 1 1.32-3.38z"
                              />
                              <path
                                d="m496 424v32a24.006 24.006 0 0 1 -24 24h-432a24.006 24.006 0 0 1 -24-24v-32h200l8 24h64l8-24z"
                              />
                              <g>
                                <path
                                  d="m376 144c-24 16-96 16-96 16v-16a32 32 0 0 1 32-32h32a32 32 0 0 1 32 32z"
                                />
                                <path d="m376 144v16.06l-96 .22v-.28s72 0 96-16z" />
                                <path
                                  d="m440 296v64h-40v64h-144v-64h-40v-64a24.006 24.006 0 0 1 24-24l64-16c0 8.84 15.16 16 24 16s24-7.16 24-16l64 16a24.006 24.006 0 0 1 24 24z"
                                />
                                <path d="m328 272h-24v-16c0 8.84 15.16 16 24 16z" />
                                <path d="m352 256v16h-24c8.84 0 24-7.16 24-16z" />
                                <path d="m280 152v40h-16a8 8 0 0 1 -8-8v-24a8 8 0 0 1 8-8z" />
                                <path
                                  d="m400 161v24c0 3.42-3.58 7-8 7h-16v-40h16c4.14 0 7.54 3.14 7.96 8 .03.32.04.66.04 1z"
                                />
                              </g>
                              <path d="m130.35 149.65a24.178 24.178 0 0 1 -3.38 1.32z" />
                              <path d="m98.35 117.65a24.178 24.178 0 0 0 -1.32 3.38z" />
                            </g>
                            <g fill="#327fd9">
                              <path
                                d="m496 416h-16v-216a48.051 48.051 0 0 0 -48-48h-26.3a15.494 15.494 0 0 0 -13.7-8h-8a40.04 40.04 0 0 0 -40-40h-32a40.04 40.04 0 0 0 -40 40h-8a16.019 16.019 0 0 0 -13.84 8h-20.73a112.014 112.014 0 1 0 -221.43-24 111.425 111.425 0 0 0 24 69.19v218.81h-16a8 8 0 0 0 -8 8v32a32.03 32.03 0 0 0 32 32h432a32.03 32.03 0 0 0 32-32v-32a8 8 0 0 0 -8-8zm-112-256h7.83a2.373 2.373 0 0 1 .17 1v23h-8zm0 48v-8h8c8.67 0 16-6.87 16-15v-17h24a32.03 32.03 0 0 1 32 32v216h-16v-120a32.035 32.035 0 0 0 -30.95-31.98l-57.05-14.27v-5.1a40.06 40.06 0 0 0 24-36.65zm24 144v-24a8 8 0 0 0 -16 0v88h-128v-88a8 8 0 0 0 -16 0v24h-24v-56a16.021 16.021 0 0 1 16-16 7.93 7.93 0 0 0 1.94-.24l57.04-14.26c5.91 8.98 19.34 14.5 29.02 14.5 5.91 0 13.34-2.22 19.39-5.8a29.017 29.017 0 0 0 9.62-8.7l57.05 14.26a7.93 7.93 0 0 0 1.94.24 16.021 16.021 0 0 1 16 16v56zm24 16v48h-24v-48zm-147.1 64-2.67 8h-52.46l-2.67-8zm-60.9-16v-48h24v48zm88-160v-8h32v7.98c-.28 2.07-8.66 8.02-16 8.02s-15.73-5.96-16-8zm-24-112a24.032 24.032 0 0 1 24-24h32a24.03 24.03 0 0 1 23.58 19.58c-18.38 8.86-57.91 11.72-79.58 12.3zm0 23.87c7.33-.2 18.94-.68 31.76-1.91 20.47-1.95 36.6-5.06 48.24-9.29v51.33a24.032 24.032 0 0 1 -24 24h-32a23.937 23.937 0 0 1 -17.87-8h25.87a8 8 0 0 0 0-16h-32zm-24-7.68c0-.06.01-.12.01-.19h7.99v24h-8zm0 39.81h8v8h-8zm-16-32v48a8 8 0 0 0 8 8h19.35a40.252 40.252 0 0 0 20.65 20.65v5.1l-57.05 14.27a32.035 32.035 0 0 0 -30.95 31.98v120h-160v-202.28a111.922 111.922 0 0 0 123.57 13.72l25.02 11.8a8 8 0 0 0 11.24-8.89l-5.55-26.36a111.3 111.3 0 0 0 22.39-35.99zm-224-40a96 96 0 1 1 187.5 29.2 6.456 6.456 0 0 0 -.25.78 95.617 95.617 0 0 1 -23.33 37.87 8.008 8.008 0 0 0 -2.17 7.3l3.11 14.76-14.14-6.67a7.98 7.98 0 0 0 -7.36.29 96.035 96.035 0 0 1 -143.36-83.53zm464 328a16.021 16.021 0 0 1 -16 16h-432a16.021 16.021 0 0 1 -16-16v-24h186.23l6.18 18.53a8 8 0 0 0 7.59 5.47h64a8 8 0 0 0 7.59-5.47l6.18-18.53h186.23z"
                              />
                              <path d="m144 440h-80a8 8 0 0 0 0 16h80a8 8 0 0 0 0-16z" />
                              <path d="m176 440h-8a8 8 0 0 0 0 16h8a8 8 0 0 0 0-16z" />
                              <path
                                d="m120 208a79.419 79.419 0 0 0 46.98-15.24v-.01a80 80 0 0 0 18.76-19.16 19.942 19.942 0 0 0 -2.33-25.49l-17.27-17.27a20.014 20.014 0 0 0 -28.28 0l-12.1 12.1c-.37.14-.74.27-1.13.39a16.013 16.013 0 0 1 -19.95-19.95c.12-.39.25-.76.39-1.13l12.1-12.1a20.014 20.014 0 0 0 0-28.28l-17.27-17.27a19.942 19.942 0 0 0 -25.49-2.33 79.946 79.946 0 0 0 -19.16 18.76h-.01a80.008 80.008 0 0 0 64.76 126.98zm29.17-65.86a4.008 4.008 0 0 1 5.66 0l17.27 17.27a3.968 3.968 0 0 1 .5 5.06 64.3 64.3 0 0 1 -9.75 11.07l-23.54-23.54zm-65.64-66.74a3.968 3.968 0 0 1 5.06.5l17.27 17.27a4.008 4.008 0 0 1 0 5.66l-9.86 9.86-23.54-23.54a64.3 64.3 0 0 1 11.07-9.75zm-20.35 23.1 25.12 25.11a32.017 32.017 0 0 0 36.09 36.09l25.11 25.12a64.038 64.038 0 0 1 -86.32-86.32z"
                              />
                            </g>
                          </g>
                        </svg>
                        <div class="p-4 pb-0 pl-0 flex flex-col justify-between leading-normal">
                          <div class="mb-8">
                            <div class="text-gray-900 text-lg font-bold mb-2">Recruiter project</div>
                            <p
                              class="text-gray-600 text-xs"
                            >We'll assign one of our expert staff to help you find the perfect freelancer for the job.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="flex items-center mt-5">
                      <input
                        class
                        type="checkbox"
                        id="checkbox"
                        v-model="checked"
                        v-on:click="advancedIntoView()"
                      />
                      <label
                        id="advancedOptions"
                        class="ml-2 text-xs"
                        for="checkbox"
                      >View Advanced Options</label>
                    </div>
                  </div>
                  <div v-if="checked">
                    <div class="md:flex mt-5 justify-between">
                      <div class="flex justify-between w-full md:w-1/2">
                        <div>
                          <div class="flex items-center">
                            <input class type="checkbox" id="checkbox_u" v-model="checked_urgent" />
                            <label
                              class="ml-3 text-md font-bold uppercase"
                              for="checkbox_u"
                            >€ 9.00 {{currency}}</label>
                          </div>
                        </div>
                        <div>
                          <div class="ti-tag-4 bg-yellow-200 text-yellow-700 font-md">URGENT</div>
                        </div>
                      </div>
                      <div
                        class="text-xs md:w-3/6 md:ml-10 mt-5 md:mt-0 text-gray-600"
                      >Make your project stand out and let freelancers know that your job is time sensitive.</div>
                    </div>

                    <div class="md:flex mt-10 justify-between">
                      <div class="flex justify-between w-full md:w-1/2">
                        <div>
                          <div class="flex items-center">
                            <input class type="checkbox" id="checkbox_f" v-model="checked_featured" />
                            <label
                              class="ml-3 text-md font-bold uppercase"
                              for="checkbox_f"
                            >€ 9.00 {{currency}}</label>
                          </div>
                        </div>
                        <div>
                          <div
                            class="ti-tag-4 bg-green-300 text-green-800 font-md uppercase"
                          >featured</div>
                        </div>
                      </div>
                      <div
                        class="text-xs md:w-3/6 md:ml-10 mt-5 md:mt-0 text-gray-600"
                      >Attract more freelancers with a prominent placement in our 'Featured Jobs and Contests' page.</div>
                    </div>
                  </div>
                </div>
              </div>
            </transition>

            <transition name="slide-fade">
              <div>
                <div class="title">
                  <h1
                    class="font-bold text-blue-800 mt-12 text-3xl text-left"
                  >5. Are these details correct?</h1>
                  <p
                    class="text-xs mt-2 text-gray-400"
                  >If an author would like to prevent the autofilling of password fields in user management pages where a user can specify a new password for someone other than themself.</p>
                </div>
                <div class="mx-4 card bg-white p-6 shadow-md rounded-lg my-4 mx-auto">
                  <div class="flex justify-center mt-0">
                    <div class="w-full">
                      <!-- <label for="title" class="font-bold mb-2">Are these details correct?</label> -->
                      <div class="mt-5 border rounded-lg">
                        <div
                          class="h-full flex flex-col justify-between bg-white shadow-md sm:rounded-lg"
                        >
                          <div class="flex flex-col justify-between h-full pt-6">
                            <div>
                              <div class="px-6">
                                <p class="text-xs leading-6 font-medium text-gray-400">
                                  <!-- {{currentDateOnly}} -->
                                  now
                                  <span class="font-bold px-1">•</span>
                                  <span class="font-bold text-green-500">{{duration}} Days Left</span>
                                </p>
                                <h3
                                  class="text-lg leading-6 font-bold text-gray-900 mb-3"
                                >{{projectModel.title}}</h3>
                                <!-- <ProjectCardSkillsList /> -->
                                <div id="continue4" class="flex mb-4 flex-wrap">
                                  <div
                                    class="ti-tag-2"
                                    v-for="tag in tags"
                                    :key="tag.text"
                                  >{{ tag.text }}</div>
                                </div>
                                <div class="mt-0 mb-5 text-sm leading-5 text-gray-500 break-words">
                                  <p>{{project_desc}}</p>
                                </div>
                                <div class="flex mb-4 flex-wrap">
                                  <div
                                    v-if="recruiter_project"
                                    class="ti-tag-3 bg-purple-300 text-purple-700 font-md"
                                  >RECRUITER</div>
                                  <div
                                    v-if="nda_project"
                                    class="ti-tag-3 bg-red-300 text-red-800 font-md"
                                  >NDA</div>
                                  <div
                                    v-if="checked_urgent"
                                    class="ti-tag-3 bg-yellow-200 text-yellow-700 font-md"
                                  >URGENT</div>
                                  <div
                                    v-if="checked_featured"
                                    class="ti-tag-3 bg-green-300 text-green-800 font-md"
                                  >FEATURED</div>
                                </div>
                              </div>
                              <div
                                class="bg-blue-800 text-white py-5 px-6 rounded-lg rounded-t-none"
                              >
                                <div
                                  v-if="project_size != 'c_p'"
                                  class="font-bold text-xl"
                                >{{project_size}} {{currency}}</div>
                                <div
                                  v-else
                                  class="font-bold text-xl"
                                >{{min_budget}}.00 - {{max_budget}}.00 {{currency}}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- </transition> -->
                  <div
                    v-if="continue4 && checked_featured || continue4 && checked_urgent"
                    class="flex items-center mt-5 bg-blue-100 border-t-4 border-blue-500 text-blue-700 p-4 text-sm"
                    role="alert"
                  >
                    <svg
                      class="fill-current w-4 h-4 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"
                      />
                    </svg>
                    <p>Your project will be sent live immediately, but you will not be charged yet.</p>
                  </div>

                  <div
                    class="submit flex flex-col flex-col-reverse md:flex-row md:flex-row-reverse items-end justify-between mt-8 md:mt-0"
                  >
                    <!-- CONTINUE BUTTON ON STEP 5 / LAST STEP -->
                    <!-- v-if="continue4" -->
                    <div v-if="project_size == 'c_p'">
                      <button
                        v-if="!projectModel.title || !project_desc || !tags.length || !(fixed_price || hourly_rate) || max_budget < min_budget || min_budget < 1 ||  !(standard_project || recruiter_project)"
                        @click="continue_click_f_err()"
                        type="submit"
                        class="bg-blue-400 shadow-lg text-white px-4 py-2 hover:bg-blue-500 mt-4 md:mt-8 text-center font-semibold rounded-full focus:outline-none"
                      >Save Changes</button>
                      <button
                        v-else
                        @click="postProject()"
                        type="submit"
                        class="bg-blue-600 shadow-lg text-white px-4 py-2 hover:bg-blue-700 mt-4 md:mt-8 text-center font-semibold rounded-full focus:outline-none"
                      >Save Changes</button>
                    </div>

                    <!-- CONTINUE BUTTON ON STEP 5 / LAST STEP  / no cp-->

                    <!-- v-if="continue4" -->
                    <div v-else>
                      <button
                        v-if="!projectModel.title || !project_desc || !tags.length || !(fixed_price || hourly_rate) ||  !(standard_project || recruiter_project)"
                        @click="continue_click_f_err_2()"
                        type="submit"
                        class="bg-blue-400 shadow-lg text-white px-4 py-2 hover:bg-blue-500 mt-4 md:mt-8 text-center font-semibold rounded-full focus:outline-none"
                      >Save Changes</button>

                      <!-- CONTINUE BUTTON ON STEP 5 / LAST STEP -->

                      <!-- CONTINUE BUTTON ON STEP 5 / LAST STEP / ENABLED -->
                      <button
                        v-else
                        @click="postProject()"
                        type="submit"
                        class="bg-blue-600 shadow-lg text-white px-4 py-2 hover:bg-blue-700 mt-4 md:mt-8 text-center font-semibold rounded-full focus:outline-none"
                      >Save Changes</button>
                    </div>

                    <!-- CONTINUE BUTTON ON STEP 5 / LAST STEP / DISABLED -->

                    <div
                      v-if="continue4 && !checked_urgent && !checked_featured"
                      class="font-bold text-blue-700 text-xl px-4"
                    >Total: 0.00 {{currency}}</div>
                    <div
                      v-else-if="continue4 && checked_urgent && !checked_featured"
                      class="font-bold text-blue-700 text-xl px-4"
                    >Total: 9.00 {{currency}}</div>
                    <div
                      v-else-if="continue4 && checked_featured && !checked_urgent"
                      class="font-bold text-blue-700 text-xl px-4"
                    >Total: 9.00 {{currency}}</div>
                    <div
                      v-else-if="continue4 && checked_urgent && checked_featured"
                      class="font-bold text-blue-700 text-xl px-4"
                    >Total: 18.00 {{currency}}</div>
                  </div>
                  <div
                    v-if="continue4"
                    class="mt-12 border-t border-blue-500 text-gray-400 px-4 py-3"
                    role="alert"
                  >
                    <!-- <p class="font-bold">Informational message</p> -->
                    <p class="text-xs">
                      By clicking 'Yes, post my project', you agree to the Terms & Conditions and Privacy Policy
                      Copyright © 2020 Free-lancer Technology Pty Limited (ACN 142 189 759).
                    </p>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
      <div class="hidden lg:text-sm lg:block lg:w-1/4 lg:pl-6">
        <div
          class="flex flex-col justify-between overflow-y-auto sticky top-32 max-h-(screen-16) pt-12 pb-4 -mt-12 rounded-lg px-2"
        >
          <!-- Useful tips -->
          <div class="bg-white shadow-md rounded-lg mb-5 p-4 text-gray-500">
            <div class="font-bold text-sm uppercase">Useful tips</div>
            <div class="text-xs">
              <ol class="list-disc ml-4">
                <li>Describe your project in as much detail as you can comfortably reveal - it will increase the quality of proposals you receive and shorten the selection process.</li>
                <li>Match the experience level to your requirements – remember, you’re looking for the best you can afford, not the cheapest you can get.</li>
              </ol>
            </div>
          </div>
          <div
            v-if="projectModel.title"
            class="h-full flex flex-col justify-between bg-white shadow-md rounded-lg"
          >
            <div class="flex flex-col justify-between h-full">
              <div class="p-4">
                <p class="text-xs leading-6 font-medium text-gray-400">
                  <!-- {{currentDateOnly}} -->
                  now
                  <span class="font-bold px-1">•</span>
                  <span class="font-bold text-green-500">{{duration}} Days Left</span>
                </p>
                <h3 class="font-bold text-gray-900 mb-2">{{projectModel.title}}</h3>
                <!-- <ProjectCardSkillsList /> -->
                <div id="continue4" class="flex mb-2 flex-wrap space-x-1">
                  <div
                    class="text-xs flex items-center font-medium py-1 px-2 bg-white rounded-full text-yellow-400 bg-yellow-100"
                    v-for="tag in tags"
                    :key="tag.text"
                  >{{ tag.text }}</div>
                </div>
                <div
                  v-if="project_desc"
                  class="mt-0 mb-2 text-gray-500 break-words text-xs"
                >{{project_desc}}</div>
                <div
                  v-if="recruiter_project || nda_project || checked_urgent || checked_featured"
                  class="flex mb-4 flex-wrap"
                >
                  <div
                    v-if="recruiter_project"
                    class="ti-tag-3 bg-purple-300 text-purple-700 font-md"
                  >RECRUITER</div>
                  <div v-if="nda_project" class="ti-tag-3 bg-red-300 text-red-800 font-md">NDA</div>
                  <div
                    v-if="checked_urgent"
                    class="ti-tag-3 bg-yellow-200 text-yellow-700 font-md"
                  >URGENT</div>
                  <div
                    v-if="checked_featured"
                    class="ti-tag-3 bg-green-300 text-green-800 font-md"
                  >FEATURED</div>
                </div>
              </div>
              <div class="bg-blue-800 text-white p-4 rounded-lg rounded-t-none">
                <div v-if="project_size != 'c_p'" class="font-bold">{{project_size}} {{currency}}</div>
                <div v-else class="font-bold">{{min_budget}}.00 - {{max_budget}}.00 {{currency}}</div>
              </div>
            </div>
          </div>
          <button
            @click="removeProject"
            class="bg-white hover:bg-red-100 border-red-500 border-2 shadow-md rounded-lg mb-5 p-4 text-gray-500 mt-5"
          >
            <div class="flex justify-between items-center">
              <div class="font-bold text-red-500 text-xs uppercase">Delete this Project</div>
              <div>
                <span
                  class="iconify"
                  data-icon="ic:outline-delete-forever"
                  data-inline="false"
                  style="color: #ff2121;"
                  data-width="24"
                  data-height="24"
                ></span>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div
        v-show="modal"
        class="fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center"
      >
        <div class="fixed inset-0 transition-opacity">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <div
          class="bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div class="sm:flex sm:items-start">
            <div
              class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"
            >
              <svg
                class="h-6 w-6 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3
                class="text-lg leading-6 font-medium text-gray-900"
                id="modal-headline"
              >Delete project</h3>
              <div class="mt-2">
                <p
                  class="text-sm leading-5 text-gray-500"
                >Are you sure you want to delete this project? All of this data will be permanently removed from our servers forever. This action cannot be undone.</p>
              </div>
            </div>
          </div>
          <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
            <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
              <button
                @click="removeProjectConf"
                type="button"
                class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-red-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5"
              >Remove</button>
            </span>
            <span class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
              <button
                @click="modal = false"
                type="button"
                class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
              >Cancel</button>
            </span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import VueTagsInput from "@johmun/vue-tags-input";
import { mapActions } from "vuex";
export default {
  name: "Post a Project",
  data: () => ({
    modal: false,
    daysLeft: null,
    currentProject: "",
    duration: 0,
    project_details: null,
    selectedFile: null,
    b64files: [],
    title_err: false,
    base64Img: null,
    project_desc_err: false,
    project_desc: null,
    tags_err: false,
    fp_hr_err: false,
    max_min_err: false,
    min_err: false,
    sp_rp_err: false,
    checked: false,
    total: 0,
    currency: "EUR",
    project_size: "10.00 - 30.00",
    min_budget: null,
    checked_urgent: 0,
    checked_featured: 0,
    max_budget: null,
    standard_project: true,
    recruiter_project: false,
    continue1: false,
    continue2: false,
    continue3: false,
    continue4: false,
    continue5: false,
    fixed_price: true,
    hourly_rate: false,
    continue_counter: 0,
    priceTypeErr: false,
    budgetRangeErr: false,
    cont_err: false,
    cont_err_3: false,
    continue: [],
    tag: "",
    tags: [],
    autocompleteItems: [],
    selected: "",
    all_data: [],
    all_data_skills: [],
    category: [],
    skills: [],
    skill: [],
    ski: [],
    skz: [],
    currentDate: new Date(),
    currentDateOnly: new Date(),
    projectModel: {
      budgetFrom: 0,
      budgetTo: 0,
      categoryId: "",
      currencyId: "",
      endDate: new Date(),
      files: [],
      longDescription: "",
      shortDescription: "",
      startDate: new Date(),
      title: "",
      skillsModel: [],
      userCreated: "",
      id: "",
    },
  }),
  components: { VueTagsInput,VueEditor },
  computed: {
    filteredItems() {
      return this.autocompleteItems.filter((i) => {
        return i.text.toLowerCase().indexOf(this.tag.toLowerCase()) !== -1;
      });
    },
  },
  mounted() {
    //get project by id
    window.scrollTo({ top: 0 });

    this.currentProject = this.$route.params.id;
    // console.log(currentProject);

    this.moduleGetProjectById({ projectId: this.currentProject }).then(
      (data) => {
        let project_data = data.data;
        console.log(project_data);

        this.projectModel.title = project_data.title;
        this.project_desc = project_data.shortDescription;
        this.project_details = project_data.longDescription;
        this.selected = project_data.categoryId;
        this.projectModel.files = project_data.files;

        //push skill into tags
        for (let m = 0; m < project_data.skillsModel.length; m++) {
          this.skz.push(project_data.skillsModel[m].title);
          this.tags = this.skz.map((o) => ({ text: o }));
        }

        this.onChange();

        //get number of days left

        var d1 = new Date(project_data.recordCreated);
        var d2 = new Date(project_data.endDate);
        var millisecondsPerDay = 1000 * 60 * 60 * 24;
        var millisBetween = d2.getTime() - d1.getTime();
        var days = millisBetween / millisecondsPerDay;
        this.duration = Math.round(days);
        console.log(this.duration);
        console.log(days);

        this.currency = project_data.currencyId;

        //get projects size

        if (project_data.budgetFrom == 10 && project_data.budgetTo == 30) {
          this.project_size = "10.00 - 30.00";
        } else if (
          project_data.budgetFrom == 100 &&
          project_data.budgetTo == 300
        ) {
          this.project_size = "100.00 - 300.00";
        } else if (
          project_data.budgetFrom == 1000 &&
          project_data.budgetTo == 3000
        ) {
          this.project_size = "1000.00 - 3000.00";
        } else if (
          project_data.budgetFrom == 10000 &&
          project_data.budgetTo == 30000
        ) {
          this.project_size = "10000.00 - 30000.00";
        } else {
          this.project_size = "c_p";
          this.min_budget = project_data.budgetFrom;
          this.max_budget = project_data.budgetTo;
        }
      }
    );

    //get all the categories and category titles on mounted, to show on categories dropdown
    this.moduleAllProjectCategory().then((data) => {
      var all_data = data.data;
      for (var i = 0; i < all_data.length; i++) {
        this.category.push(all_data[i].title);
      }
    });

    this.currentDate = new Date();

    this.currentDateOnly = new Date().toLocaleDateString();
  },
  methods: {
    ...mapActions("projectCategory", ["moduleAllProjectCategory"]),
    ...mapActions("project", ["moduleUpdateFreeLancerProject"]),
    ...mapActions("project", ["moduleDeleteFreeLancerProject"]),
    ...mapActions("project", ["moduleGetProjectById"]),
    //when a category is selected this is called

    removeProject() {
      this.modal = true;
    },
    removeProjectConf() {
      this.moduleDeleteFreeLancerProject({ projectId: this.currentProject });
      this.$router.push("../my-projects");
    },
    removeFiles() {
      this.projectModel.files = [];
    },
    onChange() {
      this.skill = [];
      this.ski = [];
      this.skiModel = [];

      //get all the categories data from API
      this.moduleAllProjectCategory().then((data) => {
        this.all_data_skills = data.data;
        //loop through all the items in category array and find the one whose title = selected [in the ui]
        //get the skillModel of that particular category
        //get the titles of all skills in the skillModel of that category and put them in autocompleteItems.
        for (var i = 0; i < this.all_data_skills.length; i++) {
          if (this.all_data_skills[i].title == this.selected) {
            this.skill.push(this.all_data_skills[i].skillModel);
            for (var k = 0; k < this.skill[0].length; k++) {
              this.ski.push(this.skill[0][k].title);
              this.skiModel.push(this.skill[0][k]);
              this.autocompleteItems = this.ski.map((o) => ({ text: o }));

              console.log(this.autocompleteItems);
            }
          }
        }
      });
    },

    Images_onFileChanged(event) {
      this.selectedFile = event.target.files;
      for (var i = 0; i < this.selectedFile.length; i++) {
        var file = this.selectedFile[i];
        this.encodeImage(file);
      }
    },
    encodeImage(input) {
      if (input) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.base64Img = e.target.result;
          this.b64files.push(this.base64Img);
          this.projectModel.files.push(this.base64Img);
          // this.projectModel.files = this.b64files;
        };
        reader.readAsDataURL(input);
      }
    },
    Images_onUpload() {
      // console.log(this.b64files);
    },
    postProject() {
      var budgetfrom;
      var budgetto;
      var itemz = [];
      var selected_skills = [];

      if (this.project_size == "c_p") {
        budgetfrom = this.min_budget;
        budgetto = this.max_budget;
      } else {
        if (this.project_size == "10.00 - 30.00") {
          budgetfrom = 10;
          budgetto = 30;
        } else if (this.project_size == "100.00 - 300.00") {
          budgetfrom = 100;
          budgetto = 300;
        } else if (this.project_size == "1,000.00 - 3,000.00") {
          budgetfrom = 1000;
          budgetto = 3000;
        } else if (this.project_size == "10,000.00 - 30,000.00") {
          budgetfrom = 10000;
          budgetto = 30000;
        }
      }

      for (var i = 0; i < this.tags.length; i++) {
        selected_skills.push(this.tags[i].text);

        var temp_itemz = [];

        for (var j = 0; j < selected_skills.length; j++) {
          temp_itemz.push(
            //this.skill[0].find(x => x.title === selected_skills[j])
            this.skill[0].find((x) => x.title === selected_skills[j])
          );
          itemz = temp_itemz;
          // console.log(itemz);
          this.projectModel.skillsModel = itemz;
        }
      }

      Date.prototype.addDays = function (days) {
        var e_date = new Date(this.valueOf());
        e_date.setDate(e_date.getDate() + days);
        return e_date;
      };

      //add the UI values to the API variables
      var e_date = new Date();
      var formatedEndDate = e_date.addDays(this.duration);

      var Difference_In_Time_Ago =
        this.currentDate.getTime() - this.projectModel.startDate.getTime();
      var Difference_In_Days_Ago = Difference_In_Time_Ago / (1000 * 3600 * 24);

      console.log(Difference_In_Days_Ago);

      this.projectModel.categoryId = this.selected;
      this.projectModel.longDescription = this.project_details;
      this.projectModel.endDate = formatedEndDate;
      this.projectModel.budgetFrom = budgetfrom;
      this.projectModel.budgetTo = budgetto;
      this.projectModel.shortDescription = this.project_desc;
      // this.projectModel.files = this.b64files;
      this.projectModel.currencyId = this.currency;
      this.projectModel.id = this.currentProject;
      //

      //send the data to the back
      console.log(this.projectModel);
      this.moduleUpdateFreeLancerProject({ projectModel: this.projectModel });
      //  this.moduleDeleteFreeLancerProject({ projectId: this.currentProject });

      this.$router.push("../my-projects");
    },

    continue_click_f_err() {
      if (!this.projectModel.title) {
        this.title_err = true;

        var element_5 = document.getElementById("title");
        element_5.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
      }
      if (!this.project_desc) {
        this.project_desc_err = true;

        var element_4 = document.getElementById("title");
        element_4.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
      }
      if (!this.tags.length) {
        this.tags_err = true;

        var element_3 = document.getElementById("continue1");
        element_3.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
      }
      if (!(this.fixed_price || this.hourly_rate)) {
        this.fp_hr_err = true;

        var element_2 = document.getElementById("continue2");
        element_2.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
      }
      if (!(this.standard_project || this.recruiter_project)) {
        this.sp_rp_err = true;

        var element_1 = document.getElementById("continue3");
        element_1.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
      }
      if (this.max_budget < this.min_budget) {
        this.max_min_err = true;
        var element_6 = document.getElementById("continue2");
        element_6.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
      }
      if (this.min_budget < 1) {
        this.min_err = true;
        var element_7 = document.getElementById("continue2");
        element_7.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
      }
    },
    continue_click_f_err_2() {
      if (!this.projectModel.title) {
        this.projectModel.title_err = true;

        var element_5 = document.getElementById("title");
        element_5.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
      }
      if (!this.project_desc) {
        this.project_desc_err = true;

        var element_4 = document.getElementById("title");
        element_4.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
      }
      if (!this.tags.length) {
        this.tags_err = true;

        var element_3 = document.getElementById("continue1");
        element_3.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
      }
      if (!(this.fixed_price || this.hourly_rate)) {
        this.fp_hr_err = true;

        var element_2 = document.getElementById("continue2");
        element_2.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
      }
      if (!(this.standard_project || this.recruiter_project)) {
        this.sp_rp_err = true;

        var element_1 = document.getElementById("continue3");
        element_1.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
      }
    },
    continue_err() {
      this.cont_err = true;
    },
    continue_err_3() {
      this.cont_err_3 = true;
    },
    advancedIntoView() {
      setTimeout(function () {
        var element = document.getElementById("advancedOptions");
        element.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
      }, 30);
    },
    continue_click: function () {
      this.continue_counter++;
      var elementId;

      //replace with for loop and array!!

      if (this.continue_counter == 1) {
        this.continue1 = true;
        elementId = "continue1";
      }
      if (this.continue_counter == 2) {
        this.continue2 = true;
        elementId = "continue2";
      }
      if (this.continue_counter == 3) {
        this.continue3 = true;
        elementId = "continue3";
      }
      if (this.continue_counter == 4) {
        this.continue4 = true;
        elementId = "continue4";
      }
      // if (this.continue_counter == 5) {
      //   this.continue5 = true;
      //   elementId = "continue5";
      // }

      setTimeout(function () {
        var elID = elementId;
        var element = document.getElementById(elID);
        element.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
      }, 30);
    },
    fixedPrice: function () {
      this.fixed_price = !this.fixed_price;
      this.hourly_rate = false;
    },
    hourlyRate: function () {
      this.hourly_rate = !this.hourly_rate;
      this.fixed_price = false;
    },
    standardProject: function () {
      this.standard_project = !this.standard_project;
      this.recruiter_project = false;
    },
    recuriterProject: function () {
      this.recruiter_project = !this.recruiter_project;
      this.standard_project = false;
    },
  },
};
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.5s ease;
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

.slide-fade-x-enter-active {
  transition: all 0.2s ease;
}

.slide-fade-x-enter,
.slide-fade-x-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}

.ti-tag {
  background-color: #f1f8ff !important;
  color: #0366d6 !important;
  border-radius: 25px !important;
  padding-right: 10px !important;
  padding-left: 15px !important;
  padding-top: 5px !important;
  padding-bottom: 7px !important;
  align-items: center;
  font-weight: 600;
}

.ti-tag-2 {
  background-color: #f1f8ff !important;
  color: #0366d6 !important;
  border-radius: 25px !important;
  padding-right: 15px !important;
  padding-left: 15px !important;
  margin-right: 10px;
  margin-top: 10px;
  padding-top: 2px !important;
  padding-bottom: 4px !important;
  align-items: center;
  font-size: 14px;
}

.ti-tag-3 {
  /* background-color: #e390f4 !important;
  color: #ffffff !important; */
  border-radius: 25px !important;
  padding-right: 15px !important;
  padding-left: 15px !important;
  margin-right: 10px;
  margin-top: 10px;
  padding-top: 2px !important;
  padding-bottom: 2px !important;
  align-items: center;
  font-size: 14px;
}

.ti-tag-4 {
  /* background-color: #e390f4 !important;
  color: #ffffff !important; */
  border-radius: 25px !important;
  padding-right: 15px !important;
  padding-left: 15px !important;
  margin-right: 10px;
  /* margin-top: 10px; */
  padding-top: 2px !important;
  padding-bottom: 2px !important;
  align-items: center;
  font-size: 14px;
}

.ti-content {
  padding-right: 5px;
}

.ti-input {
  padding-right: 5px;
  border: solid 1px rgb(180, 180, 180);
}

.act {
  /* background-color: #e1effe; */
  border: solid 2px #4299e1 !important;
}

.c-selector {
  border: solid 1px rgb(195, 195, 195);
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  /* border-radius: 5px; */
}

.form_err {
  border: 1px solid #f56565 !important;
}

.form_err_id {
  border: 1px solid #f56565 !important;
}
</style>