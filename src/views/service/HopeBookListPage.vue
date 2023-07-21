<template lang="">
    <div>
        <h2>희망 도서 현황</h2>
        <v-btn @click="bookApplication">도서 신청</v-btn>
        <hope-book-list-form :books="books"/>
    </div>
</template>

<script>
import HopeBookListForm from '../../components/service/HopeBookListForm.vue';
import { mapActions, mapState } from "vuex";
const ServiceModule = "ServiceModule";

export default {
    components: {
        HopeBookListForm
    },
    computed: {
        ...mapState(ServiceModule, ["books"]),
    },
    mounted() {
        this.requestHopeBookListToSpring();
    },
    methods: {
        ...mapActions(ServiceModule, ["requestHopeBookListToSpring"]),
        bookApplication() {
            this.$router.push({
                name: "HopeBookRegisterPage"
            });
        }
    }
    
}
</script>

<style lang="">
    
</style>