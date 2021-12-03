<template>
  <div>
    <v-app >
      <alert v-if="flag" :message="alertMessage"></alert>
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
      alertMessage: ''
    }
  },
  computed: {

  },
  methods: {
    showAlert(data){
      this.flag=!this.flag
      this.alertMessage = data
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



