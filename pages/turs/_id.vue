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


      <!-- <p><img :src="tur.img" class="leftimg">
     Вчера во время проведения разведоперации наша группа подверглась нападению неизвестного
     противника в камуфляжной форме Алиенов. В результате эффективной обороны и стремительной
     контратаки многочисленная группа боевиков была смята и отброшена. Среди личного состава
     потерь нет. Бойцы разведгруппы проявили недюжие навыки владения оружием. Особо отличился
     в бою взводный Кудряшев&nbsp;М.А., грамотно использовавший человеческие ресурсы
     своего взвода. В результате операции были захвачены элементы внеземной культуры, которые
     переданы аналитической группе.</p>

     <p><img :src="tur.img" alt="Учёные, находящиеся в состоянии аффекта" class="rightimg">
     В наших секретных лабораториях в рамках проекта &laquo;Пандора&raquo; разрабатывалось
     психотропное оружие. В результате неудачного эксперимента большинство ученых, работавших
     над прибором, подверглись воздействию психотропного излучения, и они, находясь в состоянии
     аффекта, растащили прототип по деталям. Возможно, наши ученые до сих пор находятся в
     состоянии аффекта.</p> -->

                <component v-for="item in content" :key="item.id" :is="item.type"
                :text="item.text"
                :foto="item.foto"
                :nameFoto="item.nameFoto"
                :title="item.title"
                :items="item.items"
                ></component>

                <v-card-text font-size=8px class="black--text" style="align-items: center">
                  <v-icon class="mx-2" color="primary">mdi-account-group-outline</v-icon> : {{tur.group}}
                </v-card-text>

                <v-card-text font-size=8px class=" black--text pt-0">
                <v-icon class="mx-2" color="primary">mdi-currency-usd</v-icon> : {{tur.amount}}
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
                    {{turRandom.type}}
                </v-card-text>
                <v-img
                contain

                :src="turRandom.img"
                >
                </v-img>

                <v-card-text font-size=8px class="pa-1 black--text" style="height:40px">
                  {{turRandom.title}}
                </v-card-text>

                <v-card-actions class="a justify-center" @click="$router.push(`/turs/${turRandom.id}`)">
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
   auth : false,
  layout : 'default',
  head() {
      return {
    title : this.tur.title
    }
  },
  data() {
    return {
      id: '',
      tur: {},
      content: [

      ],

    }
  },
  computed: {
    // selectedCategoryComp(){
    //   return this.$store.getters.SelectedCategory
    // },
    filteredTursRandomComp() {
      return this.$store.getters.getFilteredTursRandom
    },
  },
   methods: {
    clickZakaz() {
      this.$store.commit('setDialog')
    },
      toTop () {
      this.$vuetify.goTo(0)
    }
  },
  mounted() {



    this.id = $nuxt._route.params.id

    this.tur = this.$store.state.turs.find(t => t.id === this.id)
    this.content=this.tur.content
    console.log(this.tur);
    this.$store.commit('setTurForZakaz', this.tur.title)
    this.$store.commit('setFilteredTursRandom')

  }
}
</script>

