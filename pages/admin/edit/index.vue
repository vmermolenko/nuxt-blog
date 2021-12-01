<template>
  <div>
    <!-- navbar -->
    <validation-observer ref="observer">
      <v-row>
          <v-card width="100%" color="primary" v-if="show">
            <p class="text-center ma-0 text-h5 white--text">
              {{compAction}}
            </p>
          </v-card>
        <v-card elevation="4" width="100%" class="ma-1">
          <v-toolbar dense>
            <v-btn
            @click="$router.push('/admin')"
            color="primary"
            >
            <v-icon
              dark
              left
            >
              mdi-arrow-left
            </v-icon>
              Назад
            </v-btn>
            <v-btn
            class="ml-5"
            color="primary"
            @click="setEditTour"
            >
              Сохранить
            </v-btn>
            <v-spacer></v-spacer>
          </v-toolbar>
        </v-card>
      </v-row>

      <v-row>
        <!-- настройка контента тура(компоненты) -->
        <v-col cols="3" class="pa-1 " >
          <v-card elevation="4"  class="mx-auto justify-center pa-2 " color="grey" height="100%">
            <div class="sticky">
              <!-- Выбор компонента -->
              <v-card class="">
                <v-card-text class="black--text text-center text-h6 pb-0">Компоненты</v-card-text>
                  <v-row class="mx-2 mt-0">
                    <v-col md="12" class=" pa-0">
                      <v-select
                        v-model="componentType"
                        :items="components"
                        item-text="text"
                        item-value="value"
                        label="Выбор компонента"
                      ></v-select>
                    </v-col>
                  </v-row>
              </v-card>
              <!-- Свойства компонентов -->
              <div v-if="componentType">
                <v-card class="mt-5">
                  <v-card-text class="black--text text-center font-weight-bold">Свойства компонентов</v-card-text>
                    <!-- Фото foto-->
                    <v-row class="mx-2 mt-0" v-if="compFoto">
                      <v-col md="12" >
                      <!-- <v-file-input
                        class="mt-0"
                        accept="image/png, image/jpeg, image/bmp"
                        placeholder=""
                        prepend-icon="mdi-camera"
                        label="Фото"
                      ></v-file-input> -->
                        <v-img :src="foto" contain ></v-img>
                        <v-text-field
                          v-model="foto"
                          class="pt-0"
                          label="URL Фото"
                          hide-details="auto"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <!-- Название фото nameFoto-->
                    <v-row class="mx-2 mt-0" v-if="compFoto">
                      <v-col md="12"  class="pt-0">
                        <v-text-field
                          v-model="nameFoto"
                          class="pt-0"
                          label="Название фото"
                          hide-details="auto"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <!-- Текст text-->
                    <v-row class="mx-2 mt-0" v-if="compText">
                      <v-col md="12" >
                        <v-text-field
                          v-model="text"
                          class="pt-0"
                          label="Текст"
                          hide-details="auto"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <!-- Заголовок списка titleList-->
                    <v-row class="mx-2 mt-0" v-if="compList">
                      <v-col md="12" >
                        <v-text-field
                          v-model="title"
                          class="pt-0"
                          label="Заголовок списка"
                          hide-details="auto"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    <!-- Элементы списка itemList-->
                    <v-row class="mx-2 mt-0" v-if="compList">
                      <div width="100" v-if="itemsArray.lenght !== 0">
                        <div v-for="(i, idx) in itemsArray" :key="idx">
                          <item-list :itemListInput="i" ></item-list>
                        </div>
                      </div>
                      <v-col md="10">
                        <v-text-field
                          v-model="itemListInput"
                          class="pt-0"
                          label="Элемент списка"
                          hide-details="auto"
                        ></v-text-field>
                      </v-col>
                      <v-col md="2" >
                            <v-btn
                            @click="addItemArray"
                            text
                            icon>
                              <v-icon color="green">
                                mdi-plus-thick
                              </v-icon>
                            </v-btn>
                      </v-col>
                    </v-row>
                    <!-- Элементы списка фото-->

                    <v-row class="mx-2 mt-0" v-if="compFotoAlbum">
                      <div class="mb-5"><strong>Фото в альбоме:</strong> <span class="blue--text">{{fotoCounter}}</span> </div>
                      <v-col md="10">

                        <v-text-field
                          v-model="itemListFoto"
                          class="pt-0"
                          label="URL фото"
                          hide-details="auto"
                        ></v-text-field>

                      </v-col>
                      <v-col md="2" >
                        <v-btn
                        @click="addFoto"
                        text
                        icon>
                          <v-icon color="green">
                            mdi-plus-thick
                          </v-icon>
                        </v-btn>
                      </v-col>
                    </v-row>
                    <v-img :src="itemListFoto" height="100" class="mt-5" contain ></v-img>
                  <v-card-actions  class="justify-center mt-10">
                    <v-btn
                    text
                    color="primary"
                    @click="addComponent"
                    :disabled = !compIsActive
                    >
                      вставить компонент
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </div>
            </div>

          </v-card>
        </v-col>
        <!-- контент тура -->
        <v-col cols="9" class="pa-1 ">
          <v-card elevation="4" class="mb-2 pa-2" color="grey">
            <v-expansion-panels flat hover tile v-model="panel" multiple>
              <v-expansion-panel v-model="panel">
                <v-expansion-panel-header class="pl-0">
                  <v-card-title class="py-0">Основные характеристики тура</v-card-title>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-card elevation="4" height="100%">
                    <v-row class="mx-2 mt-0">
                      <v-col md="6" >
                        <!-- название тура -->
                        <v-text-field
                          v-model="turEdited.title"
                          class="pt-0 mb-3"
                          label="Название тура"
                          hide-details="auto"
                        ></v-text-field>
                        <!-- краткое описание тура 160символов-->
                        <v-textarea
                          class="mb-3"
                          rows="5"
                          v-model="turEdited.description"
                          counter
                          label="Краткое описание"
                          :rules="rules"
                          :value="value"
                          maxlength="140"
                        ></v-textarea>
                        <v-text-field
                          class="mb-3"
                          v-model="turEdited.team"
                          label="Группа"
                          hide-details="auto"
                        ></v-text-field>
                        <v-text-field
                          class="mb-3"
                          v-model="turEdited.amount"
                          label="Цена"
                          hide-details="auto"
                        ></v-text-field>

                          <validation-provider
                            v-slot="{ errors }"
                            name="turEdited.typetour"
                            rules="required"
                          >
                            <v-select
                              :error-messages="errors"
                              class="mb-3"
                              v-model="turEdited.typetour"
                              :items="category"
                              label="Выбор категории"
                            ></v-select>
                          </validation-provider>
                      </v-col>
                      <!-- главное фото -->
                      <v-col md="6" >
                        <validation-provider
                          v-slot="{ errors }"
                          name="turEdited.img"
                          rules="required"
                        >
                          <v-text-field append
                            :error-messages="errors"
                            v-model="turEdited.img"
                            class="pt-0"
                            label="Главное фото(URL)"
                            hide-details="auto"
                          ></v-text-field>
                        <v-img :src="turEdited.img" contain></v-img>
                        </validation-provider>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card>
          <!-- контент тура --><!-- отображение компонентов -->
          <v-card elevation="4" class="my-2 pa-2" color="grey">
            <v-card class="mb-3">
              <v-card-title class="py-0">Контент тура <v-spacer></v-spacer><v-btn color="primary" text><span style="font-size:0.8em">предварительный просмотр</span> </v-btn></v-card-title>
              <v-card-text class="py-0">Для заполнения выберите компонент</v-card-text>
            </v-card>
            <v-card elevation="4" class="pa-10 text-center" v-if="getLength(turEdited.content) === 0" height="300">
              <span class="text-h6">Пусто. Вставьте первый компонент</span>
            </v-card>
            <v-card elevation="4" class="pa-3" v-else>
              <div v-for="(item, index) in turEdited.content" :key="index">
                <v-divider></v-divider>
                <v-row>
                  <v-col md="11">
                    <component
                      :is="item.type"
                      :text="item.text"
                      :foto="item.foto"
                      :nameFoto="item.nameFoto"
                      :title="item.title"
                      :items="item.items"
                    ></component>
                  </v-col>
                  <v-col md="1">
                    <v-row >
                      <v-col md="6">
                        <v-row>

                          <v-btn
                          :disabled="index===0"
                          class="mt-1"
                          text
                          icon
                          @click="moveUpComponent(item)"
                          >
                          <v-icon color="primary" large>
                          mdi-chevron-up
                          </v-icon>
                          </v-btn>
                        </v-row>

                        <v-row>
                          <v-btn
                          :disabled="index=== getLength(turEdited.content)-1"
                          class="mb-1"
                          text
                          icon
                          @click="moveDownComponent(item)"
                          >
                            <v-icon color="primary" large>
                            mdi-chevron-down
                            </v-icon>
                          </v-btn>
                        </v-row>
                      </v-col>

                      <v-col md="6">
                        <v-row>
                          <v-btn
                          class="mt-1"
                          text
                          icon
                          @click="deleteComponent(item)"
                          >
                          <v-icon color="red">
                          mdi-window-close
                          </v-icon>
                        </v-btn>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
                <v-divider></v-divider>
              </div>
            </v-card>
          </v-card>
        </v-col>
      </v-row>
    </validation-observer>
    <v-btn fab dark fixed medium color="primary" @click="toTop"
    class="v-btn v-btn--bottom v-btn--floating v-btn--fixed v-btn--right theme--dark">
      <v-icon dark>mdi-chevron-up</v-icon>
    </v-btn>

  </div>
</template>
<script>
  import { required } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
  setInteractionMode('eager')
  extend('required', {
    ...required,
    message: 'Заполните поле',
  })

  export default {
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    /*
    async asyncData({ query, redirect }) {
    const turs = await fetch(
      '/api/turs/all'
    ).then((res) => res.json())

    const tour = turs.find(t => t.id == query.id)
      //console.log('tour ' , tour);
      if (tour) {
        return {
          turs: turs,
          turEdited: tour
        }
      } else {
        redirect('/admin')
      }
    },
    */
    auth : true,
    layout : 'admin',
    head() {
      return {
        title : 'Редактирование тура'
      }
    },
    data() {
      return {
        show: true,
        // tur
        turEdited: {
          id: 0,
          datestart: '',
          title: '',
          team: '',
          amount: 0,
          description: '',
          img: '',
          typetour: '',
          typerus: '',
          content: []
        },
        rules: [v => v.length <= 140 || 'Max 140 символов'],
        value: '',
        panel: [0, 1],
        text: '',
        title: '',
        itemListInput: null,
        itemListFoto: null,
        fotoCounter: 0,
        items: [],
        foto: '',
        nameFoto: '',
        itemsArray: [],



        componentType: null,
        components: [

          {
            text: 'Заголовок по центру',
            value: 'constructor-title-center'
          },
          {
            text: 'Заголовок слева',
            value: 'constructor-title-left'
          },
          {
            text: 'Параграф',
            value: 'constructor-paragraf'
          },
          {
            text: 'Текст',
            value: 'constructor-text-content'
          },
          {
            text: 'Фото360x240 + текст слева',
            value: 'constructor-foto360x240-left-description'
          },
          {
            text: 'Фото360x240 + текст справа',
            value: 'constructor-foto360x240-right-description'
          },
          {
            text: 'Список',
            value: 'constructor-list'
          },
          {
            text: 'Фото876x493',
            value: 'constructor-foto-full876x493'
          },
          {
            text: 'Фото400x711',
            value: 'constructor-foto400x711'
          },
          {
            text: 'Фотоальбом',
            value: 'constructor-photo-album'
          },
          {
            text: '5 пустых строк',
            value: 'constructor-empty-row'
          }


        ],
        category: ['San Petersburgo', 'Suburbio', 'Carelia']
      }
    },
    async mounted() {
      await this.$store.dispatch('getAllTours')
      const tour = this.$store.getters.getTours.find(t => t.id ==  this.$route.query.id)
      if (tour) {
        this.turEdited = tour
      } else {
        this.$router.push('/admin')
      }
    },
    computed: {
      compAction() {
        return this.$route.query.id ? 'Редактирование тура' : 'Создание тура'
      },
      // addComponent disabled
      compIsActive(){
        return this.itemListFoto === null && this.itemListInput === null
      },
      compText() {
        return this.componentType ==='constructor-paragraf' ||this.componentType ==='constructor-title-center' || this.componentType ==='constructor-title-left' || this.componentType === 'constructor-text-content' || this.componentType === 'constructor-foto360x240-left-description' || this.componentType === 'constructor-foto360x240-right-description'
      },
      compFoto() {
        return this.componentType ==='constructor-foto360x240-left-description' || this.componentType ==='constructor-foto360x240-right-description' || this.componentType ==='constructor-foto-full876x493' || this.componentType ==='constructor-foto400x711'
      },
      compList() {
        return this.componentType ==='constructor-list'
      },
      compFotoAlbum() {
        return this.componentType ==='constructor-photo-album'
      }

    },
    methods: {
      toTop () {
        this.$vuetify.goTo(0)
      },
      getLength(val){
        //console.log('val: ', val);
        if (val === null){
          return 0
        }
        return val.length
      },
      async setEditTour() {
        const isValid = await this.$refs.observer.validate()
        if(isValid){
          this.$store.dispatch('setTourUpdate', this.turEdited)
        }
      },
      addItemArray(){
        this.itemsArray.push(this.itemListInput)
        this.itemListInput = null
      },
      addFoto(){
        this.itemsArray.push(this.itemListFoto)
        this.itemListFoto = null
        this.fotoCounter +=1
      },
      addComponent() {
        if (this.turEdited.content === null) {
          this.turEdited.content = []
        }
        this.turEdited.content.push(
          {
            type: this.componentType,
            text: this.text,
            title: this.title,
            items: this.itemsArray,
            foto: this.foto,
            nameFoto: this.nameFoto
          }
        )
        this.text = ''
        this.title = ''
        this.itemsArray = []
        this.foto = ''
        this.nameFoto = ''
        this.fotoCounter = 0
      },
      deleteComponent(item){
        const idx = this.turEdited.content.indexOf(item)
        this.turEdited.content.splice(idx, 1)
      },
      moveUpComponent(item){
        const idx = this.turEdited.content.indexOf(item)
        const ar1 = this.turEdited.content.slice(0, idx-1)
        const ar2 = this.turEdited.content.slice(idx, idx+1)
        const ar3 = this.turEdited.content.slice(idx-1, idx)
        const ar4 = this.turEdited.content.slice(idx+1)
        this.turEdited.content=[].concat(ar1,ar2,ar3,ar4)
      },
      moveDownComponent(item){
        const idx = this.turEdited.content.indexOf(item)
        const ar1 = this.turEdited.content.slice(0, idx)
        const ar2 = this.turEdited.content.slice(idx, idx+1)
        const ar3 = this.turEdited.content.slice(idx+1, idx+2)
        const ar4 = this.turEdited.content.slice(idx+2)
        this.turEdited.content=[].concat(ar1,ar3,ar2,ar4)
      }
    },
  }
</script>
<style scoped>
.sticky{
  position: sticky;
  top: 7px;
}
</style>

