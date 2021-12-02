<template>
  <div class="mb-5 ml-3">
    <p class="list-title mb-2">
      {{title}}
    </p>
    <v-row v-for="(item, idx) in items" :key="idx"
    dflex class="my-1"
    >
        <v-badge
          color="blue-grey lighten-1"

          dot
          inline
          left
          class="my-auto"
        >
        <p dflex class="pl-3 list-item my-auto" >
          {{item}}
        </p>
        </v-badge>
    </v-row>
  </div>
</template>
<script>
export default {
  props: ['title', 'items']
}
</script>
<style scoped>
.list-title{
font-family: 'Merienda', cursive !important;
  color: #2b2b2b;
  font-weight: bold;
  font-size: 18px;
}
.list-item{
  font-family: 'Merienda', cursive !important;
  color: #2b2b2b;
  /* font-size: 25px; */
}
</style>
