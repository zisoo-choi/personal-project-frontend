<template lang="">
    <div>
        <tr v-if="!hopeBooks || (Array.isArray(hopeBooks) && hopeBooks.length === 0)">
            <td colspan="4">현재 등록된 도서 목록이 없습니다!</td>
        </tr>
        <v-row v-if="hopeBooks && hopeBooks.length > 0">
            <v-col v-for="hopebook in hopeBooks" :key="hopebook.hopeBookNumber" cols="2">
                <div align="center"> 
                    <router-link
                        class="lineZero"
                        :to="{
                            name: 'HopeReadBookPage',
                            params: { hopeBookNumber:hopebook.hopeBookNumber.toString() },
                        }">
                        <!-- <img src="@/assets/downloadImg/도둑맞은 집중력.jpg" style="max-width: 65%; height: auto;"/> -->
                        <img :src="getImageUrl(basicFile)" style="max-width: 100%; margin-top: 10px;"/>
                        <div>
                            {{ hopebook.bookName }}
                        </div>
                    </router-link>
                </div>
            </v-col>
        </v-row>
    </div>
    
</template>
  
<script>

export default {
    props: {
        hopeBooks: {
            type: Array,
        },
    },
    data() {
        return {
        awsBucketName: process.env.VUE_APP_S3_BUCKET_NAME,
        awsBucketRegion: process.env.VUE_APP_S3_REGION,
        awsIdentityPoolId: process.env.VUE_APP_S3_IDENTITY_POOL_ID,
        basicFile : "basicFile.jpg"
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
};
</script>
  
<style>
.categoryBtn{
    margin: 20px;
}
</style>
  