<template lang="">
    <div class="full">
    </br>
        <div class="inBox">
            <h2>희망 도서 현황</h2>
            <v-btn color="orange"
                style="font-weight:bold;
                color:white;
                margin: 10px;
                width: 100px;
                height: 50px;
                font-size: 16px;
                border-radius: 12px;"
                @click="bookApplication"
                v-if="isMember()"
                >
                도서 신청
            </v-btn>
            <hope-list-book-form :hopeBooks="hopeBooks"/>
        </div>
    </div>
</template>

<script>
import HopeListBookForm from '../../components/service/HopeListBookForm.vue';
import { mapActions, mapState } from "vuex";

const ServiceModule = "ServiceModule";
const MemberModule = 'MemberModule';

export default {
    data() {
        return {
            // isMember: false,
        }
    },
    components: {
        HopeListBookForm
    },
    computed: {
        ...mapState(ServiceModule, ["hopeBooks"]),
        ...mapState(MemberModule, ["memberInfo"]),
    },
    mounted() {
        this.requestHopeBookListToSpring();
    },
    methods: {
        ...mapActions(ServiceModule, ["requestHopeBookListToSpring"]),
        bookApplication() {
            this.$router.push({
                name: "HopeRegisterBookPage"
            });
        },
        isMember() {
            return this.memberInfo != null;
        }
    }
    
}
</script>

<style lang="css">

</style>