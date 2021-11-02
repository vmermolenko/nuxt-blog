<template>
<div>
<v-app-bar

        color="white"
        dense
        flat

      >
      <v-app-bar-nav-icon @click.stop="drawer=!drawer" class="d-flex d-md-none"/>
      <nuxt-link to="/" class="d-flex nuxtLink">

<!--logo -->
        <v-img
          class="d-none d-sm-flex"
          :src="require('../assets/img/logo-64.jpeg')"
          max-height="64"
          max-width="64"
          contain
        ></v-img>
<!-- compony name -->
        <v-toolbar-title class="black--text ml-3 text-h5 d-flex align-center">
         Life Is Travel
        </v-toolbar-title>
      </nuxt-link>


        <v-spacer></v-spacer>

        <!-- <v-divider
          vertical
          class="mr-3 d-none d-lg-block"
        ></v-divider> -->

        <v-icon class="d-none d-sm-flex">mdi-phone-classic</v-icon>
        <v-toolbar-title class="black--text ml-3  d-none d-sm-flex">
          +7(981)781-60-68
        </v-toolbar-title>

        <!-- <v-divider
          vertical
          class="ml-3 d-none d-lg-block"
        ></v-divider> -->

        <v-btn
          rounded
          class="ml-5  white--text"
          color="primary"
          elevation="2"
          @click="clickZakaz"
        >
        <!-- color="indigo darken-4" -->
        Заказать тур
        </v-btn>


      </v-app-bar>

       <v-navigation-drawer v-model="drawer" absolute width="280">
        <fixed-panel style="height: 100%"></fixed-panel>
      </v-navigation-drawer>
</div>

</template>
<script>
export default {
  data() {
    return {
drawer: false
    }
  },
  methods: {
    clickZakaz() {
      this.$store.commit('setDialog')
    }
  },

  mounted() {

  },
}
</script>
<style>
   .nuxtLink{text-decoration: none;}
</style>

