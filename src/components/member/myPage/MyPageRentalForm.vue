<template lang="">
  <div>
    <h3>{{rentalBooks[0].member.memberId}}님의 대출 현황</h3>
    <table style="width: 100%; height: 100%">
      <tr>
        <th align="center" width="5%">대여</br>번호</th>
        <th align="center" width="8%">도서</br>번호</th>
        <th align="center" width="8%">도서명</th>
        <th align="center" width="12%">대여일</th>
        <th align="center" width="12%">반납</br>예정일</th>
        <th align="center" width="12%">연장일</th>
        <th align="center" width="12%">실제</br>반납일</th>
        <th align="center" width="12%">연체일</th>
        <th align="center" width="12%">대여 상태</th>
        <th align="center" width="6%"></th>
        <th align="center" width="6%"></th>
      </tr>
      <tr v-if="!rentalBooks || (Array.isArray(rentalBooks) && rentalBooks.length === 0)">
        <td colspan="4">서비스 기록이 없습니다!</td>
      </tr>
      <tr v-else v-for="rentalBook in rentalBooks" :key="rentalBook.memberNumber">
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
          {{ rentalBook.extensionDate }}
        </td>
        <td align="center">
          {{ rentalBook.returnDate }}
        </td>
        <td align="center">
          {{ rentalBook.overdueDate }}
        </td>
        <td align="center">
          {{ rentalBook.rentalState }}
        </td>
        <td>
          <button @click="onExtensionClick(rentalBook.book.bookNumber)">연장</button>
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
    ...mapActions(ServiceModule, ["requestExtensionDate"]),
    onExtensionClick(bookNumber) {
      this.selectedRentalBook = bookNumber;
      const extensionResult = this.requestExtensionDate(this.selectedRentalBook);
    }
  }
};
</script>
  
<style lang="css">

</style>
  