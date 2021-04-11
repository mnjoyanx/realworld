import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: '/',
            component: () => import('@/views/Home'),
            name: 'home'
        },

        {
            path: '/about',
            component: () => import('@/views/About'),
            name: 'about'
        }
    ]
})



export default router