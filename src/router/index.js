import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",
    routes: [{
            path: '/',
            component: () =>
                import ('@/views/Home'),
            name: 'home'
        },

        {
            path: '/about',
            component: () =>
                import ('@/views/About')
        },

        {
            path: "/:username",
            name: "userProfile",
            component: () => import('@/views/user/Profile'),
            params: true
        },

        {
            path: "/articles/:slug",
            component: () => import("@/views/user/Profile"),
            name: "article"
        },
        {
            path: "/articles/:slug/edit",
            component: () => import("@/views/user/Profile"),
            name: "articleEdit"
        },

        {
            path: '/login',
            component: () =>
                import ('@/views/auth/SignIn'),
            name: 'login'
        },

        {
            path: '/register',
            component: () =>
                import ('@/views/auth/SignUp'),
            name: 'register'
        }
    ]
})



export default router