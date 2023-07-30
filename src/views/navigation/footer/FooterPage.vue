<template lang="">
    <div class="footerFull">
        <div class="footerContent">
        <div class="topFooter">
            <div class="aboutCenter">
                <p class="centerNumber">클라우드 라이브러리 고객센터 <strong style="color:orange;">02.123.4567</strong></p>
                <div class="centerInfo">
                    <div class="timeSlot">
                        <p>월-목요일</p>
                        <p>11:00 - 18:00 (점심시간 12:00 - 13:00)</p>
                    </div>
                    <div class="timeSlot">
                        <p>금요일</p>
                        <p>09:00 - 18:00 (점심시간 12:00 - 13:00)</p>
                    </div>
                    <div class="timeSlot">
                        <p>토,일,공휴일</p>
                        <p>휴무</p>
                    </div>
                </div>
            </div>
            <div class="aboutQnA">
                <button class="question">문의하기</button>
                <button class="answer">자주 묻는 질문</button>
            </div>
        </div>
    </br>
        <div class="bottomFooter">
            <p style="font-weight: bolder; font-size:20px; color:rgb(113, 113, 113);">CLOUD LIBRARY</p>
            <p>Copyright ⓒ 2023 주식회사 클라우드 All rights reserved.</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    
}
</script>

<style>
.footerFull{
    background-color: rgba(131, 201, 244, 0.515);
}
.footerContent {
    padding: 20px;
    width: 1000px;
    margin: 0 auto; /* 가운데 정렬 */
}
.topFooter {
    /* border: 1px solid black; */
    display: flex; /* Use flexbox */
    justify-content: space-between; /* Space the child elements evenly */
    align-items: center; /* Center the content vertically */
}
.bottomFooter {
    /* border: 1px solid black; */
}
.aboutCenter {
    display: flex; /* Use flexbox */
    flex-direction: column; /* Arrange the content vertically */
    align-items: center; /* Center the content horizontally */
}
.aboutCenter p {
    margin: 5px 0; /* Add some spacing between paragraphs */
}
.aboutCenter .timeSlot p {
    display: inline; /* Make <p> elements appear inline */
    margin: 0 10px; /* Add some spacing between <p> elements */
}
.aboutQnA {
    display: flex; /* Use flexbox */
    gap: 10px; /* Add some gap between buttons */
}
.centerNumber{
    font-weight: bold;
    font-size: 18px;
}
.centerInfo{
    font-size: 14px;
    font-weight: 400;
}
.aboutQnA{
    margin: 20px;
}
.question{
    width: 150px;
    height: 70px;
    /* border: 1px solid black; */
    border-radius: 3px;
    font-weight: bolder;
    background-color: rgb(194, 194, 194);
}
.answer{
    width: 150px;
    height: 70px;
    border: 3px solid rgb(194, 194, 194);
    font-weight: bolder;
    border-radius: 3px;
}
.companyInfo{
    font-size: 15px;
}
</style>