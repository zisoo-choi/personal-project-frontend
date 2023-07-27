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
                <td>대여 가능 수량</td>
                <td>
                    <input type="text" :value="book.rentalAmount" readonly/>
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
                    <div class="scrollable-content">
                        <textarea cols="60" rows="20" :value="book.content" readonly/>
                    </div>
                </td>
            </tr>
            <tr>
                <td>관리자</td>
                <td>
                    <input type="text" :value="book.manager.memberId" readonly/>
                </td>
            </tr>
            <tr>
                <td>등록일자</td>
                <td>
                    <input type="text" :value="book.registrationDate" readonly/>
                </td>
            </tr>
            <div v-if="isLogin()" class="button-container">
                <v-btn color="pink" @click="onReturnedClick(book)">반납하기</v-btn>
                <v-btn color="primary" @click="onRentClick(book)">대여하기</v-btn>
                <v-btn color="primary" @click="onPurchaseClick">구매하기</v-btn>
                <v-btn color="primary" @click="onAddToCartClick">장바구니</v-btn>
            </div>
            <div class="popup-container" v-if="onPopup">
                <div class="popup">
                    <h3>도서 대여</h3>
                    <p>[{{selectedBook.bookName}}] 도서를 대여하시겠습니까?</p>
                    <button @click="onRent(selectedBook.bookNumber)">Yes</button>
                    <button @click="onCancel">No</button>
                </div>
            </div>
            <div class="popup-container" v-if="onReservationPopup">
                <div class="popup">
                    <h3>도서 예약</h3>
                    <p>[{{selectedBook.bookName}}] 도서의 대여 가능 재고가 없습니다.</br>예약 하시겠습니까?</p>
                    <button @click="onReservation(selectedBook.bookNumber)">Yes</button>
                    <button @click="onCancel">No</button>
                </div>
            </div>
        </table>
    </div>
</template>
  
<script>
import { mapActions, mapState } from 'vuex';
const MemberModule = "MemberModule"
const ServiceModule = "ServiceModule"

  export default {
    data() {
        return {
            selectedBook: '',
            onPopup: false,
            onReservationPopup: false,
        }
    },
    // props: ['book', 'bookNumber'], // 상위 컴포넌트로부터 bookNumber를 전달받음
    props: {
        book: {
            type: Object,
            required: true,
            selectedBook: '',
        }
    },
    computed: {
        ...mapState(MemberModule, ["memberInfo"]),
    },
    methods: {
        ...mapActions(ServiceModule, [
            'requestRentalToSpring', 'requestReturnedToSpring', 'requestReservatopnToSpring'
        ]),
        isLogin() {
            if (this.memberInfo !== null) {
                return true;
            } else {
                return false;
            }
        },
        onRentClick(book) {
            this.selectedBook = book; // 선택한 회원 정보를 업데이트합니다.

            // 수량이 존재하지 않으면 예약 팝업이 뜬다 !
            if(book.rentalAmount <= 0) {
                this.onReservationPopup = true;
                
            } else {
                this.onPopup = true;
            }
        },
        async onRent(bookNumber) {
            const isRent =  await this.requestRentalToSpring(bookNumber);

            console.log("isRent: ", isRent);
    
            if(isRent === false) {
                alert("대여 불가")
                this.onPopup = false;
            } else {
                alert("도서 대여가 성공적으로 이루어졌습니다.")
            this.onPopup = false;
            }
        },
        async onReservation(bookNumber) {
            const isReservation = await this.requestReservatopnToSpring(bookNumber);

            console.log("isReservation: ", isReservation);

            if(isReservation === false) {
                alert("예약 불가")
                this.onReservationPopup = false;
            } else {
                alert("도서 예약 성공 !")
                this.onReservationPopup = false;
            }
        },
        onCancel() {
            this.onPopup = false;
            this.onReservationPopup = false;
        },
        async onReturnedClick(book) {
            this.selectedBook = book;
            await this.requestReturnedToSpring(book.bookNumber);
        },
        onPurchaseClick() {
        // 구매하기 버튼이 클릭되었을 때 동작 구현
        // 예: 구매 처리를 위한 함수 호출 등
        },
        onAddToCartClick() {
        // 장바구니에 추가 버튼이 클릭되었을 때 동작 구현
        // 예: 장바구니에 추가 처리를 위한 함수 호출 등
        },
    }
};
</script>
  
<style lang="css">
.side-page {
  position: fixed;
  top: 56px; /* 네비게이션의 높이(56px)만큼 아래로 위치 조정 */
  right: 0;
  bottom: 0;
  width: 55%; /* 원하는 사이드 페이지의 너비로 조정 */
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding: 20px;
  color: black;
  overflow-y: auto; /* 세로 스크롤 생성 */
  
  /* 가운데 정렬 스타일 추가 */
  display: flex;
  justify-content: center;
}

/* table과 textarea 요소의 너비를 고정값으로 설정 */
table {
  min-width: 100px; /* 테이블의 최소 너비를 설정, 원하는 너비로 조정 */
  width: 80%; /* 테이블의 최대 너비를 설정 */
  table-layout: fixed; /* 테이블의 너비를 고정 값으로 설정 */
}

table td input[type="text"],
table td textarea {
  width: 100%; /* 원하는 input/textarea 너비로 설정 */
  box-sizing: border-box; /* padding과 border를 포함한 전체 너비로 설정 */
  word-wrap: break-word; /* 긴 단어를 여러 줄로 자동 줄바꿈 */
}

/* 줄거리를 감싸는 div 요소에 스타일 추가 */
.scrollable-content {
  max-height: 500px; /* 최대 높이를 원하는 값으로 설정 */
  overflow-y: auto; /* 세로 스크롤 생성 */
}

/* 버튼 컨테이너를 가로로 나열하기 위한 스타일 */
.button-container {
  display: flex;
  gap: 10px;
}

.popup {
  margin-left: 450px;
}
</style>