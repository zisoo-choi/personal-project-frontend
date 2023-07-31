<template lang="">
    <div>
        <tr v-if="!books || (Array.isArray(books) && books.length === 0)">
            <td colspan="4">현재 등록된 도서 목록이 없습니다!</td>
        </tr>
        <v-row v-if="books && books.length > 0">
            <v-col v-for="book in books" :key="book.bookNumber" cols="2">
                <div align="center"  @click="openSidePage(book)" > 
                        <!-- <router-link
                            :to="{
                                name: 'ReadBookPage',
                                params: { bookNumber:book.bookNumber.toString() },
                            }"> -->
                        <!-- <img src="@/assets/downloadImg/꿀벌의 예언.jpg" style="max-width: 65%; height: auto;"/> -->
                        <img :src="getImageUrl(book.filePathList)" style="max-width: 100%; margin-top: 10px;"/>
                        <div>
                            {{ book.bookName }}
                        </div>
                    <!-- </router-link> -->
                </div>
            </v-col>
        </v-row>

        <!-- 전체 화면을 덮는 불투명한 배경 -->
        <div v-if="isSidePageOpen" class="overlay" @click="closeSidePage"></div>
        <!-- 사이드 페이지 -->
        <BookDetail v-if="isSidePageOpen" :book="selectedBook" :bookNumber="selectedBookNumber" />
    </div>
</template>
  
<script>
import BookDetail from "@/components/book/sidePage/BookDetail.vue"

export default {
    props: {
        books: {
            type: Array,
        },
    },
    components: {
        BookDetail
    },
    data() {
    return {
      isSidePageOpen: false,
      selectedBook: null,
      selectedBookNumber: null,
      awsBucketName: process.env.VUE_APP_S3_BUCKET_NAME,
      awsBucketRegion: process.env.VUE_APP_S3_REGION,
      awsIdentityPoolId: process.env.VUE_APP_S3_IDENTITY_POOL_ID,
    };
  },
  methods: {
    openSidePage(book) {
      this.selectedBook = book;
      this.selectedBookNumber = book.bookNumber.toString(); // bookNumber를 저장합니다.
      this.isSidePageOpen = true;
    },
    closeSidePage() {
      this.isSidePageOpen = false; // isSidePageOpen을 false로 설정하여 페이지를 숨깁니다.
    },
    // S3에서 업로드한 사진 가져오기
    getImageUrl(filePath) {
        if(filePath != null) {
            return `https://${this.awsBucketName}.s3.${this.awsBucketRegion}.amazonaws.com/${filePath}`;
        }
        else {
            return `https://${this.awsBucketName}.s3.${this.awsBucketRegion}.amazonaws.com/${basicFile}`;
        }
    },
  },
};
</script>
  
<style>
.categoryBtn{
    margin: 20px;
}
.overlay {
  position: fixed;
  top: 0px;
  left: 0;
  right: 55%;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* 불투명한 배경 색상 설정 */
  z-index: 900; /* 다른 요소들보다 앞에 표시하기 위한 z-index 설정 */
}
</style>
  