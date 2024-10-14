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
              console.log(results);
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
                    <h1 class="text-center">Elenco dei progetti</h1>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="">
    
</style>