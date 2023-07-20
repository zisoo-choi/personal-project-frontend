<template lang="">
    <div>
        <h2>{{book.bookName}} 수정 페이지</h2>

        <modify-book-form v-if="book" :book="book" @submit="onSubmit" />
        <p v-else>로딩중 ..... </p>
    </div>
</template>

<script>
import ModifyBookForm from '@/components/book/ModifyBookForm.vue';
import { mapActions, mapState } from 'vuex';

const BookModule = 'BookModule'

export default {
    name: "ModifyBookPage",
    components: {
        ModifyBookForm,
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
                name: "ReadBookPage",
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