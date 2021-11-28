<template>
  <div>
    <v-app>
      <alert v-if="flag"></alert>
      <v-main class="mt-4">
        <v-container class="pa-0">
          <app-navbar></app-navbar>
          <Nuxt />
          <app-footer></app-footer>
        </v-container>
      </v-main>
    </v-app>
    <modal-zakaz
    @showAlert="showAlert"
    ></modal-zakaz>
  </div >

</template>
<script>
export default {
  data() {
    return {
      flag: false
    }
  },
  methods: {
    showAlert(){
      this.flag=!this.flag
      setTimeout(()=>{
        this.flag=!this.flag
      }, 3000)
    }
  },
  mounted() {

  },
}
</script>

<style>
html,body, #__nuxt, #__layout{
  height:100%!important;
  width: 100%!important;
}
</style>



