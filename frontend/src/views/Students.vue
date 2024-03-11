<script lang="ts">
import {defineComponent, onMounted} from "vue";
import {useStudentStore} from "../store/StudentStore.ts";
import pagination from "../components/Pagination.vue";
import studentHeader from "../components/student/StudentHeader.vue";
import studentToolbar from "../components/student/StudentToolbar.vue";
import studentTable from "../components/student/StudentTable.vue";

export default defineComponent({
  name: 'students',
  components: {
    pagination,
    studentHeader,
    studentToolbar,
    studentTable,
  },
  setup() {
    const studentStore = useStudentStore();

    onMounted(studentStore.getStudents);

    return {
      studentStore,
    }
  }

})
</script>

<template>
  <div class="app-container container-xxl mt-14">
    <div class="card mb-5 mb-xl-8" v-loading=studentStore.is.loading>
      <div class="card-header border-0 pt-5">
        <student-header :total="studentStore.students.total"/>
        <student-toolbar/>
      </div>
      <div class="card-body py-3">
        <div class="table-responsive">
          <student-table :students="studentStore.students.data" :total="studentStore.students.total"/>
        </div>
        <pagination class="mb-5" v-if="studentStore.students.total"/>
      </div>
    </div>
  </div>
</template>

<style>
.el-dialog {
  border-radius: 0.625rem !important;
  padding: 2rem !important;
}

.el-form-item__label {
  align-items: flex-start !important;
}

.swal2-container {
  z-index: 10000 !important;
}
</style>