import { reactive } from 'vue'

export const store = reactive({
    menuItems: [
        {
            name: 'home',
            label: 'home'
        },
        {
            name: 'projects',
            label: 'projects'
        }
    ]
});