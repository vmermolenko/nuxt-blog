<template>
  <div>

    <v-app id="inspire">
      <v-divider class="mb-5 mt-5"></v-divider>
      <p class="text-h5 font-weight-bold" style="text-align: center">Индивидуальные туры по Санкт-Петербургу и Карелии</p>

      <p align="justify" class="pa-2">
        Lorem ipsum dem temporibus aliquam et assumenda cupiditate quasi? Omnis in eaque explicabo est reprehenderit? Non vel sequi vitae iure quia dolorem voluptates libero sapiente in aspernatur officiis, nihil molestiae maiores ipsam, laborum cum laboriosam ullam consequuntur quisquam cupiditate modi perferendis iste, a labore? Facilis officiis totam, vero voluptatem incidunt nobis magni reprehenderit, tempore distinctio assumenda exercitationem deserunt, dignissimos omnis aliquid deleniti. Consequatur sint inventore nisi magni facilis! Porro, quidem illum amet officia veniam, rem nostrum aperiam vitae exercitationem tenetur corporis excepturi repellat sed eveniet sapiente repellendus voluptas architecto pariatur.
      </p>

      <v-row >
        <!-- fixed panel -->
        <v-col md="3" class="d-none  d-sm-none d-md-flex">
        <fixed-panel ></fixed-panel>
        </v-col>

        <!-- list turs -->

        <v-col md="9">
          <v-row >
            <v-col  v-for="tur in filterTurs" :key="tur.id" md="6">
              <v-card
                elevation="10"
                height="100%"
              >
                <v-card-text font-size=8px class="pa-1 pl-4 white--text text-no-wrap primary">
                    {{tur.type}}
                </v-card-text>
                <v-img
                contain

                :src="tur.img"
                >
                </v-img>

                <v-card-title font-size=14px style="padding-bottom: 0px; height:90px" class="pt-0" >
                  {{tur.title}}
                </v-card-title>

                <v-card-text font-size=8px class="black--text" style="align-items: center">
                  <v-icon class="mx-2" color="primary">mdi-account-group-outline</v-icon> : {{tur.group}}
                </v-card-text>

                <v-card-text font-size=8px class=" black--text pt-0">
                <v-icon class="mx-2" color="primary">mdi-currency-usd</v-icon> : {{tur.amount}}
                </v-card-text>

                <v-card-text align="justify" style="height:100px" class="py-0">
                  {{tur.description}}
                </v-card-text>
<!-- @click="$store.commit('setFilteredTursRandom', filterTurs)" -->
                <v-card-actions class="a justify-center">
                  <v-btn class="mb-5"
                    rounded
                    color="primary"
                    text

                  >
                    <NuxtLink :to="`turs/${tur.id}`" class="link">Посмотреть тур</NuxtLink>
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
  head :{
    title : 'Главная'
  },
  name: 'House',
  data() {
    return {
      drawer: false,
      turs: []
    }
  },
  methods: {
    toTop () {
      this.$vuetify.goTo(0)
    }
  },
  mounted() {
    this.turs = this.$store.getters.getTurs
    this.$store.commit('setTurForZakaz', '')
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
        return this.turs
      }
      return this.turs.filter(t => this.getFilters.includes(t.type))
    },

  }
}
</script>
<style>
.link{text-decoration:none;}
</style>
