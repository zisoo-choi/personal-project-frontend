<template lang="">
    <div class="full">
    </br>
        <h3>전체 도서 목록</h3>
        <v-btn @click="bookRegister" @submit="onSubmit">도서 등록</v-btn>
        <div class="categoryBtn">
            <v-btn color="white" v-model="philosophy" @click="initializationClick">전체</v-btn>
            <v-btn color="white" v-model="philosophy" @click="handleCategoryClick('PHILOSOPHY')">철학</v-btn>
            <v-btn color="white" v-model="religion" @click="handleCategoryClick('RELIGION')">종교</v-btn>
            <v-btn color="white" v-model="socialScience" @click="handleCategoryClick('SOCIAL_SCIENCE')">사회과학</v-btn>
            <v-btn color="white" v-model="naturalScience" @click="handleCategoryClick('NATURAL_SCIENCE')">자연과학</v-btn>
            <v-btn color="white" v-model="technology" @click="handleCategoryClick('TECHNOLOGY')">기술과학</v-btn>
            <v-btn color="white" v-model="art" @click="handleCategoryClick('ART')">예술</v-btn>
            <v-btn color="white" v-model="language" @click="handleCategoryClick('LANGUAGE')">언어</v-btn>
            <v-btn color="white" v-model="literature" @click="handleCategoryClick('LITERATURE')">문학</v-btn>
            <v-btn color="white" v-model="history" @click="handleCategoryClick('HISTORY')">역사</v-btn>
        </div>
        <whole-book-form :books="books"/>
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
            history: ''
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
        onSubmit(payload) {

        }
    }
}
</script>

<style>
.full{
    background-color: rgb(41, 41, 41);
    color: white;
}
</style>