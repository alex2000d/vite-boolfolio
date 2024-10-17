<script>
import ContactForm from '../components/ContactForm.vue';
export default {
    components:{
        ContactForm,
    }
}
</script>
<template>
    <div class="my-5">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="text-center my-3">Contatti</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati expedita itaque consequatur! Pariatur cupiditate consequuntur molestiae laudantium ratione officiis reprehenderit earum laboriosam obcaecati expedita, neque totam aut quae placeat quia.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-6 mt-5">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2799.2476142776827!2d9.162979058123621!3d45.44466615576702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c3edb25fc521%3A0xf0eb5cec6ed3fe68!2sViale%20Cassala%2C%2022%2C%2020143%20Milano%20MI!5e0!3m2!1sit!2sit!4v1729200186468!5m2!1sit!2sit" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div class="col-6 mt-5">
                    <p>indirizzo: inserisci indirizzo</p>
                    <p>città: inserisci nome della città</p>
                    <p>email: inserisci l'email</p>
                    <p>telefono: inserisci numero di telefono</p>
                    <p>Pec: inserisci la tua Pec</p>
                    <p>P.IVA: inserisci la tua P.IVA</p>
                </div>
                <div class="col-12 mt-5">
                   <ContactForm />
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="">
    
</style>