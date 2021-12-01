<template>
  <div>
    <v-divider class="mb-5 mt-5"></v-divider>
    <v-app>
      <v-container >
        <v-card>Как с нами связаться</v-card>
        <a class="ml-3  d-none d-sm-flex nuxtLink  black--text" href="tel:+79817816068">
          <v-icon class="deep-purple--text d-none d-sm-flex mr-3">mdi-phone-classic</v-icon>
          +7(981)781-60-68
        </a>
        <v-divider class="mt-7"></v-divider>
      </v-container>
    </v-app>
  </div>
</template>
<script>
export default {
  auth : false
}
</script>
