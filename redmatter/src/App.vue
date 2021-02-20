<template>
  <v-app>
  <v-navigation-drawer app>
  </v-navigation-drawer>

  <v-app-bar app>
  </v-app-bar>
  <v-main>
    <v-container fluid>
      <MainWindow></MainWindow>
    </v-container>
  </v-main>

  <v-footer app>
  </v-footer>
</v-app>
</template>

<script>
import MainWindow from './components/MainWindow/index.vue';

export default {
  name: 'App',
  components: {
    MainWindow,
  },
};
</script>
