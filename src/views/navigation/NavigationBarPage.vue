<template lang="">
    <nav>
        <v-app-bar color="white" app>
            <v-app-bar-nav-icon color="black" @click="navigation_drawer = !navigation_drawer"/>
            <v-btn @click="goToHome" class="title-button">
                <b style="color: black;">cloud library</b>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn text @click="clickToggle">
                <span>category</span>
                <v-icon right>mdi-hand-back-left-outline</v-icon>
            </v-btn>
            <v-btn v-if="isAuthenticated" text @click="clickToggle">
                <span>장바구니</span>
                <v-icon right>mdi-hand-back-left-outline</v-icon>
            </v-btn>
            <v-btn v-if="!isAuthenticated" text @click="signUp">
                <span>회원가입</span>
                <v-icon right>mdi-account-plus-outline</v-icon>
            </v-btn>
            <v-btn v-if="!isAuthenticated" text @click="signIn">
                <span>로그인</span>
                <v-icon right>mdi-login</v-icon>
            </v-btn>
            <v-btn v-if="isAuthenticated" text @click="signOut">
                <span>로그아웃</span>
                <v-icon right>mdi-exit-to-app</v-icon>
            </v-btn>
        </v-app-bar>
        
        <v-navigation-drawer app v-model="navigation_drawer">
        <v-list-item>
            <v-list-item-content>
            <v-list-item-title class="text-h6">CLOUD</v-list-item-title>
            <v-list-item-subtitle>LIBRARY</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

      <v-divider></v-divider>

      <!-- 왼쪽에서 등장하는 바 -->
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
          v-for="(link2, index) in links2"
          :key="link2.index"
          router
          :to="link2.route"
        >
          <v-list-item-action>
            <v-icon>
              {{ link2.icon }}
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ link2.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>
    </nav>
</template>

<script>
import router from "@/router";

export default {
    data() {
        return {
            navigation_drawer: false,
            isAuthenticated: false,
            links: [{ icon: "mdi-home", text: "Home", route: "/" }],
            links2: [{ icon: "mdi-apple", text: "Book Category", route: "/" }],
        };
    },
    methods: {
    clickToggle() {
      alert("토글");
        },
        signUp() {
            alert("회원가입");
        },
        signIn() {
            alert("로그인");
        },
        signOut() {
            alert("로그아웃");
        },
        goToHome() {
            alert("홈으로");
            router.go("/");
        },
    }
}
</script>

<style>
.title-button {
  border: solid 2px black;
  color: aliceblue;
}
</style>