import {createRouter, createWebHashHistory} from "vue-router";
import Home from "@/views/Home.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/archivist/:cate',
        name: 'Archivist',
        component: () => import('@/views/Archivist.vue')
    },
    {
        path: '/connect',
        name: 'Connect',
        component: () => import("@/views/Connect.vue")
    },
    {
        path: '/friendlyLink',
        name: 'FriendlyLink',
        component: () => import("@/views/FriendlyLink.vue")
    },
    {
        path: '/note/:id(\\d+)',
        name: 'Note',
        component: () => import("@/views/Note.vue")
    },
    {
        path: '/test',
        name: 'Test',
        component: () => import("@/views/Test.vue")
    }
]

// 访问router，即createRouter返回的对象，的方式取决于上下文。
// 在组合式中使用 useRouter() 访问
// 在选项式中使用 this.$router 访问
const router = new createRouter({
    history: createWebHashHistory(),
    routes,
});
export default router;