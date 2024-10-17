<script>
import axios from 'axios';
import { store } from '../store';
export default {
    data() {
        return {
            store,
            project: null
        }
    },
    methods:{
        getSingleProject(){
            axios.get(`${store.baseUrl}/projects/${this.$route.params.slug}`).then((result) => {
              this.project = result.data.result;
            });
        }
    },
    created() {
        this.getSingleProject();
    },
}
</script>
<template>
  <div class="container">
    <div class="row" v-if="project">
        <div class="col-6" v-if="project.image">
            <img :src="project.image.startsWith('http') ? project.image : `http://127.0.0.1:8000/storage/${project.image}`" alt="Project Image">
        </div>
        <div class="col-6">
            <h2>{{ project.description }}</h2>
            <p>{{ project.technologies}}</p>
            <p>{{project.type}}</p>
        </div>
    </div>
  </div>
</template>
<style lang="">
    
</style>