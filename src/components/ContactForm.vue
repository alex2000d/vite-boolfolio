<script>
import axios from 'axios';
import { store } from '../store';
export default {
    data() {
        return {
            store,
            name: '',
            surname: '',
            phone: '',
            email: '',
            content: '',
        }
    },
    methods: {
        sendForm(){
            const data = {
                name: this.name,
                surname: this.surname,
                phone: this.phone,
                email: this.email,
                content: this.content,

            }
            axios.post(`${store.baseUrl}/contacts`, data).then((res) =>{
               console.log('Response:', res);
            });
        }
    },
}
</script>
<template>
    <div>
        <form method="post" @submit.prevent="sendForm()">
            <div class="row">
                <div class="col-6">
                    <label class="control-label">nome</label>
                    <input type="text" name="name" class="form-control" v-model="name" placeholder="nome">
                </div>
                <div class="col-6">
                    <label class="control-label">cognome</label>
                    <input type="text" name="surname" class="form-control" v-model="surname" placeholder="cognome">
                </div>
                <div class="col-6">
                    <label class="control-label">telefono</label>
                    <input type="text" name="phone" class="form-control" v-model="phone" placeholder="telefono">
                </div>
                <div class="col-6">
                    <label class="control-label">email</label>
                    <input type="text" name="email" class="form-control" v-model="email" placeholder="email">
                </div>
                <div class="col-6">
                    <label class="control-label">messaggio</label>
                    <textarea type="text" name="content" class="form-control" v-model="content" placeholder="messaggio"></textarea>
                </div>
                <div class="col-12 ">
                    <button class="btn btn-sm btn-primary mt-3" type="submit">invia</button>
                </div>
            </div>
        </form>
    </div>
</template>
<style lang="">
    
</style>