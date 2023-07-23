<template lang="">
    <div>
        <h2>{{book.bookName}} 수정 페이지</h2>
        
        <management-modify-book-form v-if="book" :book="book" @submit="onSubmit" />
        <p v-else>로딩중 ..... </p>
    </div>
</template>

<script>
import ManagementModifyBookForm from '@/components/book/manager/ManagementModifyBookForm.vue';
import { mapActions, mapState } from 'vuex';

const BookModule = 'BookModule'

export default {
    name: "ManagementModifyBookPage",
    components: {
        ManagementModifyBookForm,
    },
    props: {
        bookNumber: {
            type: String,
            required: true,
        },
    },
    computed: {
        ...mapState(BookModule, ["book"]),
    },
    methods: {
        ...mapActions(BookModule, [
            "requestBookToSpring", "requestBookModifyToSpring"
        ]),
        async onSubmit(payload) {
            const {bookAmount, content, updateDate} = payload;
            const bookNumber = this.bookNumber;

            await this.requestBookModifyToSpring({
                bookAmount, content, updateDate, bookNumber
            });

            await this.$router.push({
                name: "ManagementReadBookPage",
                params: { bookNumber: this.bookNumber },
            });
        },
    },
    created() {
        this.requestBookToSpring(this.bookNumber);
    }
}
</script>

<style lang=""></style>