<script>
import AppHeader from './components/AppHeader.vue';
import AppProject from './components/AppProject.vue';
export default {
    components:{
        AppProject,
        AppHeader,
    }
}
</script>
<template lang="">
    <div>
        <AppHeader />
        <AppProject />
    </div>
</template>
<style lang="scss">
@import './styles/generals.scss';
</style>