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
    rounded
    tile
    class="ml-3  white--text d-none d-sm-flex elevation-5"
    color="black"
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
        class="mx-auto  white--text "
        color="black"
        elevation="5"
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
<style>
@import url('https://fonts.googleapis.com/css2?family=Assistant:wght@300&family=Comforter&family=Merienda&family=Solway&display=swap');
  .nuxtLink{text-decoration: none;}
  .font-logo{
    font-family: 'Merienda', cursive !important;
    color: #2b2b2b;
    text-shadow: 3px 3px 0px rgba(0,0,0,0.1);
    font-size: 25px;
  }
  .elevation-5{
    text-shadow: 2px 2px 2px rgba(37, 34, 190, 0.1);
  }

</style>

