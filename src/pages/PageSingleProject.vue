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
            <img class="img-fluid mt-5" :src="project.image.startsWith('http') ? project.image : `http://127.0.0.1:8000/storage/${project.image}`" alt="Project Image">
        </div>
        <div class="col-6">
            <h2 class="mt-5">{{ project.description }}</h2>
            <div v-if="project.technologies.length > 0">
                <h4>Tecnologie utilizzate:</h4>
                <ul>
                    <li v-for="(technology, index) in project.technologies" :key="index">
                        {{ technology.name }}
                    </li>
                </ul>
              </div>
              <div v-else>
                <p>Non ci sono tecnologie associate a questo progetto.</p>
              </div>
  

              <p v-if="project.type">Tipo: {{ project.type.name }}</p>
              <p v-else>Tipo: Non specificato</p>
        </div>
    </div>
  </div>
</template>
<style lang="">
    
</style>