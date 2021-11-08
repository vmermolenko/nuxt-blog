<template>
  <div>
    <v-app>
      <v-main class="mt-4">
        <v-container class="pa-0">
          <app-navbar></app-navbar>

          <Nuxt />
          <app-footer></app-footer>
        </v-container>
      </v-main>
    </v-app>
    <modal-zakaz />
  </div >

</template>



