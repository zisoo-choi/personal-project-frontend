<template lang="">
    <div class="book-container">
        <div class="book-image">
            <v-img :src="getImageUrl(book.filePathList)" class="imageCss" style="width: 300px"/>
        </div>
        <div class="book-details">
        <table class="tableCss">
            <tr>
                <td>도서 번호</td>
                <td>z
                    <input type="text" :value="book.bookNumber" readonly/>
                </td>
            </tr>
            <tr>
                <td>총 수량</td>
                <td>
                    <input type="text" :value="book.bookAmount" readonly/>
                </td>
            </tr>
            <tr>
                <td>저자</td>
                <td>
                    <input type="text" :value="book.author" readonly/>
                </td>
            </tr>
            <!-- <tr>
                <td>도서명</td>
                <td>
                    <input type="text" :value="book.bookName" readonly/>
                </td>
            </tr> -->
            <tr>
                <td>출판사</td>
                <td>
                    <input type="text" :value="book.publishCompany" readonly/>
                </td>
            </tr>
            <!-- <tr>
                <td>카테고리</td>
                <td>
                    <input type="text" :value="book.categorizationSymbol" readonly/>
                </td>
            </tr> -->
            <tr>
                <td>줄거리</td>
                <td>
                    <textarea cols="60" rows="20" :value="book.content" readonly/>
                </td>
            </tr>
            <tr>
                <td>관리자</td>
                <td>
                    <input type="text" :value="book.manager.memberId" readonly/>
                </td>
            </tr>
            <tr>
                <td>등록일자</td>
                <td>
                    <input type="text" :value="book.registrationDate" readonly/>
                </td>
            </tr>
            <!-- <tr>
                <td>사진</td>
                <td>
                    <div>
                        <img :src="getImageUrl(book.filePathList)" style="max-width: 100%; margin-top: 10px;" />
                    </div>
                </td>
            </tr> -->
        </table>
        </div>
    </div>
</template>

<script>


export default {
    name: "ReadBookForm",
    props: {
        book: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            awsBucketName: process.env.VUE_APP_S3_BUCKET_NAME,
            awsBucketRegion: process.env.VUE_APP_S3_REGION,
            awsIdentityPoolId: process.env.VUE_APP_S3_IDENTITY_POOL_ID,
        }
    },
    methods:{
        // S3에서 업로드한 사진 가져오기
        getImageUrl(filePath){
            return `https://${this.awsBucketName}.s3.${this.awsBucketRegion}.amazonaws.com/${filePath}`
        }
    }
}
</script>

<style lang="css">
.book-container {
  display: flex;
  align-items: flex-start; /* 사진을 왼쪽 상단에 맞춤 */
  gap: 20px; /* 사진과 내용 사이 간격 */
  margin: 30px;
}

.book-image {
  flex: 0 0 auto; /* 사진 영역이 컨텐츠의 크기만큼 가짐 */
}

.book-image img {
  max-width: 200px; /* 사진의 최대 너비 */
  height: auto; /* 가로비율 유지하며 높이 자동 조정 */
}

.table-wrapper {
  max-height: 400px;
  overflow-y: auto;
}

.tableCss {
  border: 1px solid black;
  width: 100%;
  background-color: white;
  padding: 10px 20px 10px 20px;
}

.tableCss td:first-child  {
    font-weight: bolder;
    width: 200px;
    text-align: center;
    color: rgb(5, 0, 64);
}
</style>