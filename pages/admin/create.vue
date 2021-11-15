<template>
  <div>
    <!-- navbar -->
    <v-row>
      <v-card elevation="4" width="100%" class="ma-1 pa-1">
        <v-btn
        @click="$router.push('/admin')"
        color="primary"
        class=" ml-1 my-1"
        >
          к списку туров
        </v-btn>

        <v-btn
        color="primary"
        class="my-1"
        @click="addNewTur"
        >
          сохранить
        </v-btn>
        <v-btn
        color="primary"
        class="my-1"
        @click="$router.push('/')"
        >
          на сайт
        </v-btn>
      </v-card>
    </v-row>

    <v-row >
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
                      <v-file-input

                        class="mt-0"
                        accept="image/png, image/jpeg, image/bmp"
                        placeholder=""
                        prepend-icon="mdi-camera"
                        label="Фото"
                      ></v-file-input>
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

                <v-card-actions  class="justify-center mt-10">
                  <v-btn
                  text
                  color="primary"
                  @click="addComponent"
                  :disabled = !compitemListInput
                  >
                    вставить
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
                <!-- название тура --><!-- главное фото -->
                <v-row class="mx-2 mt-0">
                  <v-col md="8" >
                    <v-text-field
                      v-model="TurTitle"
                      class="pt-0"
                      label="Название тура"
                      hide-details="auto"
                    ></v-text-field>
                  </v-col>
                  <v-col md="4" class="pb-0 pt-1">
                    <v-file-input

                      class="mt-0"
                      accept="image/png, image/jpeg, image/bmp"
                      placeholder=""
                      prepend-icon="mdi-camera"
                      label="Главное фото"
                    ></v-file-input>
                  </v-col>
                </v-row>
                <!-- краткое описание тура 230символов-->
                <v-row class="mx-2 mt-0">
                <v-col class="pb-0 pt-1">
                  <v-textarea
                    v-model="description"
                    counter
                    label="Краткое описание"
                    :rules="rules"
                    :value="value"
                    maxlength="230"
                  ></v-textarea>
                </v-col>
                </v-row>
                <!-- основные характеристики тура -->
                <v-row class="mx-2">
                  <v-col md="4" class="py-0">
                    <v-text-field
                      v-model="group"
                      label="Группа"
                      hide-details="auto"
                    ></v-text-field>
                  </v-col>
                  <v-col md="4" class="py-0">
                    <v-text-field
                      v-model="amount"
                      label="Цена"
                      hide-details="auto"
                    ></v-text-field>
                  </v-col>
                  <v-col md="4" class="py-0">
                    <v-select
                      v-model="type"
                      class="mx-2"
                      :items="category"
                      label="Выбор категории"
                    ></v-select>
                  </v-col>
                </v-row>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
        <!-- контент тура -->
        <v-card elevation="4" class="my-2 pa-2" color="grey">
          <v-card class="mb-3">
            <v-card-title class="py-0">Контент тура <v-spacer></v-spacer><v-btn color="primary" text><span style="font-size:0.8em">предварительный просмотр</span> </v-btn></v-card-title>
            <v-card-text class="py-0">Для заполнения выберите компонент</v-card-text>
          </v-card>
          <v-card elevation="4" class="pa-10 text-center" v-if="content.length===0" height="300">
            <span class="text-h6">Пусто. Вставьте первый компонент</span>
          </v-card>
          <v-card elevation="4" class="pa-3" v-else>
            <div v-for="(item, index) in content" :key="index">
              <v-divider></v-divider>
              <v-row>
                <v-col md="11">
                  <component  :is="item.type"
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
                        @click="MoveUpComponent(item)"
                        >
                        <v-icon color="primary" large>
                        mdi-chevron-up
                        </v-icon>
                        </v-btn>
                      </v-row>

                      <v-row>
                        <v-btn
                        :disabled="index===content.length-1"
                        class="mb-1"
                        text
                        icon
                        @click="MoveDownComponent(item)"
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
  </div>
</template>
<script>
  export default {
    auth : false,
    layout : 'admin',
    head() {
        return {
      title : 'Создание тура'
      }
    },
    data() {
      return {
        TurTitle: '',
        group: '',
        amount: '',
        description: '',
        img: '',
        rules: [v => v.length <= 230 || 'Максимум 230 символов'],
        value: '',
        panel: [0, 1],
        type: '',
        text: '',
        title: '',
        itemListInput: null,
        items: [],
        foto: '',
        nameFoto: '',
        itemsArray: [],
        content: [

        ],
        componentType: null,
        components: [
          {
            text: 'Заголовок по центру',
            value: 'constructor-title-center'
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
          }



          ],
        category: ['Санкт-Петербург', 'Пригород', 'Карелия']
      }
    },
    computed: {
      compitemListInput(){
        return this.itemListInput === null
      },
      compText() {
        return this.componentType ==='constructor-title-center' || this.componentType === 'constructor-text-content' || this.componentType === 'constructor-foto360x240-left-description' || this.componentType === 'constructor-foto360x240-right-description'
      },
      compFoto() {
        return this.componentType ==='constructor-foto360x240-left-description' || this.componentType ==='constructor-foto360x240-right-description' || this.componentType ==='constructor-foto-full876x493' || this.componentType ==='constructor-foto400x711'
      },
      compList() {
        return this.componentType ==='constructor-list'
      },

    },
    watch: {

    },
    methods: {
      addNewTur(){
        const id = Math.floor(Math.random() * 100) + 6 + ''
        const newTur = {
          id: id,
          created: '',
          date: '',
          title: this.TurTitle,
          group: this.group,
          amount: this.amount,
          description: this.description,
          img: this.img,
          type: this.type,
          content: this.content
        }
        this.$store.commit('setTurs', newTur)
      },
      addItemArray(){
        this.itemsArray.push(this.itemListInput)
        this.itemListInput = null
      },
      addComponent() {
        this.content.push(
          {
            type: this.componentType,
            text: this.text,
            title: this.title,
            items: this.itemsArray,
            foto: this.foto,
            nameFoto: this.nameFoto
          }
        )
        this.text = null
        this.title = null
        this.itemsArray = []
        this.foto = null
        this.nameFoto = null
      },
      deleteComponent(item){
        const idx = this.content.indexOf(item)
         this.content.splice(item, 1)
      },
      MoveUpComponent(item){
        const idx = this.content.indexOf(item)
        const ar1 = this.content.slice(0, idx-1)
        const ar2 = this.content.slice(idx, idx+1)
        const ar3 = this.content.slice(idx-1, idx)
        const ar4 = this.content.slice(idx+1)
        this.content=[].concat(ar1,ar2,ar3,ar4)
      },
      MoveDownComponent(item){
        const idx = this.content.indexOf(item)
        const ar1 = this.content.slice(0, idx)
        const ar2 = this.content.slice(idx, idx+1)
        const ar3 = this.content.slice(idx+1, idx+2)
        const ar4 = this.content.slice(idx+2)
        this.content=[].concat(ar1,ar3,ar2,ar4)
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

