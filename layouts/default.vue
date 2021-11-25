<template>
  <div>
    <v-app >
      <alert v-if="flag"></alert>
      <v-main>
        <v-container>
          <app-navbar></app-navbar>
          <Nuxt />
          <app-footer></app-footer>
        </v-container>
      </v-main>
      <modal-zakaz
        @showAlert="showAlert"
      ></modal-zakaz>
    </v-app>

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



