<template>
<div>
  <v-row justify="center">
    <v-dialog
      v-model="dialogComp"
      max-width="600px"
    >
      <v-card>
        <v-card-title>
          <span class="text-h5">Заказ тура</span>
          <v-spacer></v-spacer>
          <v-icon
          @click="closeDialog"
          right>
            mdi-close-circle
          </v-icon>
        </v-card-title>

        <validation-observer
          ref="observer"
        >
          <v-form form @submit.prevent="submit">
            <v-card-text class="pt-0">
              <v-container class="pt-0">
                <small>*Заполните необходимые поля и мы с Вами свяжемся</small>
    <!-- select tur -->
                <v-row>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                    class="mt-5"
                  >
                    <validation-provider
                      v-slot="{ errors }"
                      name="select"
                      rules="required"
                    >
                      <v-autocomplete
                        v-model="selectComp"
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
    <!-- name .. email -->
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
                type="submit"

              >
              <!-- :disabled="invalid" -->
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
    emits: ['showAlert'],
    data: () => ({
      menu2: false,
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      name: '',
      email: '',
      form: {},
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
      selectComp(){
        return this.$store.getters.getTurForZakaz
      }

    },
    mounted(){

    },
    methods: {
      closeDialog() {
        this.$store.commit('setDialog')
      },
      async submit () {

        const isValid = await this.$refs.observer.validate()
        if(isValid){
          this.form = {
            select: this.selectComp,
            date: this.date,
            name: this.name,
            email: this.email
          }

          this.$store.commit('setDialog')
          this.$emit('showAlert')

          console.log('отправка формы ',this.form);
        }

      },
    },
  }
</script>
