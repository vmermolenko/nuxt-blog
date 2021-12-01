<template>
<div>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      max-width="800px"
    >
      <v-card>
        <v-card-title class="pb-0">
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
          <form ref="form" @submit.prevent="sendEmail">
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
                    <div v-if="TurForZakaz">
                      <v-card-text class="pl-0 py-0 text-caption primary--text">Выбранный тур</v-card-text>
                      <v-card-title  class="pl-0 py-0">{{TurForZakaz}}</v-card-title>
                    </div>
                    <validation-provider v-else
                      v-slot="{ errors }"
                      name="select"
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
                <v-row class="my-0">
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
                          label="Выберите дату тура*"
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
                    class="py-0"
                  >
                    <validation-provider
                      v-slot="{ errors }"
                      name="Name"
                      rules="required"
                    >
                      <v-text-field
                      v-model="name"
                      :error-messages="errors"
                      label="Name*"
                      required
                      ></v-text-field>
                    </validation-provider>
                  </v-col>
                  <!-- Email -->
                  <v-col
                  cols="12"
                  sm="6"
                  md="6"
                  class="py-0"
                  >
                    <validation-provider
                        v-slot="{ errors }"
                        name="Email*"
                        rules="required|email"
                      >
                        <v-text-field
                          v-model="email"
                          :error-messages="errors"
                          label="Email*"
                          required
                        ></v-text-field>
                    </validation-provider>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-textarea
                      class="mb-3"
                      rows="3"
                      v-model="message"
                      counter
                      label="Message"
                    ></v-textarea>
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
                Заказать тур
              </v-btn>

            </v-card-actions>
          </form>
        </validation-observer>
      </v-card>
    </v-dialog>
  </v-row>
</div>
</template>
<script>
  import emailjs from 'emailjs-com';
  import{ init } from 'emailjs-com';
  init("user_VAhdS8kJOg8ogyDaT9FNI");

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
    props: ['value','TurForZakaz'],
    data: () => ({
      menu2: false,
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      name: '',
      email: '',
      select: '',
      message: ''
    }),
    computed: {
      dialog: {
        get() {
          return this.value;
        },
        set(val) {
          this.$emit('input', val);
        }
      },
      tursComp() {
        const titles = []
        this.$store.getters.getTours.forEach(t => {
          titles.push(t.title)
        });
        return titles
      },
    },
    methods: {
      closeDialog() {
        this.dialog = !this.dialog
      },
      async sendEmail () {
        const isValid = await this.$refs.observer.validate()
        if(isValid){
          const templateParams = {
            select: this.TurForZakaz? this.TurForZakaz : this.select,
            date: this.date,
            name: this.name,
            email: this.email,
            message: this.message

          }
          emailjs.send('service_gk0z8oi', 'template_7s6445l', templateParams, 'user_VAhdS8kJOg8ogyDaT9FNI')

          this.dialog = !this.dialog
          this.$emit('showAlert')
        }
      },
    },
    mounted() {
      console.log(this.$refs.form);
    }


  }
</script>
