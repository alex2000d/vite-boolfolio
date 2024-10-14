<script>
import axios from 'axios';
export default {
    data() {
        return {
        projects: [],  
        }
    },
   created() {
      this.getProjects();
   },
    methods: {
        getProjects(){
            axios.get('http://127.0.0.1:8000/api/projects').then((results) =>{
              this.projects = results.data.results;
            });
        }
    },
}
</script>
<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="text-center my-5">Elenco dei progetti</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-4" v-for="project in projects" :key="project.id">
                    <div class="card">
                        <img class="img-card-top" :src="project.image.startsWith('http') ? project.image : `http://127.0.0.1:8000/storage/${project.image}`" alt="Project Image">
                        <div class="card-body">
                            <h4 class="card-title">{{ project.title }}</h4>
                            <p class="card-text">{{ project.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="">
    
</style>