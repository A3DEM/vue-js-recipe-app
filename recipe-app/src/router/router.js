import { createWebHistory, createRouter } from "vue-router"

import AppHome from "@/views/AppHome.vue"
import LoginPage from "@/views/LoginPage.vue"
import SignInPage from "@/views/SignInPage.vue"
import HomePage from "@/views/HomePage.vue"

const routes = [
    {
        path: "/",
        name: "AppHome",
        component: AppHome,
    },
    {
        path: "/login",
        name: "Login",
        component: LoginPage,
    },
    {
        path: "/sign-in",
        name: "SignIn",
        component: SignInPage,
    },
    {
        path: "/home",
        name: "HomePage",
        component: HomePage,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;