<template lang="">
    <div class="ReadFull">
        <div class="bookTitle">
            <h2>{{ book.bookName }}</h2>
        </div>
        <read-book-form v-if="book" :book="book" />
        <p v-else>로딩중 .......</p>

        <div class="bookBottomBtn" style="text-align: center;">
            <button v-if="isManager()" class="bookBtn11">
                <router-link :to="{ name: 'ModifyBookPage', params: { bookNumber } }" style="text-decoration:none; color: white">
                    도서 수정
                </router-link>
            </button>
            <button v-if="isManager()" @click="onDelete" class="bookBtn2">도서 삭제</button>
            <button class="bookBtn3">
                <router-link :to="{ name: 'NewBookPage' }" style="text-decoration:none; color: white"> 돌아가기 </router-link>
            </button>
        </div>
    </div>
</template>

<script>
import ReadBookForm from "@/components/book/ReadBookForm.vue"

import { mapActions, mapState } from "vuex";
const BookModule = "BookModule";
const MemberModule = 'MemberModule';

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
        ...mapState(BookModule, ["book"]),
        ...mapState(MemberModule, ["memberInfo"]),
    },
    methods: {
        ...mapActions(BookModule, ["requestBookToSpring", "requestDeleteBoardToSpring"]),
        async onDelete() {
            await this.requestDeleteBoardToSpring(this.bookNumber);
            await this.$router.push({
                name: "WholeBookPage"
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
.ReadFull {
    background-color: #B3E5FC;
    width: 100%;
}
.bookTitle{
    text-align: center;
}
.returnBtn{
    display: inline-block;
    width: 100px;
    height: 30px;
    text-align: center;
    background-color: white;
    margin: 10px;
    font-weight: bold;
    text-decoration: none; /* 밑줄 제거 */
    cursor: pointer; /* 커서 모양 변경 */
    border-radius: 5px; /* 버튼 모양을 위한 border-radius 추가 */
    margin-top: 20px;
}
.returnBtn:hover {
    background-color: #F5F5F5; /* 호버 시 배경색 변경 */
}
.bookBtn11{
    margin: 10px;
    width: 100px;
    height: 40px;
    background-color: rgb(248, 35, 106);
}
</style>