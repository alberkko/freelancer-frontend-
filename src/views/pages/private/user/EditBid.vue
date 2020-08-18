<template>
  <div class="bg-white shadow-md rounded-lg mb-8">
    <div class="px-4 py-5 sm:p-6 mb-0">
      <h3 class="text-xl leading-6 font-bold text-gray-900 mb-3 mt-2">Bid for the project</h3>
      <div class="mt-0 mb-3 max-w-full text-sm leading-5 text-gray-500">
        <form>
          <div class="mt-6 grid grid-cols-1 row-gap-6 col-gap-4 sm:grid-cols-6">
            <div class="sm:col-span-2">
              <div class="mt-1 rounded-md">
                <label
                  class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >Bid Amount (in {{project_data.currencyId}})</label>
                <input
                  v-model="projectBidModel.value"
                  id="bidValue"
                  type="number"
                  class="border-gray-100 bg-gray-50 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5 focus:bg-white"
                  placeholder="Bid value"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <div class="mt-1 rounded-md">
                <label
                  class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >Start Date</label>
                <input
                  v-model="projectBidModel.startDate"
                  id="startDate"
                  type="date"
                  class="border-gray-100 bg-gray-50 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5 focus:bg-white"
                  placeholder="Start date"
                />
                <!-- <input type="date" id="birthday" name="birthday"> -->
              </div>
            </div>

            <div class="sm:col-span-2">
              <div class="mt-1 rounded-md">
                <label
                  class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >Duration (in days)</label>
                <input
                  v-model.number="duration"
                  id="endDate"
                  class="border-gray-100 bg-gray-50 form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5 focus:bg-white"
                  placeholder="Duration"
                />
              </div>
            </div>
            <div class="sm:col-span-6">
              <div class="mt-1 rounded-md">
                <label
                  class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >Cover Letter</label>
                <textarea
                  v-model="projectBidModel.longDescription"
                  id="longDescription"
                  rows="10"
                  class="border-gray-100 bg-gray-50 form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5 focus:bg-white"
                  placeholder="Short presantation"
                ></textarea>
              </div>
              <p
                class="mt-2 text-xs text-gray-400 leading-5"
              >Write a few sentences about cover letter.</p>
            </div>
            <div class="sm:col-span-6">
              <div class="mt-5 flex justify-between">
                <input type="file" multiple="multiple" @change="Images_onFileChanged" />
              </div>
            </div>
          </div>
          <div class="mt-8 pt-5">
            <div class="flex justify-end">
              <span class="ml-3 inline-flex rounded-md shadow-sm">
                <button
                  @click="AddProjectBid()"
                  type="button"
                  class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-bold rounded-md text-white bg-blue-800 hover:bg-blue-700 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out uppercase"
                >submit the bid</button>
              </span>
            </div>
            <div
              v-if="negative_value_error"
              class="mt-8 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <span class="block sm:inline">Negative values are not allowed</span>
              <button
                @click="negative_value_error = !negative_value_error"
                class="absolute top-0 bottom-0 right-0 px-4 py-3"
              >
                <svg
                  class="fill-current h-6 w-6 text-red-500"
                  role="button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <title>Close</title>
                  <path
                    d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
                  />
                </svg>
              </button>
            </div>

            <div
              v-if="empty_value_error"
              class="mt-8 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <span class="block sm:inline">Please fill in all the required fields</span>
              <button
                @click="empty_value_error = !empty_value_error"
                class="absolute top-0 bottom-0 right-0 px-4 py-3"
              >
                <svg
                  class="fill-current h-6 w-6 text-red-500"
                  role="button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <title>Close</title>
                  <path
                    d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>