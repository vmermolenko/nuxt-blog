<template>
  <div>
    <v-divider class="mb-5 mt-5"></v-divider>
    <v-app>
      <v-container>
        <v-row>
            <v-col md="12"  >
              <v-card elevation="0" >
                <p class="text-h5 font-weight-bold" style="text-align: center">{{tur.title}}</p>
              <!-- <v-img :src="tur.img"  width="100%" contain class="mb-5">
              </v-img> -->


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
                    {{turRandom.typeRus}}
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
        {
          id: 1,
          type: 'constructor-title-center',
          text: 'Заголовок'
        },
        {
          id: 2,
          type: 'constructor-text-content',
          text: 'Мы привыкли, что императорская семья Романовых- это люди, которые стоят высоко на пьедесталах, мы привыкли смотреть на них снизу вверх. Но, на самом деле, это были не памятники а живые люди. Люди из плоти и крови, люди со своими страстями, бедами и радостями. В рамках этой экскурсии мы будем говорить не о политике, экономике, войнах и революциях, а о людях. Вы узнаете множество весёлых, грустных, шокирующих, трагичных, скандальных историй из личной жизни членов императорской семьи. Я расскажу о том, какой эффект производили события из их жизни на русское общество.'
        },
        {
          id: 3,
          type: 'constructor-list',
          title: 'Во время экскурсии Вы увидите:',
          items: [
            'семь великокняжеских дворцов;',
            'четыре здания, связанных с жизнью и смертью Григория Распутина;',
            'шесть зданий казарм;',
            'первый железнодорожный мост России;',
            'места где глубоко любили русский балет и одно место казни;',
            'одно место рождения матери вождя мирового пролетариата и два места убийства.'
          ]
        },
        {
          id: 4,
          type: 'constructor-foto360x240-left-description',
          foto: 'https://life-is-travel.ru/wp-content/uploads/2021/05/oPxNz_PIoak-360x240.jpg',
          nameFoto: 'имя фото',
          text: 'Мы привыкли, что императорская семья Романовых- это люди, которые стоят высоко на пьедесталах, мы привыкли смотреть на них снизу вверх. Но, на самом деле, это были не памятники а живые люди. Люди из плоти и крови, люди со своими страстями, бедами и радостями. В рамках этой экскурсии мы будем говорить не о политике, экономике, войнах и революциях, а о людях. Вы узнаете множество весёлых, грустных, шокирующих, трагичных, скандальных историй из личной жизни членов императорской семьи. Я расскажу о том, какой эффект производили события из их жизни на русское общество.Мы привыкли, что императорская семья Романовых- это люди, которые стоят высоко на пьедесталах, мы привыкли смотреть на них снизу вверх. Но, на самом деле, это были не памятники а живые люди. Люди из плоти и крови, люди со своими страстями, бедами и радостями. В рамках этой экскурсии мы будем говорить не о политике, экономике, войнах и революциях, а о людях. Вы узнаете множество весёлых, грустных, шокирующих, трагичных, скандальных историй из личной жизни членов императорской семьи. Я расскажу о том, какой эффект производили события из их жизни на русское общество'
        },
        {
          id: 5,
          type: 'constructor-title-center',
          text: 'Заголовок'
        },
        {
          id: 6,
          type: 'constructor-foto360x240-right-description',
          foto: 'https://life-is-travel.ru/wp-content/uploads/2021/05/oPxNz_PIoak-360x240.jpg',
          nameFoto: 'имя фото',
          text: 'Мы привыкли, что императорская семья Романовых- это люди, которые стоят высоко на пьедесталах, мы привыкли смотреть на них снизу вверх. Но, на самом деле, это были не памятники а живые люди. Люди из плоти и крови, люди со своими страстями, бедами и радостями. В рамках этой экскурсии мы будем говорить не о политике, экономике, войнах и революциях, а о людях. Вы узнаете множество весёлых, грустных, шокирующих, трагичных, скандальных историй из личной жизни членов императорской семьи. Я расскажу о том, какой эффект производили события из их жизни на русское общество.Мы привыкли, что императорская семья Романовых- это люди, которые стоят высоко на пьедесталах, мы привыкли смотреть на них снизу вверх. Но, на самом деле, это были не памятники а живые люди. Люди из плоти и крови, люди со своими страстями, бедами и радостями. В рамках этой экскурсии мы будем говорить не о политике, экономике, войнах и революциях, а о людях. Вы узнаете множество весёлых, грустных, шокирующих, трагичных, скандальных историй из личной жизни членов императорской семьи. Я расскажу о том, какой эффект производили события из их жизни на русское общество'
        },
        {
          id: 7,
          type: 'constructor-foto-full876x493',
          foto: 'https://life-is-travel.ru/wp-content/uploads/2021/05/%D0%B0%D0%BC%D1%83%D1%802.jpg',
          nameFoto: 'имя фото',
        },
        {
          id: 8,
          type: 'constructor-foto400x711',
          foto: 'https://life-is-travel.ru/wp-content/uploads/2021/02/vvS5ua669Rw-1-576x1024.jpg',
          nameFoto: 'имя фото',
        },
        {
          id: 9,
          type: 'constructor-text-content',
          text: 'Мы привыкли, что императорская семья Романовых- это люди, которые стоят высоко на пьедесталах, мы привыкли смотреть на них снизу вверх. Но, на самом деле, это были не памятники а живые люди. Люди из плоти и крови, люди со своими страстями, бедами и радостями. В рамках этой экскурсии мы будем говорить не о политике, экономике, войнах и революциях, а о людях. Вы узнаете множество весёлых, грустных, шокирующих, трагичных, скандальных историй из личной жизни членов императорской семьи. Я расскажу о том, какой эффект производили события из их жизни на русское общество.'
        },

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
    this.$store.commit('setTurForZakaz', this.tur.title)
    this.$store.commit('setFilteredTursRandom')

    console.log('randomItems',this.filteredTursRandomComp);
  }
}
</script>

