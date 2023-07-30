<template lang="">
    <div>
      <h2>도서 목록</h2>
      <hr class="custom-hr">
      <table style="width: 100%; height: 100%">
        <tr>
          <th align="center" width="10%">관리자</th>
          <th align="center" width="15%">도서 번호</th>
          <th align="center" width="25%">도서 명</th>
          <th align="center" width="15%">지은이</th>
          <th align="center" width="8%">전체 수량</th>
          <th align="center" width="8%">대여</br>가능수량</th>
          <th align="center" width="20%">작성일자</th>
          <th align="center" width="8%"></th>
          <th align="center" width="8%"></th>
        </tr>
        <tr v-if="!books || (Array.isArray(books) && books.length === 0)">
          <td colspan="4">현재 등록된 도서가 없습니다!</td>
        </tr>
        <tr v-else v-for="book in books" :key="book.bookNumber">
          <td align="center">
            {{ book.manager.memberNumber }}
          </td>
          <td align="center">
            {{ book.bookNumber }}
          </td>
          <td align="center">
              {{ book.bookName }}
          </td>
          <td align="center">
            {{ book.author }}
          </td>
          <td align="center">
            {{ book.bookAmount }}
          </td>
          <td align="center" :class="{ 'zero-amount': book.rentalAmount === 0 }">
            {{ book.rentalAmount }}
          </td>
          <td align="center">
            {{ book.registrationDate }}
          </td>
          <td>
            <!-- <button @click="onDelete(book.bookNumber)">삭제</button> -->
            <button @click="onDeleteClick(book)">삭제</button>
          </td>
          <td>
            <router-link :to="{
              name: 'ManagementReadBookPage',
              params: { bookNumber: book.bookNumber.toString() }
              }">
                읽기
            </router-link>
          </td>
        </tr>
        <!-- 도서 삭제 (권 수 묻는) 팝업 -->
        <!-- <book-delete-popup
          v-if="showDelete"
          :bookNumber="selectedBookNumber"
          @onDeleteBooks="onDeleteBooks"
          @close-popup="closeDeletePopup"
        /> -->
        <div class="popup-container" v-if="onPopup">
            <div class="popup">
              <h3>도서 삭제</h3>
              <p>해당 [{{selectedBook.bookName}}] 도서를 삭제하시겠습니까?</p>
              <button @click="onDelete(selectedBook.bookNumber)">Yes</button>
              <button @click="onCancel">No</button>
            </div>
          </div>
      </table>
    </div>
  </template>

<script>
import BookDeletePopup from "@/components/book/manager/popUpPage/BookDeletePopup.vue";
import { mapActions, mapState } from "vuex";
const BookModule = "BookModule";

export default {
  data() {
    return {
      // 삭제 팝업을 표시할지 여부를 관리하는 데이터
      showDelete: false,
      deleteCount: 0,
      onPopup: false,
      selectedBook: null, // 선택한 회원 정보를 저장할 데이터
    };
  },
  props: {
    books: {
      type: Array,
    },
  },
  components: {
    BookDeletePopup,
  },
  computed: {
        ...mapState(BookModule, ["book"]),
    },
  methods: {
    onDeleteClick(book) {
      this.selectedBook = book; // 선택한 회원 정보를 업데이트합니다.
      this.onPopup = true;
    },
    onCancel() {
      this.onPopup = false;
    },
    onModify(bookNumber) {
      this.$router.push({
          name: "ManagementModifyBookPage",
          params: {
            bookNumber
          }
      });
    },
    ...mapActions(BookModule, [
      "requestDeleteBoardToSpring", "requestBookListToSpring"
    ]),
    async onDelete(bookNumber) {
      await this.requestDeleteBoardToSpring(bookNumber);
      await this.requestBookListToSpring();

      // 계정 삭제가 완료되면 팝업을 닫습니다.
      this.onPopup = false;

      // await this.$router.push({
      //     name: "ManagementBookPage"
      // });
    },
    // showDeletePopup(bookNumber) {
    //   this.selectedBookNumber = bookNumber;
    //   this.showDelete = true;
    // },
    // async onDeleteBooks() {
    //   // 삭제가 완료되면 팝업을 닫습니다.
    //   this.closeDeletePopup();
    // },
    // // 팝업 닫기 메소드
    // closeDeletePopup() {
    //   this.showDelete = false;
    //   // this.$router.push('/management-book');
    // },
  }
};
</script>

<style lang="css">
/* 팝업 스타일을 원하는 대로 꾸밀 수 있습니다. */
.popup-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.popup {
background-color: white;
padding: 20px;
border-radius: 5px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
.error-message {
color: red;
font-size: 12px;
}
.zero-amount {
  color: red;
}
</style>
