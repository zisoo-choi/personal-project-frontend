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
        ...mapActions(ServiceModule, ["requestHopeBookToSpring"]),
        async onSubmit(payload) {
            const book = await this.requestHopeBookToSpring(payload);
            
            await this.$router.push({
                name: "HopeListBookPage",
                params: { bookNumber: book.data.bookNumber.toString() },
            })
        }
    }    
}
</script>

<style lang="">
    
</style>