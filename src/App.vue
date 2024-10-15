<script>
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
export default {
    components:{
        AppHeader,
    },
    data() {
        return {
            store
        }
    },
}
</script>
<template lang="">
    <div>
        <AppHeader :manu="store.menuItems"/>
        <router-view></router-view>
    </div>
</template>
<style lang="scss">
@use './styles/generals.scss';
</style>