<template lang="">
  <div>
    <h3>검색 기록</h3>
    <table style="margin: 10px">
      <tr>
        <th align="center" width="6%">번호</th>
        <th align="center" width="70%">제목</th>
        <th align="center" width="10%">출판사</th>
        <th align="center" width="14%">등록일자</th>
      </tr>
      <tr v-if="!books || (Array.isArray(books) && books.length === 0)">
        <td colspan="4">현재 조건에 맞는 도서가 없습니다.</td>
      </tr>
      <tr v-else v-for="book in books" :key="book.bookId">
        <td align="center">
          {{ book.bookId }}
        </td>
<!--
        <td align="center">
          <router-link
            :to="{
              name: 'BookReadPage', // 수정된 부분
              params: { bookId: book.bookId.toString() },
            }"
          >
            {{ book.bookName }}
          </router-link>
        </td>
      -->
        <td align="center">
          {{ book.bookNumber }}
        </td>
        <td align="center">
          {{ book.bookName }}
        </td>
        <td align="center">
          {{ book.bookPublishCompany }}
        </td>
        <td align="center">
          {{ book.createDate }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'SearchBookListForm',
  props: {
    books: {
      type: Array,
    },
  },
};
</script>

<style lang=""></style>
