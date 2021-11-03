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

<component v-for="item in content" :key="item.type" :is="item.type" :text="item.text"></component>


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
      tur: {},
      content: [
        {type: 'constructor-title-center', text: 'Описание тура'},
        {type: 'constructor-text-content', text: 'Мы привыкли, что императорская семья Романовых- это люди, которые стоят высоко на пьедесталах, мы привыкли смотреть на них снизу вверх. Но, на самом деле, это были не памятники а живые люди. Люди из плоти и крови, люди со своими страстями, бедами и радостями. В рамках этой экскурсии мы будем говорить не о политике, экономике, войнах и революциях, а о людях. Вы узнаете множество весёлых, грустных, шокирующих, трагичных, скандальных историй из личной жизни членов императорской семьи. Я расскажу о том, какой эффект производили события из их жизни на русское общество.'},

        {type: 'constructor-foto-full', text: 'https://life-is-travel.ru/wp-content/uploads/2021/05/%D0%B0%D0%BC%D1%83%D1%802.jpg'},
        {type: 'constructor-foto-description', text: 'Описание фото'},
        {type: 'constructor-foto-full', text: 'https://life-is-travel.ru/wp-content/uploads/2021/02/vvS5ua669Rw-1-576x1024.jpg'},
        {type: 'constructor-foto-description', text: 'Описание фото'},

        {type: 'constructor-text-paragraf', text: 'Во время экскурсии Вы увидите:'},
        {type: 'constructor-list-item', text: 'семь великокняжеских дворцов;'},
        {type: 'constructor-list-item', text: 'четыре здания, связанных с жизнью и смертью Григория Распутина;'},
        {type: 'constructor-list-item', text: 'шесть зданий казарм;'},
        {type: 'constructor-list-item', text: 'первый железнодорожный мост России;'},
        {type: 'constructor-list-item', text: 'места где глубоко любили русский балет и одно место казни;'},
        {type: 'constructor-list-item', text: 'одно место рождения матери вождя мирового пролетариата и два места убийства.'}
      ]
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
