import {defineStore} from "pinia";
import ApiService from "../core/services/ApiService.ts";
import {usePaginationStore} from "./PaginationStore.ts";
import Swal from 'sweetalert2'

export const useStudentStore = defineStore('studentStore', {
    state: () => ({
        students: {
            data: [],
            total: 0
        },

        is: {
            loading: false,
            creating: false,
            deleting: false
        },

        currentStudentId: '',
        paginationStore: usePaginationStore(),
    }),

    actions: {
        getStudents() {
            this.is.loading = true;

            ApiService.post('students', {page: this.paginationStore.currentPage})
                .then((response: any) => {
                    this.students.data = response.data.data;
                    this.students.total = response.data.meta.total
                    this.paginationStore.init(response.data.meta, this, 'getStudents');
                })
                .finally(() => this.is.loading = false)
        },

        createStudent(userData: any, dialogFormVisible: any) {
            this.is.creating = true;

            ApiService.post('/students/store', userData)
                .finally(() => {
                    this.is.creating = false;
                    dialogFormVisible.value = false
                })
        },
        deleteStudent(studentId: any) {

            Swal.fire({
                text: "Are you sure you want to delete student?",
                showDenyButton: true,
                confirmButtonText: "Delete",
                denyButtonText: `Cancel`
            }).then((result) => {
                if (result.isConfirmed) {
                    this.is.deleting = true;
                    this.currentStudentId = studentId;

                    ApiService.delete(`/students/${studentId}`)
                        .then(this.getStudents)
                        .finally(() => this.is.deleting = false)
                }
            });
        }
    }
})