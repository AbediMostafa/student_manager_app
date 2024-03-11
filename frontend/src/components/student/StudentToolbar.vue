<template>
  <div class="card-toolbar" title="Click to add a Student">
    <a @click="router.push({name:'create-student'})" class="btn btn-success d-flex">
      <span class="svg-icon svg-icon-3">
        <plus-icon/>
      </span>
      Add Student
    </a>
  </div>

</template>

<script lang="ts">
import {defineComponent} from "vue";
import PlusIcon from "../icons/PlusIcon.vue";
import router from "../../router";

export default defineComponent({
  name: 'student-toolbar',
  components: {PlusIcon},
  props: {
    total: {
      default: 0,
    }
  },
  setup: () => ({router})
})
</script>