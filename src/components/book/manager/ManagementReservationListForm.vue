<template lang="">
    <div>
      <h2>예약 목록</h2>
      <hr class="custom-hr">
      <table style="width: 100%; height: 100%">
        <tr>
          <th align="center" width="15%">예약 번호</th>
          <th align="center" width="15%">회원 번호</th>
          <th align="center" width="15%">회원 아이디</th>
          <th align="center" width="15%">도서 번호</th>
          <th align="center" width="15%">예약 상태</th>
          <th align="center" width="20%">예약 일시</th>
        </tr>
        <tr v-if="!reservationBooks || (Array.isArray(reservationBooks) && reservationBooks.length === 0)">
          <td colspan="4">현재 등록된 예약 목록이 없습니다!</td>
        </tr>
        <tr v-else v-for="reservationBook in reservationBooks" :key="reservationBook.reservationNumber">
          <td align="center">
            {{ reservationBook.reservationNumber }}
          </td>
          <td align="center">
            {{ reservationBook.member.memberNumber }}
          </td>
          <td align="center">
            {{ reservationBook.member.memberId }}
          </td>
          <td align="center">
            {{ reservationBook.book.bookNumber }}
          </td>
          <td align="center">
            {{ reservationBook.reservationState }}
          </td>
          <td align="center">
            {{ reservationBook.reservationDate }}
          </td>  
        </tr>
      </table>
    </div>
</template>

<script>
  export default {
    data() {
      return {
      };
    },
    props: {
        reservationBooks: {
            type: Array,
      },
    },
  };
</script>
  
<style lang="css"></style>
  