<template>
  <v-app>
    <navigation-bar-page class="navigation" :isWhiteBackground="isMyPage"/>
    <v-main>
      <router-view/>
    </v-main>
    <footer-page />
  </v-app>
</template>

<script>
import NavigationBarPage from './views/navigation/NavigationBarPage.vue'
import FooterPage from './views/navigation/footer/FooterPage.vue'

import { mapState } from "vuex";
const MemberModule = 'MemberModule';

export default {
  components: {
    NavigationBarPage,
    FooterPage
  },
  data() {
    return {
      isMyPage: false
    };
  },
  computed: {
    ...mapState(MemberModule, ["memberInfo"]),
  },
  watch: {
    $route(to) {
      // 현재 경로가 '/my-page'인지 확인하여 네비게이션 바의 색상을 조정합니다.
      this.isMyPage = to.path === "/my-Page" || to.path === "/management-book";
    }
  },
};
</script>
<style>
.navigation{
  z-index: 999;
}
</style>
