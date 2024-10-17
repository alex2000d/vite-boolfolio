import { createRouter, createWebHistory } from "vue-router";
import PageProject from "./pages/PageProject.vue";
import PageHome from "./pages/PageHome.vue";
import PageSingleProject from "./pages/PageSingleProject.vue";
import PageContacts from "./pages/PageContacts.vue";

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
        },
        {
            path: '/projects/:slug',
            name: 'single-project',
            component: PageSingleProject,
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: PageContacts,
        },
    ]
})

export { router };