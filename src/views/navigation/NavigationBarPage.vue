<template lang="">
    <nav>
        <v-app-bar color="white" app elevation="0">
            <v-app-bar-nav-icon color="black" @click="navigation_drawer = !navigation_drawer"/>
            <!-- 로고가 들어갈 타이틀 문구 있는 곳 -->
            <v-btn depressed color="white" @click="goToHome">
              <v-toolbar-title class="text-uppercase text--darken-4">
                <b>cloud library</b>
              </v-toolbar-title>
            </v-btn>

            <!-- 검색 창 -->
            <v-spacer></v-spacer>
              <navigation-search-bar-page />
            <v-spacer></v-spacer>

            <!-- 네비게이션 목록 -->
            <div class="text-center">
              <v-menu offset-y open-on-hover elevation="0">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="white"
                    v-bind="attrs"
                    v-on="on"
                    depressed
                  >
                    <span>category</span>
                    <v-icon>mdi-book</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item link>
                    <v-list-item-title
                      @click="newBook">
                    신착 도서
                    </v-list-item-title>
                  </v-list-item>

                  <v-list-item link>
                    <v-list-item-title
                      @click="hopeBook" >
                      희망 도서
                    </v-list-item-title>
                  </v-list-item>

                  <v-list-item link>
                    <v-list-item-title
                      @click="wholeBook">
                      전체 도서
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>

            <v-btn v-if="isLogin" text @click="myPage">
                <span>마이페이지</span>
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
        <v-navigation-drawer
          @click="navDrawer"
          app 
          v-model="navigation_drawer"
          v-if="navigation_drawer">
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
import Cookies from "js-cookie";
import MemberModule from "@/store/member/MemberModule";
import NavigationSearchBarPage from "@/views/navigation/NavigationSearchBarPage.vue";
import { mapActions } from "vuex";

export default {
  components: { NavigationSearchBarPage },
    data() {
        return {
            navigation_drawer: false,
            link: '',
            links: [
              { icon: "mdi-home", text: "Home", route: "/" },
              { icon: "mdi-book", text: "Book Category", route: "/" }
            ],
            search: '',
            caseSensitive: '',
            items: [
                { title: '신착도서' },
                { title: '희망도서' },
                { title: '전체도서' },
            ],
            isLogin: false,
            loginUserInfo: ''
        };
    },
    methods: {
      ...mapActions(MemberModule, 'requestMemberLoginOutToSpring'),
        newBook() {
          router.push("/new-book")
            .catch(() => {})
        },
        hopeBook() {
          router.push("/hope-book")
            .catch(() => {})
        },
        wholeBook() {
          router.push("/whole-book")
            .catch(() => {})
        },
        signUp() {
          router.push('/sign-up')
            .catch(() => {})
        },
        signIn() {
          router.push('/sign-in')
          .catch(() => {});
        },
        signOut() {
          const accessToken = Cookies.get('accessToken');
          if (accessToken != null) {
            Cookies.remove('accessToken');
            Cookies.remove('refreshToken');
            location.reload();
            alert('로그아웃 되었습니다.');
          }
        },
        goToHome() {
            router.push("/")
            .catch(() => {})
        },
        myPage() {
          router.push("/my-Page")
            .catch(() => {})
        },
        navDrawer() {
          this.navigation_drawer = !this.navigation_drawer
        },
        searchGroup() {
          // const len = this.links.length;

          // for(let i = 0; i < len; i++) {
          //   if(
          //     this.links[i].text.includes(event.target.value) === false
          //   ) {
          //     document.querySelectorAll("*.group-item")[i].style.display = "none";
          //   } else {
          //     document.querySelectorAll("*.group-item")[i].style.display = "flex";
          //   }
          // }
        },
      },
      mounted() {
        this.loginUserInfo = Cookies.get('accessToken');

        if (this.loginUserInfo != null) {
            this.isLogin = true;
            router.push('/').catch(() => {});
        }
      },
}
</script>

<style>
</style>