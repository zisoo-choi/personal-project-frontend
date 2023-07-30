<template lang="">
    <div class="full">
    </br>
    <div class="inBox">
            <h2>전체 도서 목록</h2>
                <div class="categoryBtn">
                    <div class="btn-container">
                        <button class="btn" type="button" v-model="philosophy" @click="initializationClick">전체</button>
                        <button class="btn" type="button" v-model="philosophy" @click="handleCategoryClick('PHILOSOPHY')">철학</button>
                        <button class="btn" type="button" v-model="religion" @click="handleCategoryClick('RELIGION')">종교</button>
                        <button class="btn" type="button" v-model="socialScience" @click="handleCategoryClick('SOCIAL_SCIENCE')">사회과학</button>
                        <button class="btn" type="button" v-model="naturalScience" @click="handleCategoryClick('NATURAL_SCIENCE')">자연과학</button>
                        <button class="btn" type="button" v-model="technology" @click="handleCategoryClick('TECHNOLOGY')">기술과학</button>
                        <button class="btn" type="button" v-model="art" @click="handleCategoryClick('ART')">예술</button>
                        <button class="btn" type="button" v-model="language" @click="handleCategoryClick('LANGUAGE')">언어</button>
                        <button class="btn" type="button" v-model="literature" @click="handleCategoryClick('LITERATURE')">문학</button>
                        <button class="btn" type="button" v-model="history" @click="handleCategoryClick('HISTORY')">역사</button>
                    </div>
                </div>
            <whole-book-form :books="books"/>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import WholeBookForm from "@/components/book/WholeBookForm.vue";

const BookModule = 'BookModule';

export default {
    data() {
        return {
            philosophy: '',
            religion: '',
            socialScience: '',
            naturalScience: '',
            technology: '',
            art: '',
            language: '',
            literature: '',
            history: '',
        }
    },
    name: "WholeBookPage",
    components: { WholeBookForm },
    computed: {
        ...mapState(BookModule, ["books"]),
    },
    mounted() {
        this.requestBookListToSpring();
    },
    methods: {
        ...mapActions(BookModule, ["requestBookListToSpring", "requestCategoryListToSpring"]),
        handleCategoryClick(categorizationSymbol) {
            this.requestCategoryListToSpring(categorizationSymbol);
        },
        initializationClick() {
            this.requestBookListToSpring();
        },
        bookRegister() {
            this.$router.push({
                name: "RegisterBookPage"
            });
        },
    }
}
</script>

<style lang="css">
.full{
    background-color: #B3E5FC;
    width: 100%;
    height: 200%;
    color: black;
}
.btn-container {
  /* Flexbox를 사용하여 버튼들을 가운데 정렬합니다. */
  display: flex;
  justify-content: center;
  flex-wrap: wrap; /* 필요한 경우 버튼이 여러 줄로 나뉘도록 설정합니다. */
}
.btn{
    width: 80px;
    height:40px;
    border-radius: 5px;
    background-color: rgb(96, 143, 255);
    margin: 5px;
    color: white;
    font-weight:bold;
    font-size: 15px;
}
.btn:hover{
    background-color: white;
    color: rgb(96, 143, 255);
}
.inBox{
    background-color: white;
    margin: 0px 40px 5px 40px;
    border-radius: 20px;
    padding: 10px;
}
</style>