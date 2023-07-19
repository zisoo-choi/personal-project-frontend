<template lang="">
    <div class="fullView">
      <!-- <home-carousel-model /> -->
      <home-book-recommend />
      <div class="HomeBtn">
        <v-btn style="margin:35px; color:white; background-color:rgb(41, 41, 41); width:90px; height: 60px;">이용 안내</v-btn>
        <v-btn style="margin:35px; color:white; background-color:rgb(41, 41, 41); width:90px; height: 60px;">회원 혜택</v-btn>
        <v-btn style="margin:35px; color:white; background-color:rgb(41, 41, 41); width:90px; height: 60px;">도서관</br>행사</v-btn>
        <v-btn style="margin:35px; color:white; background-color:rgb(41, 41, 41); width:90px; height: 60px;">도서관</br>소식</v-btn>
        <v-btn style="margin:35px; color:white; background-color:rgb(41, 41, 41); width:90px; height: 60px;">new</br>서점</v-btn>
      </div>
    </div>
</template>

<script>
import HomeBookRecommend from "@/views/Home/HomeBookRecommend.vue"
import HomeCarouselModel from "@/views/Home/HomeCarouselModel.vue"

export default {
  data() {
    return {
    };
  },
  components: {
    HomeBookRecommend,
    HomeCarouselModel,
  },
  methods: {
  },
};
</script>

<style>
.HomeBtn {
  text-align: center;
  display: flex;
  justify-content: center;
}
</style>
