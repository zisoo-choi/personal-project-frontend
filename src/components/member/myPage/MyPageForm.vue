<template lang="">
    <div class="myPageBox">
        <div class="rightBox">
            <my-page-rental-form v-if="pushRentalInfo" :rentalBooks="rentalBooks"/>
        </div>
        <div class="leftBox">
            <v-btn @click="onPersonalInfo">개인 정보</v-btn>
            <v-btn>장바구니</v-btn>
            <v-btn @click="myRent">나의 대출 현황</v-btn>
            <v-btn>나의 구매 현황</v-btn>
            <v-btn>희망 도서 신청 현황</v-btn>
        </div>
    </div>
</template>

<script>
import MyPageRentalForm from './MyPageRentalForm.vue';

import { mapActions, mapState } from "vuex";
const ServiceModule = 'ServiceModule';
const MemberModule = 'MemberModule'

export default {
    data() {
        return {
            pushRentalInfo: false
        }
    },
    components: {
        MyPageRentalForm
    },
    methods: {
        ...mapActions(ServiceModule, ["requestPersonalInfoToSpring"]),
        onPersonalInfo(){
            
        },
        myRent() {
            this.pushRentalInfo = true;
        }
    },
    computed: {
        ...mapState(ServiceModule, ["rentalBooks"]),
        ...mapState(MemberModule, ["memberInfo"])
    },
    mounted() {
        this.requestPersonalInfoToSpring();
    },
}
</script>

<style lang="css">
   .myPageBox {
    display: flex; /* Flexbox 레이아웃 활성화 */
}

.rightBox {
    border: 1px solid black;
    width: 80%;
    height: 1250px;
}

.leftBox {
    display: flex; /* 자식 요소를 세로로 배치하기 위해 Flexbox를 사용 */
    flex-direction: column; /* 자식 요소의 배치 방향을 세로로 설정 */
    border: 1px solid black;
    width: 20%;
    height: 1250px;
}

/* v-btn 요소들 사이에 간격을 주고 싶다면 아래와 같이 설정할 수 있습니다. */
.leftBox v-btn {
    margin-bottom: 10px;
}
</style>