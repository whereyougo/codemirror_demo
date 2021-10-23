import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/test_01_FullScreen',
        name: 'test_01_FullScreen',
        component:  () => import(/* webpackChunkName: "qrcode" */'../components/test_01_FullScreen.vue')
    },
    {
        path: '/test_02_InitContent',
        name: 'test_02_InitContent',
        component:  () => import(/* webpackChunkName: "qrcode" */'../components/test_02_init_content.vue')
    }
];

const router = createRouter({
    history: createWebHistory("/cm"),
    routes
});

export default router;
