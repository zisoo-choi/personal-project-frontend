<template lang="">
    <v-container class="carousel-container">
      <h2>NEW BOOK</h2>
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
}
</script>

<style>
    
</style>