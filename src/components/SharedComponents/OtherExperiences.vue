<template>
  <div class="bg-white shadow sm:rounded-lg mb-4 mx-2 relative">
      <h3 class="text-xl leading-6 font-bold text-gray-900 mb-3 mt-2">Languages</h3>
    <div class="px-4 py-5 sm:p-6 mb-0">
      <div class="rounded-md">
        <label
          class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
          for="grid-state"
        >Expereince</label>
        <textarea
          id="longDescription"
          rows="1"
          class="border-gray-100 py-3 bg-white form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5 focus:bg-white"
          placeholder="Title"
        ></textarea>
      </div>
      <div>
        <label
          class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2 mt-5"
          for="grid-state"
        >Description</label>
        <div class="sm:col-span-6">
          <div class="rounded-md">
            <textarea
              id="longDescription"
              rows="5"
              class="border-gray-100 bg-white form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5 focus:bg-white"
              placeholder="Description"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    
}
</script>