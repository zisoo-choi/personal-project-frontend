<template lang="">
    <div>
        <h2>도서 등록</h2>
        <register-book-form @submit="onSubmit"/>
    </div>
</template>

<script>
import RegisterBookForm from "@/components/book/RegisterBookForm.vue"
import { mapActions } from "vuex";

const BookModule = "BookModule"

export default {
    components: {
        RegisterBookForm
    },
    methods: {
        ...mapActions(BookModule, ["requestRegisterBookToSpring"]),
        async onSubmit(payload) {
            const book = await this.requestRegisterBookToSpring(payload);
            
            await this.$router.push({
                name: "ManagementReadBookPage",
                params: { bookNumber: book.data.bookNumber.toString() },
            })
        }
    }
}
</script>

<style lang="">
    
</style>