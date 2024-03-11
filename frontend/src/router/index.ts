import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name:'students',
        component: () => import("../views/Students.vue"),
    },
    {
        path: "/create-student",
        name:'create-student',
        component: () => import("../views/CreateStudent.vue"),
    },
    {
        path: "/404",
        name: "404",
        component: () => import("../views/Error404.vue"),
    },
    {
        path: "/:pathMatch(.*)*",
        redirect: "/404",
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
