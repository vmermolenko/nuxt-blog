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
    <!-- company name -->
    <v-toolbar-title class="black--text ml-3 text-h5 d-flex align-center">
      Life Is Travel
    </v-toolbar-title>
  </nuxt-link>

  <v-spacer></v-spacer>
  <v-icon class="d-none d-sm-flex">mdi-phone-classic</v-icon>
  <v-toolbar-title class="black--text ml-3  d-none d-sm-flex">
     <a href="tel:+79817816068">+7(981)781-60-68</a>
  </v-toolbar-title>
  <v-btn
    rounded
    class="ml-5  white--text"
    color="primary"
    elevation="2"
    @click="dialog = !dialog"
  >
  Заказать тур
  </v-btn>
  <modal-zakaz v-model="dialog"></modal-zakaz>
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
      dialog: false,
      drawer: false
    }
  }
}
</script>
<style>
   .nuxtLink{text-decoration: none;}
</style>

