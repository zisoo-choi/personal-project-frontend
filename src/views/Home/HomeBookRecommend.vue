<template lang="">
    <div class="bookList">
        <!-- <h2 class="titleTxt">RECOMMEND BOOK</h2> -->
        <!-- <v-row>
            <v-col v-for="(image, idx) in images" :key="idx" cols="2">
                <v-img :src="image" aspect-ratio="1" contain/>
            </v-col>
        </v-row> -->
        <v-row>
            <v-col cols="6">
                <div class="todayRecommend">
                    <h1>읽으면 지식이 쌓인다</h1>
                    <h1>오늘의 추천 도서</h1>
                </br>
                    <button type="button" class="goToRead" @click="goToReadPage">책 읽으러 가기</button>
                </div>
            </v-col>
            <v-col cols="6">
                <!-- <v-img src="@/assets/downloadImg/블랙쉼.jpg" class="imgFile" contain/> -->
                <v-img :src="getImageUrl(bookfile)" contain class="imgFile"/>
            </v-col>
        </v-row>
    </div>
</template>

<script>

export default {
    data () {
        return {
            // images: [
            //     require('@/assets/downloadImg/꿀벌의 예언.jpg'),
            //     require('@/assets/downloadImg/도둑맞은 집중력.jpg'),
            //     require('@/assets/downloadImg/블랙쉼.jpg'),
            //     require('@/assets/downloadImg/세이노의 가르침.jpg'),
            //     require('@/assets/downloadImg/역행자.jpg'),
            //     require('@/assets/downloadImg/판다.jpg'),
            // ],
            awsBucketName: process.env.VUE_APP_S3_BUCKET_NAME,
            awsBucketRegion: process.env.VUE_APP_S3_REGION,
            awsIdentityPoolId: process.env.VUE_APP_S3_IDENTITY_POOL_ID,
            bookfile: "블랙쉼.jpg",
        }
    },
    methods:{
        // S3에서 업로드한 사진 가져오기
        getImageUrl(filePath){
            return `https://${this.awsBucketName}.s3.${this.awsBucketRegion}.amazonaws.com/${filePath}`
        },
        goToReadPage() {
            this.$router.push({
                name: "WholeBookPage"
            });
        }
    }
}
</script>

<style lang="css">
.bookList{
    /* background-color: rgb(41, 41, 41); */
    background-color: #B3E5FC;
    height: 500px;
    padding: 40px;
    width: 100%;
}
.titleTxt{
    color: black;
}
.imgFile{
    width: 400px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    filter: drop-shadow(10px 10px 6px #c3c3c3); /*그림자*/
}
.todayRecommend {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin-left: 100px;
}
.goToRead{
    background-color: rgb(96, 143, 255);
    width: 300px;
    height: 50px;
    font-weight: bold;
    color: white;
    border-radius: 10px;
}
</style>