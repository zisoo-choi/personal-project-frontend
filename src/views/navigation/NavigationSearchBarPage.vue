<template lang="html">
  <div style="display: flex; align-items: center;">
    <!-- 검색 창 -->
    <!-- <v-combobox :items="searchoption" v-model="searchoptionselected" /> -->
    <v-text-field
      v-model="keyword"
      placeholder="도서 검색"
      flat
      hide-details
      clearable
      clear-icon="mdi-close-circle-outline"
      @keyup.enter="searchBtn(keyword)"
    ></v-text-field>
    <!-- also works for shorthand -->
    <v-btn @click="searchBtn(keyword)" icon>
      확인
    </v-btn>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

const NavigationModule = 'NavigationModule'

export default {
  name: "NavigationSearchBarPage",
  data() {
    return {
      keyword: '',
    };
  },
  computed: {
    ...mapState(NavigationModule, ['books'])
  },
  methods: {
    ...mapActions(NavigationModule, ['requestSearchResultToSpring']),

    async searchBtn(keyword) {
      // 보기 페이지 ? (검색에 따른 결과 리스트 or 아무것도 없음)
      if (keyword !== '') {
        this.$router.push({
          route: "/search-book-list",
          query: { keyword: this.keyword },
          params: { books: this.books }, // 매개변수로 books 배열 전달
        }),
        // 입력된 keyword 값을 백엔드로 보내주는 작업을 한다.
        this.requestSearchResultToSpring({ keyword });
        this.keyword = '';
        console.log('"' + keyword + '"' + '검색');
      } else {
        alert("검색어를 입력해주세요!");
      }
    },
  },
}
</script>

<style>
</style>
