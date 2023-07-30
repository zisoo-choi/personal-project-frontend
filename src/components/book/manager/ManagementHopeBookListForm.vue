<template lang="">
    <div>
      <h2>희망 도서 목록</h2>
      <hr class="custom-hr">
      <table style="width: 100%; height: 100%">
        <tr>
          <th align="center" width="15%">신청 번호</th>
          <th align="center" width="15%">회원 번호</th>
          <th align="center" width="15%">도서 명</th>
          <th align="center" width="15%">저자</th>
          <th align="center" width="15%">출판사</th>
          <th align="center" width="20%">신청 일시</th>
        </tr>
        <tr v-if="!hopeBooks || (Array.isArray(hopeBooks) && hopeBooks.length === 0)">
          <td colspan="4">현재 등록된 희망도서가 없습니다!</td>
        </tr>
        <tr v-else v-for="hopeBook in hopeBooks" :key="hopeBook.hopeBookNumber">
          <td align="center">
            {{ hopeBook.hopeBookNumber }}
          </td>
          <td align="center">
            {{ hopeBook.member.memberNumber }}
          </td>
          <td align="center">
            {{ hopeBook.bookName }}
          </td>
          <td align="center">
            {{ hopeBook.author }}
          </td>
          <td align="center">
            {{ hopeBook.publishCompany }}
          </td>
          <td align="center">
            {{ hopeBook.applicationDate }}
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
        hopeBooks: {
            type: Array,
      },
    },
  };
</script>
  
<style lang="css"></style>
  