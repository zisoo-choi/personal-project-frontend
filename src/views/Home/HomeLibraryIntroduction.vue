<template lang="">
    <div class="container">
        <h1>클라우드 라이브러리 만의 특별함</h1>
        <div>
            <div class="itemContainer">
                <div class="introductionBox"></div>
                <p class="introductionTitle">다양한 행사</p>
                <p class="introductionContent">매 달마다 다양한 이벤트로</br>회원들을 찾아갑니다.</p>
            </div>
            <div class="itemContainer">
                <div class="introductionBox"></div>
                <p class="introductionTitle">희망 도서 신청</p>
                <p class="introductionContent">우리 도서관에 존재하지 않는 책도</br>버튼 하나로 행복하게 !</p>
            </div>
            <div class="itemContainer">
                <div class="introductionBox"></div>
                <p class="introductionTitle">편리한 구매 기능</p>
                <p class="introductionContent">대여하고 난 뒤</br>소장하고 싶은 책은 구매까지 !</p>
            </div>
            <div class="itemContainer">
                <div class="introductionBox"></div>
                <p class="introductionTitle">궁금해 커뮤니티</p>
                <p class="introductionContent">우리 도서관을 이용하는</br>다른 회원들의 페이보릿 도서가 궁금해 ?</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="css">
.container {
    text-align: center;
}
.introductionBox {
    width: 350px;
    height: 200px;
    border-radius: 10px;
    background-color: rgba(205, 205, 205, 0.248);
}
.itemContainer {
    display: inline-block;
    margin: 20px;
}
.introductionTitle{
    font-weight: bold;
    font-size: 20px;
    border-radius: 10px;
    margin: 15px;
    color: rgb(0, 19, 86);
}
.introductionContent{
    font-weight: 300;
}
</style>
