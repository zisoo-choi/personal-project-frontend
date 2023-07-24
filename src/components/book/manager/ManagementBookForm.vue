<template lang="">
    <div class="managementView">
        <div class="rightView">
            <v-btn @click="BookManagement">Book</v-btn>
            <v-btn @click="bookRegister">Register Book</v-btn>
            <v-btn @click="RentalManagement">Rental</v-btn>
            <v-btn @click="MemberManagement">Member</v-btn>
        </div>
        <div class="mainView">
            <management-book-list-form v-if="pushBook" :books="books"/>
            <management-service-form v-if="pushService"/>
            <management-member-list-form v-if="pushMember" :members="members"/>
        </div>
    </div>
</template>

<script>
import ManagementBookListForm from '@/components/book/manager/ManagementBookListForm.vue';
import ManagementServiceForm from '@/components/book/manager/ManagementServiceForm.vue'
import ManagementMemberListForm from '@/components/book/manager/ManagementMemberListForm.vue'

import { mapActions, mapState } from "vuex";
const BookModule = 'BookModule';
const MemberModule = 'MemberModule';

export default {
    data() {
        return {
            pushBook: false,
            pushService: false,
            pushMember: false
        }
    },
    components: {
        ManagementBookListForm,
        ManagementServiceForm,
        ManagementMemberListForm
    },
    methods: {
        BookManagement() {
            this.pushBook = true;
            this.pushMember = false;
            this.pushService = false;
        },
        RentalManagement() {
            this.pushService = true;
            this.pushBook = false;
            this.pushMember = false;
        },
        MemberManagement() {
            this.pushMember = true;
            this.pushService = false;
            this.pushBook = false;
        },
        ...mapActions(BookModule, ["requestBookListToSpring"]),
        ...mapActions(MemberModule, ["requestMemberListToSpring"]),
        bookRegister() {
            this.$router.push({
                name: "ManagementRegisterBookPage"
            });
        },
    },
    computed: {
        ...mapState(BookModule, ["books"]),
        ...mapState(MemberModule, ["members"]),
    },
    mounted() {
        this.requestBookListToSpring();
        this.requestMemberListToSpring();
    },
}
</script>

<style lang="css">
.managementView {
  display: flex; /* Flexbox 레이아웃 활성화 */
  flex-direction: row-reverse; /* 자식 요소의 배치 방향을 오른쪽에서 왼쪽으로 변경 */
}

.mainView {
  border: 1px solid black;
  width: 80%;
  height: 1250px;
  background-color: rgb(255, 227, 214);
}

.rightView {
  border: 1px solid black;
  width: 20%;
  height: 1250px;
}
</style>