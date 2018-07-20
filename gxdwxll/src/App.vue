<template>
  <div id="app">
    <v-app id="inspire" dark>
      <v-navigation-drawer
      clipped
      fixed
      v-model="drawer"
      app
    >
    <v-list dense>
      <v-list-tile @click="views/Home.vue">
        <router-link to="views/Home.vue"></router-link>
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
      </v-list-tile>

      <v-list-tile @click="views/About.vue">
        <v-list-tile-action>
          <v-icon>info</v-icon>
        </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title> About </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

      <v-list-tile @click="views/contact.vue">
          <v-list-tile-action>
            <v-icon>contact_support</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title> Contact </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

      <v-list-tile @click="views/blog.vue">
          <v-list-tile-action>
            <v-icon>library_books</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title> Blog </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title> " Gxdwxll "</v-toolbar-title>
    </v-toolbar>

    <v-jumbotron>
    <v-container fill-height>
      <v-layout align-center>
        <v-flex>
          <h3 class="display-3">Welcome to the site</h3>

          <span class="subheading">Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae id, ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare assueverit ex eum, ne nam essent vocent admodum.</span>

          <v-divider class="my-3"></v-divider>

          <div class="title mb-3">Check out our newest features!</div>

          <v-btn
            class="mx-0"
            color="primary"
            large
          >
            See more
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>

    
    <v-footer app fixed>
      <span>" Gxdwxll " &copy; 2018</span>
    </v-footer>
  </v-app>
</div>
</template>

<script>

   export default {
    data: () => ({
      drawer: true
    }),
    props: {
      source: String
    }
  }
</script>



<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
