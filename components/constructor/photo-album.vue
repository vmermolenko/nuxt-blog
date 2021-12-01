<template>
  <div class="mb-5">
    <v-row
    dflex class="my-1 justify-center" max-width="800" max-height="400"
    >
        <v-col md="3" class="md-3" v-for="(item, idx) in items" :key="idx">

            <v-img :src="item" contain >
            </v-img>

        </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  props: ['items']
}
</script>
