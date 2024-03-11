<template>
  <div class="d-flex flex-stack flex-wrap pt-10">
    <el-pagination
        v-model:currentPage="pagination.currentPage"
        v-model:page-size="pagination.pageSize"
        :page-sizes="pagination.pageSizes"
        :background=" pagination.background"
        :layout="pagination.layout"
        :total="pagination.total"
        @size-change="()=> pagination.handleSizeChange()"
        @current-change="()=>pagination.handleCurrentChange()"
    />
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {usePaginationStore} from "../store/PaginationStore.ts";

export default defineComponent({
  name: 'pagination',
  setup: () => ({pagination: usePaginationStore()})
})
</script>