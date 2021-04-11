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
            path: '/login',
            component: () => import('@/views/auth/SignIn'),
            name: 'login'
        },

        {
            path: '/register',
            component: () => import('@/views/auth/SignUp'),
            name: 'register'
        }
    ]
})



export default router