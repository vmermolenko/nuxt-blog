<template>
  <div>
    <v-app >
      <alert v-if="flag"></alert>
      <modal-zakaz
        v-model="dialog"
        @showAlert="showAlert"
        :TurForZakaz="null"
      >
      </modal-zakaz>
      <v-main>
        <v-container>
          <app-navbar @clickZakaz="dialog=!dialog"></app-navbar>
          <Nuxt />
          <app-footer></app-footer>
        </v-container>
      </v-main>
    </v-app>

  </div >

</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      flag: false,
    }
  },
  computed: {

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



