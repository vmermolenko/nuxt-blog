<template>
  <div>
    <v-divider class="mb-5 mt-5"></v-divider>
    <v-app>
      <v-container>
        <v-row>
            <v-col md="12"  >
              <v-card elevation="0" >
                <p class="text-h5 font-weight-bold" style="text-align: center">{{tur.title}}</p>
              <v-img :src="tur.img"  width="100%" contain class="mb-5">
              </v-img>
              <p class="text-h5 font-weight-bold" style="text-align: center">Содержание тура...</p>
              <pre>
                .
                .
                .
                .
                .
                .
                .
                .
                .
                .
                .
                .
                .
                .
                .
                .
                .
                .
              </pre>
                <v-divider

                ></v-divider>
                <v-card-actions  class="justify-center">
                  <v-btn
                    @click="clickZakaz"
                    rounded
                    class="mt-3 mb-5 white--text"
                    color="primary"
                    elevation="1"
                  >
                  <!-- color="indigo darken-4" -->
                  Заказать этот тур
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
        </v-row>
        <v-row class="mb-5">
          <v-col md="12">
            <v-card elevation="5">
              <v-card-title>
                <p class="text-h6 font-weight-bold" style="text-align: left">Другие туры по {{tur.type}}</p>
              </v-card-title>
              <v-row>
                <v-col md=3>


                    <v-img src="https://life-is-travel.ru/wp-content/uploads/2020/11/3tS69Q51TTo-150x150.jpg" class="ml-5">
                    </v-img>


                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
        <v-divider class="mt-7"></v-divider>
      </v-container>

    </v-app>

  </div>
</template>

<script>
export default {
  layout : 'default',
  data() {
    return {
      id: '',
      tur: {}
    }
  },
   methods: {
    clickZakaz() {

      this.$store.commit('setSelectedTur', this.tur.title)
      this.$store.commit('setDialog')
    }
  },
  mounted() {
    this.id = $nuxt._route.params.id
    this.tur = this.$store.state.turs.find(t => t.id === this.id)

  }
}
</script>
