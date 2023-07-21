<template>
    <div class="side-page">
      <!-- 책 상세 정보를 보여주는 내용 작성 -->
      <table>
            <tr>
                <td>도서 번호</td>
                <td>
                    <input type="text" :value="book.bookNumber" readonly/>
                </td>
            </tr>
            <tr>
                <td>총 수량</td>
                <td>
                    <input type="text" :value="book.bookAmount" readonly/>
                </td>
            </tr>
            <tr>
                <td>저자</td>
                <td>
                    <input type="text" :value="book.author" readonly/>
                </td>
            </tr>
            <tr>
                <td>도서명</td>
                <td>
                    <input type="text" :value="book.bookName" readonly/>
                </td>
            </tr>
            <tr>
                <td>출판사</td>
                <td>
                    <input type="text" :value="book.publishCompany" readonly/>
                </td>
            </tr>
            <tr>
                <td>줄거리</td>
                <td>
                    <textarea cols="60" rows="20" :value="book.content" readonly/>
                </td>
            </tr>
            <tr>
                <td>관리자</td>
                <td>
                    <input type="text" :value="book.managerNumber" readonly/>
                </td>
            </tr>
            <tr>
                <td>등록일자</td>
                <td>
                    <input type="text" :value="book.registrationDate" readonly/>
                </td>
            </tr>
        </table>
    </div>
  </template>
  
  <script>
  export default {
    // props: ['book', 'bookNumber'], // 상위 컴포넌트로부터 bookNumber를 전달받음
    props: {
        book: {
            type: Object,
            required: true,
        }
    }
};
</script>
  
<style>
.side-page {
    position: fixed;
    top: 56px; /* 네비게이션의 높이(56px)만큼 아래로 위치 조정 */
    right: 0;
    bottom: 0;
    width: 45%; /* 원하는 사이드 페이지의 너비로 조정 */
    background-color: gray;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    padding: 20px;
}
</style>
