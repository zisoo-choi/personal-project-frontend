<template>
  <v-app>
    <navigation-bar-page />
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import NavigationBarPage from './views/navigation/NavigationBarPage.vue'

export default {
  components: {
    NavigationBarPage
  },

  data: () => ({
    //
  }),
};
</script>
