<template>
  <el-dialog v-model="dialogFormVisible" title="Create New Student" width="500">
    <el-form
        :model="form"
        ref="formRef"
        class="mt-6"
        :rules="rules"
    >
      <el-form-item
          prop="username"
          label="Username" :label-width="'100px'">
        <el-input v-model="form.username" autocomplete="off"/>
      </el-form-item>
      <el-form-item
          prop="email"
          label="Email" :label-width="'100px'">
        <el-input v-model="form.email" autocomplete="off"/>
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" loading v-if="studentStore.is.creating">Please wait</el-button>
        <el-button type="primary" @click="createStudent(formRef)" v-else>
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>
<script lang="ts">
import {defineComponent, ref, watch} from "vue";
import router from "../router";
import {useStudentStore} from "../store/StudentStore.ts";

const dialogFormVisible = ref(false);

export default defineComponent({
  name: 'create-student',
  beforeRouteEnter(_to, _from, next) {
    dialogFormVisible.value = true;
    next()
  },

  setup() {
    const form = ref({
      username: '',
      email: '',
    });
    const formRef = ref('')
    const studentStore = useStudentStore();

    const createStudent = (formEl:any) => {
      if (!formEl) return;

      formEl.validate((valid:any) => {
        if (valid) {
          studentStore.createStudent(form.value, dialogFormVisible)
        } else {
          return false
        }
      });
    }

    const rules = {

      username: [{
        required: true,
        message: 'Please input username',
        trigger: ['blur', 'change'],
      }],

      email: [{
        required: true,
        message: 'Please input email address',
        trigger: ['blur', 'change'],
      },
        {
          type: 'email',
          message: 'Please input correct email address',
          trigger: ['blur', 'change'],
        }]
    }

    //If dialogFormVisible is false we should navigate to index page
    watch(
        () => dialogFormVisible.value,
        after => !after && router.push({name: 'students'})
    );

    return {
      form,
      rules,
      formRef,
      studentStore,
      createStudent,
      dialogFormVisible,
    }
  },
});
</script>