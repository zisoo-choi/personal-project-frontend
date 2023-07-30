<template lang="">
    <div>
        <hope-read-book-form v-if="hopeBook" :hopeBook="hopeBook" />
        <p v-else>로딩중 .......</p>
        <router-link :to="{ name: 'HopeListBookPage' }"> 돌아가기 </router-link>
    </div>
</template>

<script>
import HopeReadBookForm from '@/components/service/HopeReadBookForm.vue';

import { mapActions, mapState } from "vuex";
const ServiceModule = "ServiceModule";

export default {
    name: "HopeReadBookPage",
    components: {
        HopeReadBookForm
    },
    props: {
        hopeBookNumber: {
            type: String,
            required: true
        }
    },
    computed: {
        ...mapState(ServiceModule, ["hopeBook"])
    },
    methods: {
        ...mapActions(ServiceModule, ["requestHopeBookReadToSpring"]),
    },
    created() {
        this.requestHopeBookReadToSpring(this.hopeBookNumber);
    }
}
</script>

<style lang="">
    
</style>