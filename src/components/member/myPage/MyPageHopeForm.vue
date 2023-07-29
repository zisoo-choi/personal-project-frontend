<template lang="">
    <div>
      <h3>희망 도서 신청 목록</h3>
      <table style="width: 100%; height: 100%">
        <tr>
          <th align="center" width="15%">신청 번호</th>
          <th align="center" width="15%">회원 번호</th>
          <th align="center" width="15%">도서명</th>
          <th align="center" width="15%">작가</th>
          <th align="center" width="15%">출판사</th>
          <th align="center" width="20%">등록 일시</th>
          <th align="center" width="15%">회원 아이디</th>
        </tr>
        <tr v-if="!books || (Array.isArray(books) && books.length === 0)">
          <td colspan="4">현재 등록된 회원이 없습니다!</td>
        </tr>
        <tr v-else v-for="book in books" :key="book.reservationNumber">
          <td align="center">
            {{ book.hopeBookNumber }}
          </td>
          <td align="center">
            {{ book.member.memberNumber }}
          </td>
          <td align="center">
            {{ book.bookName }}
          </td>
          <td align="center">
            {{ book.author }}
          </td>
          <td align="center">
            {{ book.publishCompany }}
          </td> 
          <td align="center">
            {{ book.applicationDate }}
          </td>  
          <td align="center">
            {{ book.member.memberId }}
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
        books: {
            type: Array,
      },
    },
  };
  </script>
  
  <style lang="css">

  </style>
  