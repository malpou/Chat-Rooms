<template>
  <v-app>
    <v-app-bar
      app
      color="secondary"
      dark
    >
      <div class="d-flex align-center">
        <h2>Chat Rooms</h2>

      </div>

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-main>
      <v-container>
       <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App'
};
</script>
