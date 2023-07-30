<template lang="">
    <div>
      <h2>도서관 서비스 현황</h2>
      <hr class="custom-hr">
      <table style="width: 100%; height: 100%">
        <tr>
          <th align="center" width="5%">대여</br>번호</th>
          <th align="center" width="8%">회원</th>
          <th align="center" width="8%">도서</th>
          <th align="center" width="12%">대여일</th>
          <th align="center" width="12%">반납</br>예정일</th>
          <th align="center" width="12%">연장 후</br>반납 예정일체일</th>
          <th align="center" width="12%">실제</br>반납일</th>
          <th align="center" width="12%">연체일</th>
          <th align="center" width="10%">대여 상태</th>
        </tr>
        <tr v-if="!rentalBooks || (Array.isArray(rentalBooks) && rentalBooks.length === 0)">
          <td colspan="4">서비스 기록이 없습니다!</td>
        </tr>
        <tr v-else v-for="rentalBook in rentalBooks" :key="rentalBook.memberNumber">
          <td align="center">
            {{ rentalBook.rentalNumber }}
          </td>
          <td align="center">
            {{ rentalBook.member.memberId }}
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
            {{ rentalBook.overdueDate }}
          </td>
          <td align="center">
            {{ rentalBook.rentalState }}
          </td>
        </tr>
      </table>
    </div>
  </template>
  
  <script>
  import { mapActions, mapState } from 'vuex';
  
  const MemberModule = "MemberModule"
  
  export default {
    data() {
      return {
      };
    },
    props: {
        rentalBooks: {
            type: Array,
        },
    },
    computed: {
    },
    methods: {
    
    }
  };
  </script>
  
  <style lang="css">

  </style>
  