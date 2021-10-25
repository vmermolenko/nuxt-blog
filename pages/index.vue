<template>
  <div>
    <Header />
    <Navigation />
    <h1>Главная</h1>
    <h1 v-if="$nuxt.isOffline">Мы в офлайне</h1>
  </div>
</template>

<script>
import Header from "~/components/layouts/Header.vue";
import Navigation from "~/components/Navigation.vue";
export default {
  auth : false,
  layout : 'home',
  head :{
    title : 'Главная'
  }
}
</script>
