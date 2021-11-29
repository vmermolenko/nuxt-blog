<template>
  <div class="mb-5">

    <v-card width="400" elevation="7" class="mx-auto">
      <v-img :src="foto"  contain >
      </v-img>
    </v-card>
    <v-card v-if="nameFoto" elevation="0" class="mx-auto" width="400">
      <v-card-text class="mx-3 pa-0" style="font-size:0.7em; text-justify:none" >
        {{nameFoto}}
      </v-card-text>
    </v-card>

  </div>
</template>
<script>
export default {
  props: ['foto', 'nameFoto']
}
</script>
