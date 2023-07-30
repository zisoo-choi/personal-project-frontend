<template lang="">
    <div class="myPageBox">
        <div class="rightBox">
            <my-page-rental-form v-if="pushRentalInfo" :rentalBooks="rentalBooks"/>
            <my-page-reservation-form v-if="pushReservationInfo" :reservationBooks="reservationBooks"/>
            <my-page-hope-form v-if="pushHopeInfo" :hopeBooks="hopeBooks"/>
        </div>
        <div class="leftBox">
            <button class="myPageBtn" @click="myRent">나의 대출</button>
            <button class="myPageBtn" @click="myHope">희망 도서 신청</button>
            <button class="myPageBtn" @click="myReservation">예약 신청</button>
            <button class="myPageBtn" @click="myBuy">나의 구매</button>
        </div>
    </div>
</template>

<script>
import MyPageRentalForm from './MyPageRentalForm.vue';
import MyPageReservationForm from './MyPageReservationForm.vue';
import MyPageHopeForm from './MyPageHopeForm.vue'

import { mapActions, mapState } from "vuex";
const ServiceModule = 'ServiceModule';
const MemberModule = 'MemberModule'

export default {
    data() {
        return {
            pushRentalInfo: false,
            pushReservationInfo: false,
            pushHopeInfo: false,
        }
    },
    components: {
        MyPageRentalForm,
        MyPageReservationForm,
        MyPageHopeForm,
    },
    methods: {
        ...mapActions(ServiceModule, [
            "requestPersonalInfoToSpring",
            "requestReservationInfoToSpring",
            "requestPersonalHopeToSpring"
        ]),
        myRent() {
            this.pushRentalInfo = true;
            this.pushReservationInfo = false;
            this.pushHopeInfo = false;
            this.pushBuyInfo = false;
        },
        myReservation() {
            this.pushRentalInfo = false;
            this.pushReservationInfo = true;
            this.pushHopeInfo = false;
            this.pushBuyInfo = false;
        },
        myHope(){
            this.pushRentalInfo = false;
            this.pushReservationInfo = false;
            this.pushHopeInfo = true;
            this.pushBuyInfo = false;
        },
        myBuy() {
            this.pushRentalInfo = false;
            this.pushReservationInfo = false;
            this.pushHopeInfo = false;
            alert("준비 중입니다!")

        }
    },
    computed: {
        ...mapState(ServiceModule, [
            "rentalBooks", "reservationBooks", "hopeBooks"
        ]),
        ...mapState(MemberModule, ["memberInfo"])
    },
    mounted() {
        this.requestPersonalInfoToSpring();
        this.requestReservationInfoToSpring();
        this.requestPersonalHopeToSpring();
    },
}
</script>

<style lang="css">
   .myPageBox {
    display: flex; /* Flexbox 레이아웃 활성화 */
    /* width: 65%; */
    justify-content: center; /* 추가: 가로 가운데 정렬 */
    align-items: center; /* 추가: 세로 가운데 정렬 */
    position: relative;
    margin: 0 auto; /* 수평 가운데 정렬 */
    background-color: white;
    border-radius: 3px;
    bottom: 45px;
}
.rightBox {
    /* border: 1px solid black; */
    width: 80%;
    height: 1250px;
    order: 2; /* Added order property to reorder the element */
}
.leftBox {
    display: flex; /* 자식 요소를 세로로 배치하기 위해 Flexbox를 사용 */
    flex-direction: column; /* 자식 요소의 배치 방향을 세로로 설정 */
    /* border: 1px solid black; */
    width: 15%;
    height: 1250px;
    order: 1; /* Added order property to reorder the element */
    margin-right: 8px;
}
/* v-btn 요소들 사이에 간격을 주고 싶다면 아래와 같이 설정할 수 있습니다. */
.leftBox v-btn {
    margin-bottom: 10px;
}
.myPageBtn {
    height: 50px;
    /* border: 1px solid rgba(214, 214, 214, 0.821); */
    color: rgba(108, 108, 108, 0.821);
}
.myPageBtn:hover {
    height: 50px;
    background-color: rgba(231, 231, 231, 0.482);
    color: black
}
</style>