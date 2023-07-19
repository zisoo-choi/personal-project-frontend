<template>
  <v-app>
    <navigation-bar-page />
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
