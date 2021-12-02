<template>
  <div class="mb-5">
    <v-row
    dflex class="my-1 justify-center" max-width="800" max-height="250"
    >

        <v-col md="3" class="md-3" v-for="(item, idx) in items" :key="idx" @click="showDialog(idx)" style="cursor: pointer">

            <v-img :src="item"  max-height="250">
            </v-img>

        </v-col>



    </v-row>

    <v-dialog
      v-model="dialog"

    >
      <v-card>
        <v-img
          max-height="500"
          contain
          :src="items[this.id]"
        >
        </v-img>
      </v-card>
    </v-dialog>

  </div>
</template>
<script>
export default {
  props: ['items'],
  data() {
    return {
      dialog: false,
      id: ''
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
