<template lang="">
  <v-container>
      <div class="homeImg">
          <v-carousel :cycle="cycle" :interval="interval" :height="height" v-model="model">
              <v-carousel-item v-for="(picture, idx) in bannerPictures" :key="idx">
                  <v-sheet :height="height" tile>
                      <v-row class="fill-height" align="center" justify="center">
                          <v-img :src="picture.img" :height="height" contain/>
                      </v-row>
                  </v-sheet>
              </v-carousel-item>
          </v-carousel>
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
            interval: 3000,
            height: 400,
            model: ''
        }
    }
  }
</script>

<style>
.homeImg {
  margin-top: 30px;
}
</style>
