<template>
  <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4" v-if="total">
    <thead>
    <tr class="fw-bold text-muted">
      <th class="min-w-150px">Username</th>
      <th class="min-w-150px">Email</th>
      <th class="min-w-100px text-end">Actions</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(student, key) in students" :key="key">
      <td>
        <div class="d-flex align-items-center">
          <div class="symbol symbol-45px me-5">
            <img src="/media/blank.png" alt="student avatar">
          </div>
          <div class="d-flex justify-content-start flex-column">
            <a class="text-dark fw-bold text-hover-primary fs-6">{{ student.username }}</a>
          </div>
        </div>
      </td>
      <td>
        <a class="text-dark fw-bold text-hover-primary d-block fs-6">{{ student.email }}</a>
      </td>
      <td>
        <div class="d-flex justify-content-end flex-shrink-0">
          <el-button
              type="primary"
              loading
              text
              v-if="studentStore.is.deleting && studentStore.currentStudentId === student.id">Please wait
          </el-button>
          <a
              v-else
              @click="studentStore.deleteStudent(student.id)"
              class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
            <span class="svg-icon svg-icon-3">
              <trash-icon/>
            </span>
          </a>
        </div>
      </td>
    </tr>
    </tbody>
  </table>

  <empty-list v-else class="mb-8"/>

</template>

<script lang="ts">
import {defineComponent} from "vue";
import TrashIcon from "../icons/TrashIcon.vue";
import EmptyList from "../EmptyList.vue";
import {useStudentStore} from "../../store/StudentStore.ts";

export default defineComponent({
  name: 'student-table',
  components: {EmptyList, TrashIcon},
  props: {
    students: {
      type: Object,
      default: [],
    },
    total: {
      default: 0
    }
  },

  setup: () => ({
    studentStore: useStudentStore()
  })
})
</script>