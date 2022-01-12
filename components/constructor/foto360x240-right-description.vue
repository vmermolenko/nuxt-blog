<template>
  <div>
    <p align="justify" style="min-height:270px">
      <v-card class="rightimg"  width="360">
        <v-img :src="foto" contain>
        </v-img>
        <v-card-text v-if="nameFoto!==''" class="mx-3 pa-0" style="font-size:0.7em; text-justify:none" >
          {{nameFoto}}
        </v-card-text>
      </v-card>
      {{text}}
    </p>
  </div>
</template>
<script>
export default {
  props: ['foto', 'nameFoto', 'text']
}
</script>
<style>

</style>
