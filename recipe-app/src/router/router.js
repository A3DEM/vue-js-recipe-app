import { createWebHistory, createRouter } from "vue-router"

import AppHome from "@/views/AppHome.vue"
import LoginPage from "@/views/LoginPage.vue"
import SignInPage from "@/views/SignInPage.vue"
import HomePage from "@/views/HomePage.vue"
import SearchPage from "@/views/SearchPage.vue"
import RecipePage from "@/views/RecipePage.vue"
import ProfilePage from "@/views/ProfilePage.vue"
import SettingsPage from "@/views/SettingsPage.vue"

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
        path: "/signin",
        name: "SignIn",
        component: SignInPage,
    },
    {
        path: "/home",
        name: "HomePage",
        component: HomePage,
    },
    {
        path: "/search",
        name: "SearchPage",
        component: SearchPage,
    },
    {
        path: "/profile",
        name: "ProfilePage",
        component: ProfilePage,
    },
    {
        path: "/settings",
        name: "SettingsPage",
        component: SettingsPage,
    },
    {
        path: "/recipe/:id",
        name: "RecipePage",
        component: RecipePage,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;