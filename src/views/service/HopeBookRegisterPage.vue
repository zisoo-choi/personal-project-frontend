<template lang="">
    <div>
        <h2>희망 도서 신청</h2>
        <hope-book-register-form @submit="onSubmit"/>
    </div>
</template>

<script>
import HopeBookRegisterForm from '@/components/service/HopeBookRegisterForm.vue';
import { mapActions } from "vuex";

const ServiceModule = "ServiceModule"

export default {
    name: "HopeBookPage",
    components: {
        HopeBookRegisterForm
    },
    methods: {
        ...mapActions(ServiceModule, ["requestHopeBookToSpring"]),
        async onSubmit(payload) {
            const book = await this.requestHopeBookToSpring(payload);
            
            await this.$router.push({
                name: "home",
                params: { bookNumber: book.data.bookNumber.toString() },
            })
        }
    }    
}
</script>

<style lang="">
    
</style>