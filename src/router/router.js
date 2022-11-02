import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../View/Home.vue'
import ImageKonva from '../components/imageKonva.vue'
import ImageUploadDrow from '../components/imageUploadDrow.vue'
Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/home' 
        },
        {
            path: '/home',
            component: Home,
        },
        {
            path: '/imageUploadDrow',
            component: ImageUploadDrow,
        },
        {
            path: '/imageKonva',
            component: ImageKonva,
        },

    ]
})