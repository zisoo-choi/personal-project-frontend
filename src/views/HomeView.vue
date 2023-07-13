<template lang="">
  <v-container class="center-container justify-center align-center">
    <div class="carousel-container">
      <v-carousel hide-delimiters :cycle="cycle" :interval="interval" :height="height" v-model="model">
        <v-carousel-item v-for="(picture, idx) in bannerPictures" :key="idx">
          <v-sheet :height="height / 2" tile>
            <v-row class="fill-height" align="center" justify="center">
              <v-col cols="6" v-for="(picture, idx) in getCarouselItems(idx)" :key="idx">
                <v-img :src="picture.img" :height="height" contain class="carousel-image" />
              </v-col>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>

    <div class="HomeBtn">
      <v-btn class="HomeSmallBtn">이용</br>안내</v-btn>
      <v-btn class="HomeSmallBtn">회원</br>혜택</v-btn>
      <v-btn class="HomeSmallBtn">도서관</br>행사</v-btn>
      <v-btn class="HomeSmallBtn">도서관</br>소식</v-btn>
      <v-btn class="HomeSmallBtn">new</br>서점</v-btn>
    </div>

    <div class="BookRecommendation">
      <p>Book recommendation</p>
      <span>책사진들</span>
    </div>

  </v-container>
</template>

<script>
export default {
  data() {
    return {
      carouselModel: false,
      bannerPictures: [
        { img: require("@/assets/downloadImg/book.png") },
        { img: require("@/assets/downloadImg/books.png") },
        { img: require("@/assets/downloadImg/book.png") },
        { img: require("@/assets/downloadImg/books.png") },
      ],
      cycle: true,
      interval: 4000,
      height: 300,
      model: '',
    };
  },
  methods: {
    getCarouselItems(idx) {
      const items = [];
      if (idx < this.bannerPictures.length - 1) {
        items.push(this.bannerPictures[idx]);
        items.push(this.bannerPictures[idx + 1]);
      } else {
        items.push(this.bannerPictures[idx]);
        items.push(this.bannerPictures[0]);
      }
      return items;
    },
  },
};
</script>

<style>
.HomeBtn {
  text-align: center;
}

.BookRecommendation {
  background-color: #d4f0f0;
  height: 300px;
}

.center-container {
  max-width: 900px;
}

.HomeSmallBtn {
  margin: 50px;
}
</style>
