<template>
  <div>
    <v-container fill-height grid-list-md text-xs-center>
      <v-row justify="center" align="center" class="mx-auto my-12">

        <v-col sm="6">
          <v-card>
            <v-card-title>Admin panel</v-card-title>
            <v-card-text>
              <validation-observer
                ref="observer"
                v-slot="{ invalid }"
              >
                <form @submit.prevent="login">
                  <validation-provider
                    v-slot="{ errors }"
                    name="username"
                    rules="required|max:10"
                  >
                    <v-text-field
                      v-model="loginData.username"
                      :error-messages="errors"
                      label="Username"
                      required
                    ></v-text-field>
                  </validation-provider>
                  <validation-provider
                    v-slot="{ errors }"
                    name="Password"
                    rules="required"
                  >
                    <v-text-field
                      v-model="loginData.password"
                      type="password"
                      :error-messages="errors"
                      label="Password"
                      required
                    ></v-text-field>
                  </validation-provider>
                  <v-btn
                    class="mr-4"
                    type="submit"
                    :disabled="invalid"
                  >
                    submit
                  </v-btn>
                  <v-btn @click="clear">
                    clear
                  </v-btn>
                </form>
              </validation-observer>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  import { required, digits, email, max, regex } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

  setInteractionMode('eager')

  extend('digits', {
    ...digits,
    message: '{_field_} needs to be {length} digits. ({_value_})',
  })

  extend('required', {
    ...required,
    message: '{_field_} can not be empty',
  })

  extend('max', {
    ...max,
    message: '{_field_} may not be greater than {length} characters',
  })

  extend('regex', {
    ...regex,
    message: '{_field_} {_value_} does not match {regex}',
  })

  extend('email', {
    ...email,
    message: 'Email must be valid',
  })

  export default {
    auth : false,
    layout : 'empty',
    components: {
      ValidationProvider,
      ValidationObserver
    },
    data() {
      return {
        loginData: {
          username: "",
          password: ""
        }
      };
    },

    methods: {
      submit () {
        this.$refs.observer.validate()
      },
      clear () {
        this.loginData.email = ''
        this.loginData.password = ''
        this.$refs.observer.reset()
      },
      async login() {
        if (!this.$refs.observer.validate()) {
          return
        }
        try {
          let response = await this.$auth.loginWith("local", {
            data: this.loginData
          });
          console.log(response);
          //this.$router.push("/admin/");
          this.$router.push({ path: '/admin/'});
        } catch (err) {
          console.log(err);
        }
      },
      async tokenRefresh() {
        this.error = null
        return this.$auth.refreshWith('refresh', {
                                        data: this.loginData
                                      })
                                      .catch((err) => {
                                        console.error(err)
                                        this.error = err.response?.data
                                      })
      },
    },
  }
</script>
