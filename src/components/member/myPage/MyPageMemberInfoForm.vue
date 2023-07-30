<template lang="">
    <div class="memberInfo">
        <div class="flexContainer">
            <div class="memberSimpleInfo">
                <div class="aboutMember"> <!-- Modified here -->
                    <div class="memberRoleShow">{{ memberInfo.role }}</div>
                    <p class="memberIdShow">{{ memberInfo.memberId }} 님</p>
                </div>
                <div class="aboutEvent">
                    <button class="eventBtn">개인정보</button>
                    <button type="button" @click="myShoppingBasket" class="eventBtn">장바구니</button>
                </div>
            </div>
            <div class="memberServiceSimpleInfo">
                <div class="rentalInfo">
                    <div class="boxInTitle">대여 중</div>
                    <div class="boxInContent">{{personalRentalAmount}} 건</div>
                </div>
                <div class="reservationInfo">
                    <div class="boxInTitle">예약 중</div>
                    <div class="boxInContent">{{personalReservationAmount}} 건</div>
                </div>
                <div class="applicationInfo">
                    <div class="boxInTitle">신청 현황</div>
                    <div class="boxInContent">{{personalhopeAmount}} 건</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

const MemberModule = 'MemberModule';
const ServiceModule = 'ServiceModule';

export default {
    data() {
        return {

        }
    },
    computed: {
      ...mapState(MemberModule, ["memberInfo"]),
      ...mapState(ServiceModule, [
        "personalRentalAmount",
        "personalReservationAmount",
        "personalhopeAmount"
    ])
    },
    methods: {
        ...mapActions(ServiceModule, [
            "requestPersonalRentalAmountToSpring",
            "requestPersonalReservationAmountToSpring",
            "requestPersonalHopeAmountToSpring"
        ]),
        myShoppingBasket() {
            alert("준비 중 입니다!");
        }
    },
    created() {
        this.requestPersonalRentalAmountToSpring();
        this.requestPersonalReservationAmountToSpring();
        this.requestPersonalHopeAmountToSpring();
    }
    
}
</script>
<style>
.memberInfo {
    width: 100%;
    height: 350px;
    margin: 0 auto; /* 수평 가운데 정렬 */
    position: relative;
    /* background-color: #B3E5FC; */
    background-color: white;
    display: flex; /* 추가: flex 컨테이너로 설정 */
    justify-content: center; /* 추가: 가로 가운데 정렬 */
    align-items: center; /* 추가: 세로 가운데 정렬 */
}
.flexContainer {
    width: 71.8%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-right: 4px;
    /* top: 50px; */
}
.memberSimpleInfo {
    display: flex;
    flex-direction: column; /* Modified here */
    width: 35%;
    height: 250px;
    justify-content: space-between; /* Added space between the two div elements */
    align-items: center;
    margin: 5px;
}
.memberServiceSimpleInfo {
    width: 55%;
    height: 250px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
}
.memberRoleShow {
    width: 150px;
    height: 50px;
    border-radius: 5px;
    border: 3px solid rgba(214, 214, 214, 0.821);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
}
.memberIdShow{
    margin-top: 15px; /* Modified here */
    font-size: 25px;
}
.aboutMember{
    width: 100%;
    height: 70%;
    background-color: white;
    display: flex;
    flex-direction: column; /* Modified here */
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    margin-top: 30px;
}
.aboutEvent{
    width: 100%; /* Modified here */
    height: 30%; /* Modified here */
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
}
.eventBtn{
    width: 150px;
    height: 45px;
    margin: 10px;
    border-radius: 30px;
    background-color: rgba(214, 214, 214, 0.821);
}
.eventBtn:hover{
    width: 150px;
    height: 45px;
    margin: 10px;
    border-radius: 30px;
    background-color:#B3E5FC;
}
/* 각각의 div 요소들 사이에 간격을 주기 위한 스타일 */
.rentalInfo, .reservationInfo, .applicationInfo {
    margin: 5px;
    width: 30%;
    height: 80%;
    /* border: 2px solid black; */
    border-radius: 10px;
    display: flex;
    flex-direction: column; /* 추가: 요소들을 세로로 배치 */
    justify-content: center;
    align-items: center;
}
.boxInTitle{
    font-size: 25px;
}
.boxInContent{
    font-size: 20px;
    color: rgb(160, 160, 160);
}
</style>
