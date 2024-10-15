<script>
export default {
    data() {
        return {
            menu: [
                { label: 'Home', link: '#' },
                { label: 'Projects', link: '#' },
            ],
        };
    }
}
</script>
<template>
    <header>
        <div class="container-fluid">
            <div class="row">
                <div class="col-4 text-center">
                    <img class="logo" src="../assets/img/logo.png">
                </div>
                <div class="col-4">
                    <ul class="list-unstyled d-flex justify-content-center mt-4">
                        <li class="mx-3" v-for="(item, index) in menu" :key="index">
                            <a class="text-decoration-none text-black" href="#">{{ item.label }}</a>
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
    </header>
</template>
<style lang="scss" scoped>
    .logo{
        width: 120px;
    }

    header{
        background-color: rgb(145, 145, 145);
    }
</style>