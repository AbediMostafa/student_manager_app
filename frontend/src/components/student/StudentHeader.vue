<template>
  <h3 class="card-title align-items-start flex-column">
    <span class="card-label fw-bold fs-3 mb-1">Students</span>
    <span class="text-muted mt-1 fw-semibold fs-7">{{ total }} student</span>
  </h3>

</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: 'student-header',
  props:{
    total:{
      default:0,
    }
  },
})
</script>