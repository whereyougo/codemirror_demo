import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/test_01_FullScreen',
        name: 'test_01_FullScreen',
        component:  () => import(/* webpackChunkName: "demo1" */'../components/test_01_FullScreen.vue')
    },
    {
        path: '/test_02_InitContent',
        name: 'test_02_InitContent',
        component:  () => import(/* webpackChunkName: "demo2" */'../components/test_02_init_content.vue')
    },
    {
        path: '/test_03_InitContent',
        name: 'test_03_InitContent',
        component:  () => import(/* webpackChunkName: "demo3" */'../components/test_03_FullScreen.vue')
    }
];

const router = createRouter({
    history: createWebHistory("/cm"),
    routes
});

export default router;
