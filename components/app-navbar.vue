<template>
<div>

<v-app-bar
  color="white"
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
    <v-toolbar-title class="black--text ml-2 d-flex align-center font-logo" >
      La Vida Es Viajar
    </v-toolbar-title>
  </nuxt-link>

  <v-spacer></v-spacer>

  <v-btn
    rounded
    tile
    class="ml-3  blue--text d-none d-sm-flex elevation-5"
    color="white"

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
        color="white"
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
    // showAlert(){
    //   this.flag=!this.flag
    //   setTimeout(()=>{
    //     this.flag=!this.flag
    //   }, 3000)
    // }
  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Assistant:wght@300&family=Comforter&family=Merienda&family=Solway&display=swap');
  .nuxtLink{text-decoration: none;}
  .font-logo{
    font-family: 'Merienda', cursive !important;
    color: #2b2b2b;
    text-shadow: 4px 4px 0px rgba(0,0,0,0.1);
  }
  .elevation-5{
    box-shadow: 0px 3px 3px 1px rgba(22, 25, 220, 0.885), 0px 3px 5px 0px rgba(22, 25, 220, 0.885), 0px 1px 11px 1px rgba(22, 25, 220, 0.885) !important;
  }

</style>

