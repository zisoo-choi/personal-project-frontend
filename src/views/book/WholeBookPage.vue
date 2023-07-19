<template lang="">
    <div class="full">
    </br>
        <whole-book-form :books="books"/>
        <whole-design-book-form :books="books" />
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import WholeBookForm from "@/components/book/WholeBookForm.vue";
import WholeDesignBookForm from "@/components/book/WholeDesignBookForm.vue";

const BookModule = 'BookModule';

export default {
    name: "WholeBookPage",
    components: { WholeBookForm, WholeDesignBookForm },
    computed: {
        ...mapState(BookModule, ["books"]),
    },
    mounted() {
        this.requestBookListToSpring();
    },
    methods: {
        ...mapActions(BookModule, ["requestBookListToSpring"]),
        philosophy() {

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