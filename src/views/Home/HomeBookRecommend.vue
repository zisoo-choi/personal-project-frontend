<template lang="">
    <div class="bookList">
        <h2 class="titleTxt">RECOMMEND BOOK</h2>
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
            images: [
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
.bookList{
    background-color: rgb(41, 41, 41);
}
.titleTxt{
    color: white;
}
</style>