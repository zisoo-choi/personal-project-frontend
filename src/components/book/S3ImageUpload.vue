<template>
    <v-container>
        <div v-for="(file, index) in awsFileList" :key="file.Key">
            #{{ index + 1 }} {{ file.Key }}
            <v-btn @click="deleteAwsS3File(file.Key)" color="red" text icon>x</v-btn>
        </div>
        <input id="file-selector" ref="file" type="file" @change="handleFileUpload()">
        <v-btn @click="uploadAwsS3" color="primary" text>업로드</v-btn>        
        <!-- <v-btn @click="giveMeAwsS3Next" color="purple" text>다음 정보</v-btn> -->

         <!-- 이미지 미리보기 -->
        <img v-if="file" :src="previewUrl" style="max-width: 100%; margin-top: 10px;" />
    </v-container>
</template>

<script>
import AWS from 'aws-sdk';

export default {
    name: "S3ImageUpload",
    data() {
        return {
            file: null,
            awsBucketName: process.env.VUE_APP_S3_BUCKET_NAME,
            awsBucketRegion: process.env.VUE_APP_S3_REGION,
            awsIdentityPoolId: process.env.VUE_APP_S3_IDENTITY_POOL_ID,
            s3: null,
            awsFileList: [],
            startAfterAwsS3Bucket: null,
            awsS3NextToken: null,
        }
    },
    computed: {
        previewUrl() {
            return this.file ? URL.createObjectURL(this.file) : null;
        },
    },
    methods: {
        handleFileUpload(){
            this.file = this.$refs.file.files[0];
            console.log('file: ' + this.file.name);

            // 파일 이름을 부모 컴포넌트로 보내기
            this.$emit("fileSelected", this.file.name);
        },
        async awsS3Config(){
            AWS.config.update({
                region: this.awsBucketRegion,
                credentials: new AWS.CognitoIdentityCredentials({
                    IdentityPoolId: this.awsIdentityPoolId
                })
            })
            this.s3 = new AWS.S3({
                apiVersion: '2006-03-01',
                params: {
                    Bucket: this.awsBucketName
                }
            })
        },
        async uploadAwsS3() {
            await this.awsS3Config()

            this.s3.upload({
                Key: this.file.name,
                Body: this.file,
                ACL: 'public-read',
            }, (err, data) => {
                if(err) {
                    console.log(err)
                    return alert("업로드 중 문제 발생(사진 파일에 문제가 있음)", err.message)
                }
                alert("업로드 성공!")
                this.getAwsS3Files()
            })
            // 미리보기를 업로드 후 초기화
            this.file = null;
        },
        async getAwsS3Files(){
            await this.awsS3Config()
            let res = this.s3.listObjects({
                Delimiter: '/',
                MaxKeys: 1,
            }, (err, data)=>{
                if (err) {
                    return alert('AWS 버킷내에 문제가 있습니다. ' + err.message)
                }else {
                    this.awsFileList = data.Contents
                    console.log('s3 리스트: ', data)
                    this.startAfterAwsS3Bucket = data.NextMarker
                }
            })
        },
        async giveMeAwsS3Next(){
            await this.awsS3Config()
            this.s3.listObjects({
                Delimiter: '/',
                MaxKeys: 1, // pagination하고 싶으면 이 숫자만 바꾸면 된다.
                Marker: this.startAfterAwsS3Bucket || undefined,
            }, (err, data)=>{
                if(err){
                    return alert('AWS 버킷내에 문제가 있습니다.: '+ err.message)
                }else {
                    this.awsFileList = data.Contents
                    console.log('s3 리스트: ', data)
                    this.startAfterAwsS3Bucket = data.NextMarker //파일 하나를 가져왔을 때 다음께 뭔지
                    // Marker가져 온 이후부터 첫 마커는 null..?
                }
            })
        },
        cretate () {
            this.getAwsS3Files()
        },
        deleteAwsS3File(key) {
            this.awsS3Config()

            this.s3.deleteObjects({
                Key: key
            }, (err, data) => {
                if(err){
                    return alert('AWS 버킷 데이터 삭제에 문제가 있습니다: '+ err.message)
                }
                alert('AWS 버킷 데이터 삭제가 성공적으로 완료되었습니다.')
                this.getAwsS3Files()
            })
        }
    }
}
</script>

<style>
    
</style>