import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

export const routes = [
    {
        path: "/",
        name: "Home",
        component:() => import("./components/HomePage.vue")
    },
    {
        path: "/Login",
        name: "Login",
        component:() => import("./components/LoginPage.vue")
    },
    {
        path: "/Register",
        name: "Register",
        component:() => import("./components/RegisterPage.vue")
    },
    {
        path: "/Personal",
        name: "Personal",
        component:() => import("./components/PersonalPage.vue")
    },
    {
        path: "/Help",
        name: "Help",
        component:() => import("./components/HelpPage.vue")
    },
    {
        path: "/Search",
        name: "Search",
        component:() => import("./components/SearchPage.vue")
    }
]

const router = new VueRouter({
    routes
 })
export default router;