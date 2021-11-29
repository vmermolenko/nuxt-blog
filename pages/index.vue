<template>
  <div>
    <v-app id="inspire">
      <v-divider class="mb-5 mt-5"></v-divider>
      <p class="pa-2 text-h5 font-weight-bold" style="text-align: center">Индивидуальные туры по Санкт-Петербургу и Карелии</p>

      <p align="justify" class="px-0">
        Lorem ipsum dem temporibus aliquam et assumenda cupiditate quasi? Omnis in eaque explicabo est reprehenderit? Non vel sequi vitae iure quia dolorem voluptates libero sapiente in aspernatur officiis, nihil molestiae maiores ipsam, laborum cum laboriosam ullam consequuntur quisquam cupiditate modi perferendis iste, a labore? Facilis officiis totam, vero voluptatem incidunt nobis magni reprehenderit, tempore distinctio assumenda exercitationem deserunt, dignissimos omnis aliquid deleniti. Consequatur sint inventore nisi magni facilis! Porro, quidem illum amet officia veniam, rem nostrum aperiam vitae exercitationem tenetur corporis excepturi repellat sed eveniet sapiente repellendus voluptas architecto pariatur.
      </p>

      <v-row >
        <!-- fixed panel -->
        <v-col md="3" class="d-none  d-sm-none d-md-flex">
          <v-row >
            <v-col  md="12" class="pa-2">
              <fixed-panel></fixed-panel>
            </v-col>
          </v-row>
        </v-col>

        <!-- list tours -->
        <loader class="my-auto mx-auto" v-if="filterTurs.length===0" />

        <v-col md="9" v-else>
          <v-row >
            <v-col  v-for="tur in filterTurs" :key="tur.id" md="6" class="pa-2">
              <v-card
                elevation="10"
                height="100%"
              >
                <!-- <v-card-text  class="pa-1 pl-4 text-h6 white--text text-no-wrap primary">
                    {{tur.typetour}}
                </v-card-text> -->
                <v-img

                height="260"
                :src="tur.img"
                >
                  <v-card-text elevation="10" class="text-h4 pa-1 pl-4 white--text shadow">
                    <strong>
                      {{tur.typetour}}
                    </strong>
                </v-card-text>
                </v-img>

                <v-card-title style="padding-bottom: 0px; height:70px; font-size:20px" class="pt-0" >
                  {{tur.title}}


                </v-card-title>

                <v-divider></v-divider>

                <v-card-text  class="black--text pa-1 pl-3" style="align-items: center">
                  <v-icon class="mx-2" color="primary">mdi-account-group-outline</v-icon> : &nbsp; <strong> {{tur.team}} </strong>
                </v-card-text>

                <v-card-text class=" black--text pa-1 pl-3">
                <v-icon class="mx-2" color="primary">mdi-currency-usd</v-icon> : &nbsp; <strong> {{tur.amount}} </strong>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-text align="justify" style="height:100px" class="py-0 pt-2">
                  {{tur.description}}
                </v-card-text>
                <v-card-actions class="a justify-center">
                  <v-btn class="mb-3"
                    rounded
                    color="primary"
                    text

                  >
                    <NuxtLink :to="`tours/${tur.id}`" class="link"><strong>Посмотреть тур</strong></NuxtLink>
                  </v-btn>
                </v-card-actions>

              </v-card>
            </v-col>
          </v-row>
        </v-col>

      </v-row>
      <v-btn fab dark fixed medium color="primary" @click="toTop"
      class="v-btn v-btn--bottom v-btn--floating v-btn--fixed v-btn--right theme--dark">
        <v-icon dark>mdi-chevron-up</v-icon>
      </v-btn>

      <v-divider class="mt-7"></v-divider>

    </v-app>
  </div>
</template>

<script>
export default {
  auth : false,
  layout : 'default',
  head() {
    return {
      title : 'Главная'
    }
  },
  name: 'House',
  data() {
    return {
      drawer: false,
    }
  },
  methods: {
    toTop () {
      this.$vuetify.goTo(0)
    }
  },
  async mounted() {
    await this.$store.dispatch('getAllTours')
  },
  computed: {
    turForZakaz(){
      return this.$store.getters.getTurForZakaz
    },
    getFilters() {
      return this.$store.getters.SelectedCategory
    },
    filterTurs() {
      if (this.getFilters.indexOf('all')  >= 0 ) {
        return this.$store.getters.getTours
      }
      return this.$store.getters.getTours.filter(t => this.getFilters.includes(t.typetour))
    },

  }
}
</script>
<style>
.link {
  text-decoration:none;

}
[v-cloak] {
  display: none!important;
}
.shadow {
  text-shadow: 1px 3px 2px black, 0 0 0.5em orange; /* Параметры тени */
  }
</style>
