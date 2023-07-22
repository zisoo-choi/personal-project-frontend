<template lang="">
    <div>
        <h2>희망 도서 신청</h2>
        <hope-register-book-form @submit="onSubmit"/>
    </div>
</template>

<script>
import HopeRegisterBookForm from '@/components/service/HopeRegisterBookForm.vue';
import { mapActions } from "vuex";

const ServiceModule = "ServiceModule"

export default {
    name: "HopeRegisterBookPage",
    components: {
        HopeRegisterBookForm
    },
    methods: {
        ...mapActions(ServiceModule, ["requestHopeBookRegisterToSpring"]),
        async onSubmit(payload) {
            const book = await this.requestHopeBookRegisterToSpring(payload);

            console.log("book 있니? ",book);
            
            await this.$router.push({
                name: "HopeReadBookPage",
                params: { hopeBookNumber: book.data.hopeBookNumber.toString() },
            });
        }
    }    
}
</script>

<style lang="">
    
</style>