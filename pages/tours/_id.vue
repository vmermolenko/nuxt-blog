<template>
  <div>
    <v-divider class="mb-5 mt-5"></v-divider>
    <v-app>
      <v-container>
        <v-row>
            <v-col md="12"  >
              <v-card elevation="0" >
                <p class="text-h5 font-weight-bold" style="text-align: center">{{ tur.title }}</p>
              <v-img :src="tur.img"  width="100%" contain class="mb-5">
              </v-img>

                <div v-if="tur.content">
                  <component v-for="item in tur.content" :key="item.id" :is="item.type"
                  :text="item.text"
                  :foto="item.foto"
                  :nameFoto="item.nameFoto"
                  :title="item.title"
                  :items="item.items"
                  ></component>
                </div>
                <v-card-text font-size=8px class="black--text" style="align-items: center">
                  <v-icon class="mx-2" color="primary">mdi-account-group-outline</v-icon> : {{ tur.team }}
                </v-card-text>

                <v-card-text font-size=8px class=" black--text pt-0">
                <v-icon class="mx-2" color="primary">mdi-currency-usd</v-icon> : {{ tur.amount }}
                </v-card-text>

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

          <v-row>
            <v-col md="12">
                  <p class="mb-0 text-h6 font-weight-bold" style="text-align: left">Другие туры по выбранным категориям:</p>
            </v-col>
          </v-row>

          <v-row>
            <v-col md=3 class="pa-2" v-for="(turRandom, index) in filteredTursRandomComp" :key="index">
              <v-card v-if="turRandom.id"
                elevation="10"
                height="100%"
              >
                <v-card-text font-size=8px class="pa-1 pl-4 white--text text-no-wrap primary">
                    {{turRandom.typetour}}
                </v-card-text>
                <v-img
                contain

                :src="turRandom.img"
                >
                </v-img>

                <v-card-text font-size=8px class="pa-1 black--text" style="height:40px">
                  {{turRandom.title}}
                </v-card-text>

                <v-card-actions class="a justify-center" @click="$router.push(`/tours/${turRandom.id}`)">
                  <v-btn class="mb-5"
                    rounded
                    color="primary"
                    text
                  >
                    Посмотреть тур
                  </v-btn>
                </v-card-actions>

              </v-card>
            </v-col>
          </v-row>

        <v-divider class="mt-7"></v-divider>
      </v-container>
      <v-btn
        @click="toTop"
        fab
        dark
        fixed
        medium
        color="primary"
        class="v-btn v-btn--bottom v-btn--floating v-btn--fixed v-btn--right theme--dark">
        <v-icon dark>mdi-chevron-up</v-icon>
      </v-btn>
    </v-app>
  </div>
</template>

<script>
export default {
  /*
  async asyncData({ params, redirect }) {

    let url = process.env.baseURL + '/api/turs/all'

    const turs = await fetch(url).then((res) => res.json())

    const tour = turs.find(t => t.id == params.id)

    if (tour) {
      return {
        turs: turs,
        tur2: tour
      }
    } else {
      redirect('/')
    }
  },
 */
  auth : false,
  layout : 'default',
  head() {
    return {
      title : this.tur.title
    }
  },
  data() {
    return {
      tur: {
        id : 0,
        datestart : '',
        title: '',
        team: '',
        amount: 0,
        description: '',
        img: '',
        typetour: '',
        typerus:'',
        content: {}
      }
    }
  },
  computed: {

    // tur5(){
    //   console.log(this.$store.getters.getTours.find(t => t.id ==  this.$route.params.id));
    //   return this.$store.getters.getTours.find(t => t.id ==  this.$route.params.id)
    // },
    filteredTursRandomComp() {
      return this.$store.getters.getFilteredTursRandom
    }
  },
  methods: {
    clickZakaz() {
      this.$store.commit('setDialog')
    },
      toTop () {
      this.$vuetify.goTo(0)
    }
  },
  async mounted() {
    await this.$store.dispatch('getAllTours')
    this.tur = this.$store.getters.getTours.find(t => t.id ==  this.$route.params.id)

    this.$store.commit('setTurForZakaz', this.tur.title)
    this.$store.commit('setFilteredTursRandom')
  },
}
</script>

