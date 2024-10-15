import { createRouter, createWebHistory } from "vue-router";
import PageProject from "./pages/PageProject.vue";
import PageHome from "./pages/PageHome.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: PageHome,
        },
        {
            path: '/projects',
            name: 'projects',
            component: PageProject,
        }
    ]
})

export { router };