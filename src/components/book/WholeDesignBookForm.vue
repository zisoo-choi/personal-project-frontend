<template lang="">
    <div class="bookList">
        <v-row>
            <v-col v-for="(image, idx) in images" :key="idx" cols="2">
                <v-img :src="image" aspect-ratio="1" contain/>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    data () {
        return {
            // ● 변수를 이용하여 사용자 원하는 사진의 경로를 넣어주는 경우
            images: [
                // 이와 같은 방식은 이미 저장되어 있는 사진의 경우 (이런 방식은 로고를 넣을 때 사용한다.)
                require('@/assets/downloadImg/꿀벌의 예언.jpg'),
                require('@/assets/downloadImg/도둑맞은 집중력.jpg'),
                require('@/assets/downloadImg/블랙쉼.jpg'),
                require('@/assets/downloadImg/세이노의 가르침.jpg'),
                require('@/assets/downloadImg/역행자.jpg'),
                require('@/assets/downloadImg/판다.jpg'),
            ]
        }
    }
}
</script>

<style>
</style>