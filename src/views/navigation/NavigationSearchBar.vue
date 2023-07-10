<template lang="">
    <nav>
            <!-- 검색 창 -->
            <!-- <v-combobox :items="searchoption" v-model="searchoptionselected" /> -->
            <v-text-field
              v-model="searchkeyword"
              placeholder="도서 검색"
              flat
              hide-details
              clearable
              clear-icon="mdi-close-circle-outline"
              @keyup.enter="searchBtn()"
              v-on:input=""
            ></v-text-field>
            <!-- also works for shorthand -->
            <v-btn @click="searchBtn(searchkeyword)" icon>
              확인 
            </v-btn>
    </nav>
</template>

<script>
import router from "@/router";
import { mapState, mapMutations } from 'vuex'

const NavigationModule = 'NavigationModule'

export default {
    data() {
        return {
            searchkeyword: '',                  // 검색키워드
            keyword: '',
            search: '',
            caseSensitive: '',
        };
    },
    computed: {
      ...mapState(NavigationModule, ['book'])
    },
    methods: {
      ...mapMutations(NavigationModule, ['requestSearchResultToSpring']),

        async searchBtn(payload) {
          const { keyword } = payload;
          
          // if(keyword !== '') {
          //   this.$router.go({
          //     name: "searchPage",
          //     params: {
          //       keyword: this.keyword,
          //       isResultShow: true,
          //     },
          //   });
          //   this.keyword = ''
          //   console.log('"', keyword, '"' + '검색')
          //   } else {
          //     alert("검색어를 입력해주세요!")
          // }

          // 입력된 payload 값을 백엔드로 보내주는 작업을 한다.
          await this.requestSearchResultToSpring({ keyword })

          // 보기 페이지 ? (검색에 따른 결과 리스트 or 아무것도 없음)
          if (keyword !== '') {
            await this.$router.push({
              name: "SearchResultPage",
              params: {
                bookId: this.bookId,
                isResultShow: ture,
               },
            });
            this.keyword = ''
            console.log('"', keyword, '"' + '검색')
          } else {
            alert("검색어를 입력해주세요!")
          }
        },
        searchGroup() {
          const len = this.links.length;

          for(let i = 0; i < len; i++) {
            if(
              this.links[i].text.includes(event.target.value) === false
            ) {
              document.querySelectorAll("*.group-item")[i].style.display = "none";
            } else {
              document.querySelectorAll("*.group-item")[i].style.display = "flex";
            }
          }
        }
    },
}
</script>

<style>
</style>