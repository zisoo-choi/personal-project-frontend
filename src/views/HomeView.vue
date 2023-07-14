<template lang="">
    <v-container>
    <home-carousel-model />
    <div class="HomeBtn">
      <v-btn>이용</br>안내</v-btn>
      <v-btn>회원</br>혜택</v-btn>
      <v-btn>도서관</br>행사</v-btn>
      <v-btn>도서관</br>소식</v-btn>
      <v-btn>new</br>서점</v-btn>
    </div>
    <home-book-recommend />
  </v-container>
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
    HomeCarouselModel
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
