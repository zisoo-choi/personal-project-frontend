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
    name: "ManagementReadBookForm",
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
    
</style>