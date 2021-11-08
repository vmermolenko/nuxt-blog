<template>
<div>
  <v-row justify="center">
    <v-dialog
      v-model="dialogComp"
      persistent
      max-width="600px"
    >
      <v-card>
        <v-card-title>
          <span class="text-h5">Заказ тура</span>
        </v-card-title>

        <validation-observer
          ref="observer"
        >
<v-form form @submit.prevent="submit">
        <v-card-text>
          <v-container class="pt-0">
            <small>*Заполните необходимые поля и мы свяжемся с Вами</small>
<!-- select -->


    <!-- <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="!model"
        color="grey darken-3"
        @click="model = null"
      >
        Clear
        <v-icon right>
          mdi-close-circle
        </v-icon>
      </v-btn>
    </v-card-actions> -->




            <v-row>
              <v-col
                cols="12"
                sm="12"
                md="12"
                class="mt-5"
              >
                <validation-provider
                  v-slot="{ errors }"
                  name="selectComp"
                  rules="required"
                >
                  <v-autocomplete
                    v-model="select"
                    :items="tursComp"
                    label="Выберите тур"
                    :error-messages="errors"
                    required
                  ></v-autocomplete>
                </validation-provider>
              </v-col>
            </v-row>
<!-- date -->
            <v-row>
              <v-col
                md="4"
              >
                <v-menu
                  v-model="menu2"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date"
                      label="Выберите дату тура"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="date"
                    @input="menu2 = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>
            </v-row>

            <v-row>
<!-- name -->
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
              <validation-provider
                v-slot="{ errors }"
                name="Name"
                rules="required"
              >
                <v-text-field
                v-model="name"
                :error-messages="errors"
                  label="Ваше имя"
                  required
                ></v-text-field>
                </validation-provider>
              </v-col>
<!-- Email -->
              <v-col
              cols="12"
              sm="6"
              md="6"
              >
               <validation-provider
                  v-slot="{ errors }"
                  name="email"
                  rules="required|email"
                >
                  <v-text-field
                    v-model="email"
                    :error-messages="errors"
                    label="Email"
                    required
                  ></v-text-field>
                </validation-provider>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="closeDialog"
          >
            Закрыть
          </v-btn>

          <v-btn
            color="blue darken-1"
            text
            type="submit"
          >
            Заказать тур
          </v-btn>

        </v-card-actions>
</v-form>
</validation-observer>
      </v-card>
    </v-dialog>
  </v-row>
  </div>
</template>
<script>
  import { required, digits, email, max, regex } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

  setInteractionMode('eager')

   extend('required', {
    ...required,
    message: 'Заполните поле',
  })
   extend('email', {
    ...email,
    message: 'Введите правильный Email',
  })


  export default {
      components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
      menu2: false,
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      name: '',
      email: '',
      form: {},
      select: ''
    }),
    computed: {
      dialogComp() {
        return this.$store.getters.getDialog
      },
      tursComp() {
        const titles = []
        const turs = this.$store.state.turs.forEach(t => {
          titles.push(t.title)
        });

        return titles
      },
      selectedComp(){
        this.select = this.$store.getters.getSelectedTur
        return this.select
      }

    },
    mounted(){
      this.select = this.selectedComp
    },
    methods: {
      closeDialog() {
        this.$store.commit('setDialog')
      },
      submit () {

        if(this.$refs.observer.validate()){
          this.form = {
            select: this.select,
            date: this.date,
            name: this.name,
            email: this.email
          }
          console.log('отправка формы ',this.form);
        }
        else return
      },
    },
  }
</script>
