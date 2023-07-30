<template lang="">
  <div>
    <h2>대출 기록</h2>
    <hr class="custom-hr">
  </br>
    <table style="width: 100%; height: 100%">
      <tr>
        <th align="center" width="8%">대여 번호</th>
        <th align="center" width="8%">도서 번호</th>
        <th align="center" width="12%">도서명</th>
        <th align="center" width="12%">대여일</th>
        <th align="center" width="12%">반납</br>예정일</th>
        <th align="center" width="12%">연장 후</br>반납 예정일</th>
        <th align="center" width="12%">실제</br>반납일</th>
        <th align="center" width="12%">대여 상태</th>
        <th align="center" width="6%"></th>
        <th align="center" width="6%"></th>
      </tr>
      <tr v-if="!rentalBooks || (Array.isArray(rentalBooks) && rentalBooks.length === 0)">
        <td colspan="4">서비스 기록이 없습니다!</td>
      </tr>
      <tr v-else v-for="rentalBook in rentalBooks" :key="rentalBook.rentalNumber">
        <td align="center">
          {{ rentalBook.rentalNumber }}
        </td>
        <td align="center">
          {{ rentalBook.book.bookNumber }}
        </td>
        <td align="center">
          {{ rentalBook.book.bookName }}
        </td>
        <td align="center">
          {{ rentalBook.rentalDate }}
        </td>
        <td align="center">
          {{ rentalBook.estimatedRentalDate }}
        </td>
        <td align="center">
          {{ rentalBook.extensionEstimatedDate }}
        </td>
        <td align="center">
          {{ rentalBook.returnDate }}
        </td>
        <td align="center">
          {{ rentalBook.rentalState }}
        </td>
        <td>
          <button @click="onExtensionClick(rentalBook.rentalNumber)">연장</button>
        </td>
        <td>
          <button @click="onReturnedClick(rentalBook.rentalNumber)">반납</button>
        </td>
      </tr>
    </table>
  </div>
</template>
  
<script>
import { mapActions, mapState } from "vuex";
const ServiceModule = 'ServiceModule';

export default {
  data() {
    return {
      selectedRentalBook: null,
    };
  },
  props: {
      rentalBooks: {
          type: Array,
      },
  },
  computed: {
        ...mapState(ServiceModule, ["rentalBooks as rentalBookList"]),
    },
  methods: {
    ...mapActions(ServiceModule, ["requestExtensionDate", "requestReturnedToSpring"]),
    async onExtensionClick(rentalNumber) {
      this.selectedRentalBook = rentalNumber;
      const extensionResult = await this.requestExtensionDate(this.selectedRentalBook);

      if(extensionResult){
        console.log("extensionResult: ",extensionResult)
        alert("도서 연장 성공")
      } else{
        alert("도서 연장 실패")
      }
    },
    async onReturnedClick(rentalNumber) {
      await this.requestReturnedToSpring(rentalNumber);
    }
  }
};
</script>
  
<style lang="css">
.custom-hr {
  width: 100%; /* Set the width of the <hr> element to 50% */
  margin: 0 auto; /* Center the <hr> element horizontally */
  border-color: #000; /* Set the border color (default is black) */
  border-width: 2px; /* Set the border width (default is 1px) */
}
</style>
  