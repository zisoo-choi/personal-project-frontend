<template lang="">
    <div class="full">
    </br>
        <div class="newBookInBox">
            <h2>신간 도서</h2>
            <new-book-form :books="books"/>
        </div>
    </div>
</template>

<script>
import NewBookForm from '@/components/book/NewBookForm.vue';
import { mapActions, mapState } from "vuex";

const BookModule = 'BookModule';

export default {
    components: {
        NewBookForm
    },
    computed: {
        ...mapState(BookModule, ["books"]),
    },
    mounted() {
        this.requestNewBookListToSpring();
    },
    methods: {
        ...mapActions(BookModule, ["requestNewBookListToSpring"]),
    }
}
</script>

<style lang="css">
.newBookInBox{
    background-color: white;
    margin: 0px 40px 5px 40px;
    border-radius: 20px;
    padding: 10px;
}
</style>