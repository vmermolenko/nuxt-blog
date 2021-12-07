<template>
  <div class="mb-5">

    <v-row
    dflex class="my-1 justify-center" max-width="800" max-height="250"
    >
      <v-col md="3" class="md-3" v-for="(item, idx) in items" :key="idx" style="cursor: pointer">
        <v-img :src="item" height="250" @click="index = idx"></v-img>
      </v-col>
    </v-row>

    <client-only placeholder="Loading...">
      <vue-gallery-slideshow :images="items" :index="index" @close="index = null" />
    </client-only>

  </div>
</template>
<script>
export default {
  props: ['items'],
  data() {
    return {
      index: null
    }
  },
  methods: {
    showDialog(id) {
      this.dialog=!this.dialog
      this.id=id
    }
  },
}
</script>
