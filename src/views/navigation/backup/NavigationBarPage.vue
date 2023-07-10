<template lang="">
    <nav>
        <v-app-bar color="white" app>
            <v-app-bar-nav-icon color="black" @click="navigation_drawer = !navigation_drawer"/>
            <!-- 로고가 들어갈 타이틀 문구 있는 곳 -->
            <v-btn depressed color="white" @click="goToHome">
              <v-toolbar-title class="text-uppercase text--darken-4">
                <b>cloud library</b>
              </v-toolbar-title>
            </v-btn>

            <!-- 검색 창 -->
            <v-spacer></v-spacer>
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
            <v-spacer></v-spacer>

            <!-- 네비게이션 목록 -->
            <v-btn text @click="clickToggle">
                <span>category</span>
                <v-icon right>mdi-book</v-icon>
            </v-btn>

            <v-btn v-if="isLogin" text @click="clickToggle">
                <span>장바구니</span>
                <v-icon right>mdi-hand-back-left-outline</v-icon>
            </v-btn>
            <v-btn v-if="!isLogin" text @click="signUp">
                <span>회원가입</span>
                <v-icon right>mdi-account-plus-outline</v-icon>
            </v-btn>
            <v-btn v-if="!isLogin" text @click="signIn">
                <span>로그인</span>
                <v-icon right>mdi-login</v-icon>
            </v-btn>
            <v-btn v-if="isLogin" text @click="signOut">
                <span>로그아웃</span>
                <v-icon right>mdi-exit-to-app</v-icon>
            </v-btn>
        </v-app-bar>
        
        <!-- 왼쪽에서 등장하는 바 -->
        <v-navigation-drawer app v-model="navigation_drawer">
        <v-list-item>
            <v-list-item-content>
            <v-list-item-title class="text-h6">CLOUD</v-list-item-title>
            <v-list-item-subtitle>LIBRARY</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>
        <v-sheet class="pa-4 primary lighten-2">
          <v-text-field
            v-model="search"
            label="서비스 검색"
            dark
            flat
            solo-inverted
            hide-details
            clearable
            clear-icon="mdi-close-circle-outline"
            @input="searchGroup" />

          <v-checkbox
            v-model="caseSensitive"
            dark
            hide-details
            label="Case sensitive search"
          ></v-checkbox>
        </v-sheet>

        <v-list nav dense>
          <v-list-item
            v-for="(link, index) in links"
            :key="link.index"
            router
            :to="link.route"
          >
            <v-list-item-action>
              <v-icon>
                {{ link.icon }}
              </v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ link.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
            v-for="(link, index) in link"
            :key="link.index"
            router
            :to="link.route"
          >
            <v-list-item-action>
              <v-icon>
                {{ link.icon }}
              </v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ link.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </nav>
</template>

<script>
import router from "@/router";
import { mapState, mapMutations } from 'vuex'

const NavigationModule = 'NavigationModule'

export default {
    data() {
        return {
            navigation_drawer: false,
            link: '',
            links: [
              { icon: "mdi-home", text: "Home", route: "/" },
              { icon: "mdi-book", text: "Book Category", route: "/" }
            ],
            searchkeyword: '',                  // 검색키워드
            // searchoption: ['제목','작성자'],     // 검색옵션
            // searchoptionselected: '제목',       // 검색옵션값 받아오기, 기본값은 제목으로 지정     
            keyword: '',
            search: '',
            caseSensitive: '',
            items: [
                { title: '신착도서' },
                { title: '희망도서' },
                { title: '전체도서' },
            ],
            isLogin: false
        };
    },
    computed: {
      ...mapState(NavigationModule, ['book'])
    },
    methods: {
      ...mapMutations(NavigationModule, ['requestSearchResultToSpring']),

        clickToggle() {
          alert("도서 카테고리 -> 나중에 슬롯 걸어야 함");
        },
        signUp() {
          router.push('/sign-up')
            .catch(() => {})
        },
        signIn() {
          router.push('/sign-in')
            .catch(() => {})
        },
        signOut() {
            alert("로그아웃")
        },
        goToHome() {
            router.push("/")
            .catch(() => {})
        },

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