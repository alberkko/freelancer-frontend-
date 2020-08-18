<template>
  <div>
    <div class="mt-4">
      <div class="uppercase text-sm font-bold text-blue-900 mt-3">Project Type</div>
      <div class="block">
        <div class="mt-2">
          <div>
            <label class="inline-flex items-center">
              <input
                type="checkbox"
                class="form-checkbox"
                value="Fixed_Project"
                v-model="project_type_fp"
                @click="onClickButton()"
              />
              <span class="ml-2">Fixed Project</span>
            </label>
          </div>
          <div>
            <label class="inline-flex items-center">
              <input
                type="checkbox"
                class="form-checkbox"
                value="FHourly_Project"
                v-model="project_type_hp"
                @click="onClickButton()"
              />
              <span class="ml-2">Hourly Project</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  data: () => ({
    project_type_fp: false,
    project_type_hp: false
  }),
  components: {},
  methods: {
    onClickButton() {
      var self = this;
      if (this.project_type_fp) {
        setTimeout(function() {
        //   console.log("fp + : " + self.project_type_fp);
          this.$emit("clicked", "someValue");
        }, 30);
      }
      if (!this.project_type_fp) {
        setTimeout(function() {
          console.log("fp - : " + self.project_type_fp);
        }, 30);
      }
      if (this.project_type_hp) {
        setTimeout(function() {
          console.log("hp + : " + self.project_type_hp);
        }, 30);
      }
      if (!this.project_type_hp) {
        setTimeout(function() {
          console.log("hp - : " + self.project_type_hp);
        }, 30);
      }
    }
  }
};
</script>

<style>
</style>