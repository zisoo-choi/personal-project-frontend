<template lang="">
    <div>
        <form @submit.prevent="onSubmit">
            <table>
                <tr>
                    <td>도서 번호</td>
                    <td>
                        <input type="text" :value="book.bookNumber" disabled/>
                    </td>
                </tr>
                <tr>
                    <td>총 수량</td>
                    <td>
                        <input type="number" v-model="bookAmount" />
                    </td>
                </tr>
                <tr>
                    <td>저자</td>
                    <td>
                        <input type="text" :value="book.author" disabled/>
                    </td>
                </tr>
                <!-- <tr>
                    <td>도서명</td>
                    <td>
                        <input type="text" :value="book.bookName" disabled/>
                    </td>
                </tr> -->
                <tr>
                    <td>출판사</td>
                    <td>
                        <input type="text" :value="book.publishCompany" disabled/>
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
                        <textarea cols="60" rows="20" v-model="content" />
                    </td>
                </tr>
                <tr>
                    <td>관리자</td>
                    <td>
                        <input type="text" :value="book.managerNumber" disabled/>
                    </td>
                </tr>
                <tr>
                    <td>등록일자</td>
                    <td>
                        <input type="text" :value="book.registrationDate" disabled/>
                    </td>
                </tr>
                <tr>
                    <td>수정일자</td>
                    <td>
                        <input type="text" v-model="updateDate" />
                    </td>
                </tr>
                <tr>
                    <td>사진</td> <!-- 수정 때 사진 변경 불가능 -->
                    <td>
                        <div>
                            <img :src="getImageUrl(book.filePathList)" style="max-width: 100%; margin-top: 10px;" disabled/>
                        </div>
                    </td>
                </tr>
            </table>
            <div>
                <button type="submit">수정 완료</button>
                <router-link
                    :to="{
                        name: 'ManagementReadBookPage',
                        params: { bookNumber: book.bookNumber.toString() },
                    }">
                    수정 취소
                </router-link>
            </div>
        </form>
    </div>
</template>

<script>

export default {
    props: {
        book: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            content: "",
            updateDate: "",
            bookAmount: "",
            awsBucketName: process.env.VUE_APP_S3_BUCKET_NAME,
            awsBucketRegion: process.env.VUE_APP_S3_REGION,
            awsIdentityPoolId: process.env.VUE_APP_S3_IDENTITY_POOL_ID,
        };
    },
    created() {
        this.bookAmount = this.book.bookAmount;
        // this.managerNumber = this.book.managerNumber;
        // this.registrationDate = this.book.registrationDate;
        // this.author = this.book.author;
        // this.publishCompany = this.book.publishCompany;
        this.content = this.book.content;
        this.updateDate = this.book.updateDate;
    },
    methods: {
        onSubmit() {
            const { bookAmount, content, updateDate } = this;

            console.log("보내기 전 찍어보는");
            console.log(
            ", content: "+content+
            ", updateDate: "+updateDate
            );

            this.$emit("submit", { bookAmount, content, updateDate });
        },
        // S3에서 업로드한 사진 가져오기
        getImageUrl(filePath){
            return `https://${this.awsBucketName}.s3.${this.awsBucketRegion}.amazonaws.com/${filePath}`
        }
    }
}
</script>

<style lang="">
    
</style>