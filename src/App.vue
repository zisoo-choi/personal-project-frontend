<template>
  <v-app>
    <navigation-bar-page class="navigation"/>
    <v-main>
      <router-view/>
    </v-main>
    <footer-page />
  </v-app>
</template>

<script>
import NavigationBarPage from './views/navigation/NavigationBarPage.vue'
import FooterPage from './views/navigation/footer/FooterPage.vue'

export default {
  components: {
    NavigationBarPage,
    FooterPage
  },

  data: () => ({
    //
  }),
};
</script>
<style>
.navigation{
  z-index: 999;
}
</style>
