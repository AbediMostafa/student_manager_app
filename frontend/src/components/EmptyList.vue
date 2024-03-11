<template>

  <div class="d-flex flex-column align-items-center justify-content-center mt-10">
    <img src="/media/empty.jpg" class="w-500px" alt="">
    <h2 class="header">You don't have any Student yet</h2>
    <a  @click="router.push({name:'create-student'})" class="btn btn-primary btn-sm d-flex align-items-center justify-content-center w-300px mt-4">
    <span class="svg-icon svg-icon-3">
        <plus-icon/>
    </span>
      Add New Student
    </a>
  </div>
</template>

<style scoped>
.header {
  color: #2587b8;
}
</style>
<script setup lang="ts">
import PlusIcon from "./icons/PlusIcon.vue";
import router from "../router";

</script>