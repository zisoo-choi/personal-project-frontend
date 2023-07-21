<template lang="">
    <div class="full">
        <h2>신간 도서</h2>
        <new-book-form :books="books"/>
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

<style>
</style>