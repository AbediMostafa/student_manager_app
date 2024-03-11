import {defineStore} from "pinia";

export const usePaginationStore = defineStore('paginationStore', {

    state() {
        return {
            parent: <any>'', // parent component store class that uses the pagination
            handler: <any>'', // parent component store method that handles the api call
            total: 0,
            currentPage: 1,
            pageSizes: [10, 15, 20, 30, 40, 50],
            pageSize: 5,
            background: true,
            hideOnSinglePage: true,
            layout: 'prev, pager, next'
        }
    },

    actions: {

        /**
         * Initialize first pagination value
         *
         * @param data Entity data
         * @param parent Parent store module
         * @param handler Parent store handler method
         */
        init(data: any, parent: any, handler: any) {
            this.total = data.total;
            this.currentPage = data.current_page;
            this.parent = parent
            this.handler = handler;
        },

        /**
         * Change pagination page size
         */
        handleSizeChange() {

            // When page size changes, we want to start from page one
            this.currentPage = 1;

            // Calls the fetch method of parent component on each page size change
            this.parent[this.handler]();
        },

        /**
         * Change pagination current page
         */
        handleCurrentChange() {

            // Calls the fetch method of parent component on each page number change
            this.parent[this.handler]();
        }
    }
})