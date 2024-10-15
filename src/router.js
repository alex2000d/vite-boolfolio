import { createRouter, createWebHistory } from "vue-router";
import PageProject from "./pages/PageProject.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: PageProject,
        }
    ]
})

export { router };