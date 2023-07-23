<template lang="">
    <div>
        <h2>{{ book.bookName }}</h2>
        <management-read-book-form v-if="book" :book="book" />
        <p v-else>로딩중 .......</p>

        <router-link v-if="isManager()" :to="{ name: 'ManagementModifyBookPage', params: { bookNumber } }">
            도서 수정
        </router-link>
        <button v-if="isManager()" @click="onDelete">도서 삭제</button>
        <router-link :to="{ name: 'ManagementBookPage' }"> 돌아가기 </router-link>
    </div>
</template>

<script>
import ManagementReadBookForm from "@/components/book/manager/ManagementReadBookForm.vue"

import { mapActions, mapState } from "vuex";
const BookModule = "BookModule";
const MemberModule = 'MemberModule';

export default {
    name: "ManagementReadBookPage",
    components: {
        ManagementReadBookForm
    },
    props: {
        bookNumber: {
            type: String,
            required: true
        }
    },
    computed: {
        ...mapState(BookModule, ["book"]),
        ...mapState(MemberModule, ["memberInfo"]),
    },
    methods: {
        ...mapActions(BookModule, ["requestBookToSpring", "requestDeleteBoardToSpring"]),
        async onDelete() {
            await this.requestDeleteBoardToSpring(this.bookNumber);
            await this.$router.push({
                name: "ManagementBookPage"
            });
        },
        isManager() {
            if (this.memberInfo && this.memberInfo.role === "ROLE_MANAGER") {
            return true;
            }
            return false;
        },
    },
    created() {
        this.requestBookToSpring(this.bookNumber);
    }
}
</script>

<style lang="">
</style>