<template>
  <div>
    <v-divider class="mb-5"></v-divider>
    <v-app>

      <alert v-if="flag" :message="alertMessage"></alert>
      <modal-zakaz
        v-model="dialog"
        @showAlert="showAlert"
        :TurForZakaz="this.tur.title"
      >
      </modal-zakaz>
      <v-container >

        <loader class="my-auto mx-auto" v-if="tur.img===''" />

        <div v-else>
          <v-card  elevation="1" class="pr-0">
            <v-row class="mb-10 pa-0 ma-0">

                <v-col md="7" class="pa-0">

                    <v-img :src="tur.img">
                    </v-img>
                </v-col>

                <v-col md="5" class="pr-0">
                  <p class="pa-2 font-weight-bold title-card-font" >{{tur.typetour}}: {{ tur.title }}</p>
                  <v-card-text font-size=8px class="black--text pl-2">
                    <v-icon class="mr-2" color="black">mdi-account-group-outline</v-icon> <strong>grupo :</strong>  &nbsp;  {{ tur.team }}
                  </v-card-text>

                  <v-card-text font-size=8px class=" black--text pt-0 pl-2">
                    <v-icon class="mr-2" color="black">mdi-currency-usd</v-icon><strong>precio :</strong>  &nbsp;  {{ tur.amount }}
                  </v-card-text>
                </v-col>

            </v-row>
          </v-card>
          <v-card elevation="1" class="pa-2">
            <p class="title-font" style="text-align: center">Programa de la gira:</p>

            <div v-if="tur.content">
              <component v-for="item in tur.content" :key="item.id" :is="item.type"
              :text="item.text"
              :foto="item.foto"
              :nameFoto="item.nameFoto"
              :title="item.title"
              :items="item.items"
              ></component>
            </div>

          </v-card>

          <v-row>
            <v-col>
              <v-card-actions  class="justify-center">
                <v-btn
                  @click="clickZakaz"
                  class="ml-3 mt-3 blue--text"
                  color="grey lighten-5"
                  elevation="10"
                >
                reservar este tour
                </v-btn>
              </v-card-actions>

              <v-divider class="my-7"></v-divider>

            </v-col>
          </v-row>

          <!-- similar random tours -->
          <v-row>
            <v-col md="12">
              <p class="pl-2 font-weight-bold title-card-font my-0 py-0" >Otros tours: </p>
            </v-col>
          </v-row>
          <v-row>
            <v-col md=3 class="pa-0" v-for="(turRandom, index) in filteredTursRandomComp" :key="index">
              <v-card-actions class="card-link justify-center" @click="$router.push(`/tours/${turRandom.id}`)">

              <v-card v-if="turRandom.id"
                elevation="10"
                height="100%"
              >
                <v-img

                height="150"
                :src="turRandom.img"
                >
                <v-card-text elevation="10" class=" pa-1 pl-4 white--text shadow" style="font-size: 16px">
                    <strong>
                      {{turRandom.typetour}}
                    </strong>
                </v-card-text>
                </v-img>

                <v-card-text font-size=8px class="pa-1 black--text" style="height:80px">
                  {{turRandom.title}}
                </v-card-text>




              </v-card>

              </v-card-actions>
            </v-col>
          </v-row>

        </div>

        <v-divider class="mt-7"></v-divider>
      </v-container>

      <v-btn
        @click="toTop"
        fab
        dark
        fixed
        medium
        color="grey lighten-5"
        class="v-btn v-btn--bottom v-btn--floating v-btn--fixed v-btn--right theme--dark">
        <v-icon dark color="black">mdi-chevron-up</v-icon>
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
      },
      dialog: false,
      flag: false,
    }
  },
  computed: {

    // tur5(){
    //   console.log(this.$store.getters.getTours.find(t => t.id ==  this.$route.params.id));
    //   return this.$store.getters.getTours.find(t => t.id ==  this.$route.params.id)
    // },
    filteredTursRandomComp() {
      const id = this.$route.params.id
      const arr = this.$store.getters.getTours.filter(t => t.id != id)
      const randomItems = []
      for(let i = 0; i < 4 ; i++){
        const item = arr[Math.floor(Math.random() * arr.length)]
        randomItems.push(item || {})
        arr.splice(arr.indexOf(item), 1)
      }
      return randomItems
    }
  },
  methods: {
    showAlert(data){
      this.flag=!this.flag
      this.alertMessage = data
      setTimeout(()=>{
        this.flag=!this.flag
      }, 3000)
    },
    clickZakaz() {
      this.dialog = !this.dialog
    },
    toTop () {
      this.$vuetify.goTo(0)
    }
  },
  async mounted() {
    await this.$store.dispatch('getAllTours')

    const tour = this.$store.getters.getTours.find(t => t.id ==  this.$route.params.id)

    if (tour) {
      this.tur = tour
    } else {
      this.$router.push('/')
    }


  },
}
</script>


