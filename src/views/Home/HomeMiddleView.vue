<template lang="">
    <div class="horizontalContainer">
        <div class="horizontalItem">
            <h3 class="centerText">지식을 채워요</h3>
            <p class="centerSmallText">도서관에서 즐기는 해방감 !</p>
        </div>
        <div class="linearTest"></div>
        <div class="horizontalItem">
            <h3 class="centerText">추억의 아나바다</h3>
            <p class="centerSmallText">클릭 하나로 대출 반납 !</p>
        </div>
        <div class="linearTest"></div>
        <div class="horizontalItem">
            <h3 class="centerText">지식을 채워요</h3>
            <p class="centerSmallText">도서관에서 즐기는 해방감 !</p>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="css">
.horizontalContainer {
    display: flex;
    flex-direction: row;
    justify-content: center; /* 가로 가운데 정렬 */
    align-items: center; /* 세로 가운데 정렬 */
}
.horizontalItem {
    margin: 50px;
}

/* 텍스트를 가운데 정렬하는 클래스 */
.centerText {
    text-align: center;
    font-size: 20px;
}

.linearTest {
    width: 1px;
    height: 100px;
    background-color: rgb(213, 213, 213);
    margin: 0 20px; /* 세로 선과 각 요소 사이의 간격 조절 */
}
</style>
