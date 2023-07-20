<template lang="">
    <div>
        <h2>{{ book.bookName }}</h2>
        <read-book-form v-if="book" :book="book" />
        <p v-else>로딩중 .......</p>

        <router-link :to="{ name: 'ModifyBookPage', params: { bookNumber } }">
            도서 수정
        </router-link>
        <button @click="onDelete">도서 삭제</button>
        <router-link :to="{ name: 'WholeBookPage' }"> 돌아가기 </router-link>
    </div>
</template>

<script>
import ReadBookForm from "@/components/book/ReadBookForm.vue"

import { mapActions, mapState } from "vuex";
const BookModule = "BookModule";

export default {
    name: "ReadBookPage",
    components: {
        ReadBookForm
    },
    props: {
        bookNumber: {
            type: String,
            required: true
        }
    },
    computed: {
        ...mapState(BookModule, ["book"])
    },
    methods: {
        ...mapActions(BookModule, ["requestBookToSpring", "requestDeleteBoardToSpring"]),
        async onDelete() {
            await this.requestDeleteBoardToSpring(this.bookNumber);
            await this.$router.push({
                name: "WholeBookPage"
            });
        },
    },
    created() {
        this.requestBookToSpring(this.bookNumber);
    }
}
</script>

<style lang="">
</style>