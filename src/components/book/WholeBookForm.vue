<template lang="">
    <div>
        <h3>전체 도서 목록</h3>
        <div class="categoryBtn">
            <v-btn color="white" @click="philosophy">철학</v-btn>
            <v-btn color="white" @click="religion">종교</v-btn>
            <v-btn color="white" @click="socialScience">사회과학</v-btn>
            <v-btn color="white" @click="naturalScience">자연과학</v-btn>
            <v-btn color="white" @click="technology">기술과학</v-btn>
            <v-btn color="white" @click="art">예술</v-btn>
            <v-btn color="white" @click="language">언어</v-btn>
            <v-btn color="white" @click="literature">문학</v-btn>
            <v-btn color="white" @click="history">역사</v-btn>
        </div>
        <table style="margin: 10px">
            <tr>
                <th align="center" width="5%">도서 번호</th>
                <th align="center" width="20%">도서명</th>
                <th align="center" width="20%">카테고리</th>
                <th align="center" width="8%">저자</th>
                <th align="center" width="10%">등록일자</th>
            </tr>
            <tr v-if="!books || (Array.isArray(books) && books.length === 0)">
                <td colspan="4">현재 등록된 도서 목록이 없습니다!</td>
            </tr>
            <tr v-else v-for="book in books" :key="book.bookId">
                <td align="center">
                {{ book.bookNumber }} <!-- 게시물 번호 뿌린다. -->
                </td>
                <td align="center">
                <!-- <router-link
                    :to="{
                    name: 'BoardReadPage',
                    params: { bookId: book.bookId.toString() },
                    }"
                > -->
                    {{ book.bookName }} <!-- 게시물 제목 뿌린다. -->
                </router-link>
                </td>
                <td align="center">
                {{ book.categorizationSymbol }}
                </td>
                <td align="center">
                {{ book.author }} <!-- 저자 -->
                </td>
                <td align="center">
                {{ book.registrationDate }} <!-- 게시물 시간 뿌린다. -->
                </td>
            </tr>
        </table>
    </div>
</template>
  
<script>
export default {
    props: {
        books: {
        type: Array,
        },
  },
};
</script>
  
<style>
.categoryBtn{
    margin: 20px;
}
</style>
  