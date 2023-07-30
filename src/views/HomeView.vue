<template lang="">
    <div class="fullView">
      <!-- <home-carousel-model /> -->
      <home-book-recommend />
      <div class="centeredContainer">
        <home-middle-view />
      </div>
      <home-library-introduction />
      <!-- <div class="HomeBtn">
        <v-btn style="margin:35px; color:white; background-color:rgb(41, 41, 41); width:90px; height: 60px; border-radius: 15px;">이용 안내</v-btn>
        <v-btn style="margin:35px; color:white; background-color:rgb(41, 41, 41); width:90px; height: 60px; border-radius: 15px;">회원 혜택</v-btn>
        <v-btn style="margin:35px; color:white; background-color:rgb(41, 41, 41); width:90px; height: 60px; border-radius: 15px;">도서관</br>행사</v-btn>
        <v-btn style="margin:35px; color:white; background-color:rgb(41, 41, 41); width:90px; height: 60px; border-radius: 15px;">도서관</br>소식</v-btn>
        <v-btn style="margin:35px; color:white; background-color:rgb(41, 41, 41); width:90px; height: 60px; border-radius: 15px;">new</br>서점</v-btn>
      </div> -->
      <home-author-talk />
    </br>
  </br>
    </div>
</template>

<script>
import HomeBookRecommend from "@/views/Home/HomeBookRecommend.vue"
import HomeCarouselModel from "@/views/Home/HomeCarouselModel.vue"
import HomeMiddleView from "@/views/Home/HomeMiddleView.vue"
import HomeAuthorTalk from "@/views/Home/HomeAuthorTalk.vue"
import HomeLibraryIntroduction from "@/views/Home/HomeLibraryIntroduction.vue"

export default {
  data() {
    return {
    };
  },
  components: {
    HomeBookRecommend,
    HomeCarouselModel,
    HomeMiddleView,
    HomeAuthorTalk,
    HomeLibraryIntroduction
  },
  methods: {
  },
};
</script>

<style>
.fullView {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.HomeBtn {
  text-align: center;
  display: flex;
  justify-content: center;
}
.centeredContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
}
</style>
