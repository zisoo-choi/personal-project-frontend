<template lang="">
    <div class="authorEvent">
        <v-row class="authorBox">
            <!-- <v-col> -->
                <div class="authorInImg">
                    <!-- <v-img src="@/assets/downloadImg/세이노의 가르침.jpg" class="imgAuthor" contain/> -->
                    <v-img :src="getImageUrl(bookfile)" contain class="imgAuthor"/>
                </div>
            <!-- </v-col> -->
            <v-col>
                <div class="todayTalk">
                    <h1>신간의 화제</h1>
                    <h1>작가와의 대화</h1>
                    </br>
                    <button type="button" class="goToApplication">신청하러 가기</button>
                </div>
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
            bookfile: "세이노의 가르침.jpg",
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
.authorEvent{
    background-color: #ffc3a3f3;
    height: 400px;
    padding: 30px;
    width: 850px;
    border-radius: 20px;
}
.authorBox{
    margin-top: 10px;
}
.titleTxt{
    color: black;
}
.imgAuthor{
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    filter: drop-shadow(10px 3px 6px #2121213c); /*그림자*/
}
.todayTalk {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    /* margin-left: 100px; */
    color: white;
}
.goToApplication{
    background-color: #ff9900;
    width: 200px;
    height: 50px;
    font-weight: bold;
    color:white;
    border-radius: 10px;
}
.authorInImg{
    padding: 20px;
}
</style>