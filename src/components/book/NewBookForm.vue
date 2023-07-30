<template lang="">
     <div>
        <tr v-if="!books || (Array.isArray(books) && books.length === 0)">
            <td colspan="4">현재 등록된 도서 목록이 없습니다!</td>
        </tr>
        <v-row v-if="books && books.length > 0">
            <v-col v-for="book in books" :key="book.bookNumber" cols="2">
                <div align="center"> 
                    <router-link
                        :to="{
                            name: 'ReadBookPage',
                            params: { bookNumber:book.bookNumber.toString() },
                        }">
                        <img :src="getImageUrl(book.filePathList)" style="max-width: 100%; margin-top: 10px;"/>
                        <div>
                            {{ book.bookName }}
                        </div>
                    </router-link>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import envS3 from '../../../envS3';

export default {
    props: {
        books: {
            type: Array,
        },
    },
    data() {
        return {
        awsBucketName: envS3.env.VUE_APP_S3_BUCKET_NAME,
        awsBucketRegion: envS3.env.VUE_APP_S3_REGION,
        awsIdentityPoolId: envS3.env.VUE_APP_S3_IDENTITY_POOL_ID,
        };
    },
    methods: {
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
}
</script>
<style lang="">
    
</style>