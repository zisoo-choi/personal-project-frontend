<template lang="">
    <div class="ReadFull">
        <div class="bookTitle">
            <h2>{{ book.bookName }}</h2>
        </div>
        <management-read-book-form v-if="book" :book="book" />
        <p v-else>로딩중 .......</p>

        <div class="bookBottomBtn" style="text-align: center;">
            <button class="bookBtn1">
                <router-link v-if="isManager()" :to="{ name: 'ManagementModifyBookPage', params: { bookNumber } }" style="text-decoration:none; color: white">
                    도서 수정
                </router-link>
            </button>
            <button v-if="isManager()" @click="onDelete" color="primary" class="bookBtn2">도서 삭제</button>
            <button class="bookBtn3">
                <router-link :to="{ name: 'ManagementBookPage' }" style="text-decoration:none; color: white"> 돌아가기 </router-link>
            </button>
        </div>
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

<style lang="css">
.bookBtn1{
    margin: 10px;
    width: 100px;
    height: 40px;
    background-color: rgb(248, 35, 106);
}
.bookBtn2{
    margin: 10px;
    width: 100px;
    height: 40px;
    background-color: white;
}
.bookBtn3{
    margin: 10px;
    width: 100px;
    height: 40px;
    background-color: rgb(248, 191, 35);
}
</style>