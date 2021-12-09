<template>
<div>

<v-app-bar
  color="grey lighten-5"
  flat
>
  <v-app-bar-nav-icon @click.stop="drawer=!drawer" class="d-flex d-md-none"/>
  <nuxt-link to="/" class="d-flex nuxtLink">
    <!--logo -->
    <!-- :src="require('../assets/img/logo-64.jpeg')" -->

    <v-img
      class="d-none d-sm-flex"
      src="https://bumper-stickers.ru/50498-thickbox_default/sankt-peterburg-razvodnye-mosty.jpg"

      max-width="100"
      contain
    ></v-img>
    <!-- company name -->
    <span class="black--text ml-4 d-flex align-center font-logo font-weight-bold" >
      La Vida Es Viajar
    </span>
  </nuxt-link>

  <v-spacer></v-spacer>

  <v-btn
    class="ml-3  blue--text d-none d-sm-flex elevation-10"
    color="grey lighten-5"
    elevation="10"
    @click="$emit('clickZakaz')"
  >
  reservar un tour
  </v-btn>

  </v-app-bar>

  <v-navigation-drawer v-model="drawer" absolute width="300">

    <fixed-panel class="pt-10"></fixed-panel>

    <v-card elevation="0">
      <v-card-actions class="a justify-center">
      <v-btn
        rounded
        tile
        class="mx-auto  blue--text "
        color="grey lighten-5"
        elevation="10"
        @click="$emit('clickZakaz')"
      >
        reservar un tour
      </v-btn>
      </v-card-actions>
    </v-card>


  </v-navigation-drawer>
</div>

</template>
<script>
export default {
  emits:['clickZakaz'],
  data() {
    return {
      drawer: false,
    }
  },
  methods: {
  },
}
</script>

