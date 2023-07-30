<template lang="">
    <div class="managementView">
        <div class="mainView">
            <management-book-list-form v-if="pushBook" :books="books"/>
            <management-service-form v-if="pushService" :rentalBooks="rentalBooks"/>
            <management-member-list-form v-if="pushMember" :members="members"/>
            <management-reservation-list-form v-if="pushReservation" :reservationBooks="reservationBooks" />
            <management-hope-book-list-form v-if="pushHope" :hopeBooks="hopeBooks"/>
        </div>
        <div class="rightView">
            <button class="myPageBtn" @click="BookManagement">Book</button>
            <button class="myPageBtn" @click="MemberManagement">Member</button>
            <button class="myPageBtn" @click="bookRegister">Register Book</button>
            <button class="myPageBtn" @click="HopeManagement">Hope Book</button>
            <button class="myPageBtn" @click="RentalManagement">Rental Book</button>
            <button class="myPageBtn" @click="ReservationManagement">Reservation Book</button>
        </div>
    </div>
</template>

<script>
import ManagementBookListForm from '@/components/book/manager/ManagementBookListForm.vue';
import ManagementServiceForm from '@/components/book/manager/ManagementServiceForm.vue'
import ManagementMemberListForm from '@/components/book/manager/ManagementMemberListForm.vue'
import ManagementReservationListForm from './ManagementReservationListForm.vue';
import ManagementHopeBookListForm from './ManagementHopeBookListForm.vue';

import { mapActions, mapState } from "vuex";
const BookModule = 'BookModule';
const MemberModule = 'MemberModule';
const ServiceModule = 'ServiceModule';

export default {
    data() {
        return {
            pushBook: false,
            pushService: false,
            pushMember: false,
            pushReservation: false,
            pushHope: false
        }
    },
    components: {
        ManagementBookListForm,
        ManagementServiceForm,
        ManagementMemberListForm,
        ManagementReservationListForm,
        ManagementHopeBookListForm
    },
    methods: {
        BookManagement() {
            this.pushBook = true;
            this.pushMember = false;
            this.pushService = false;
            this.pushReservation = false;
            this.pushHope = false
        },
        RentalManagement() {
            this.pushService = true;
            this.pushBook = false;
            this.pushMember = false;
            this.pushReservation = false;
            this.pushHope = false
        },
        MemberManagement() {
            this.pushMember = true;
            this.pushService = false;
            this.pushBook = false;
            this.pushReservation = false;
            this.pushHope = false
        },
        ReservationManagement() {
            this.pushMember = false;
            this.pushService = false;
            this.pushBook = false;
            this.pushReservation = true;
            this.pushHope = false
        },
        HopeManagement() {
            this.pushMember = false;
            this.pushService = false;
            this.pushBook = false;
            this.pushReservation = false;
            this.pushHope = true;
        },
        ...mapActions(BookModule, ["requestBookListToSpring"]),
        ...mapActions(MemberModule, ["requestMemberListToSpring"]),
        ...mapActions(ServiceModule, [
            "requestRentalListToSpring",
            "requestReservationToSpring",
            "requestHopeBookListToSpring"
        ]),
        bookRegister() {
            this.$router.push({
                name: "ManagementRegisterBookPage"
            });
        },
    },
    computed: {
        ...mapState(BookModule, ["books"]),
        ...mapState(MemberModule, ["members"]),
        ...mapState(ServiceModule, ["rentalBooks", "reservationBooks", "hopeBooks"])
    },
    mounted() {
        this.requestBookListToSpring();
        this.requestMemberListToSpring();
        this.requestRentalListToSpring();
        this.requestReservationToSpring();
        this.requestHopeBookListToSpring();
    },
}
</script>

<style lang="css">
.managementView {
  display: flex; /* Flexbox 레이아웃 활성화 */
  
}
.mainView {
  /* border: 1px solid black; */
  width: 80%;
  height: 1250px;
  order: 2; /* Added order property to reorder the element */
}
.rightView {
  display: flex; /* 자식 요소를 세로로 배치하기 위해 Flexbox를 사용 */
  flex-direction: column; /* 자식 요소의 배치 방향을 세로로 설정 */
  /* border: 1px solid black; */
  width: 15%;
  height: 1250px;
  order: 1; /* Added order property to reorder the element */
}
.rightView v-btn {
    margin-bottom: 10px;
}
</style>