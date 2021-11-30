<template>
  <div>
    <v-form @submit.prevent="login">
      <div class="mb-3">
        <label for="username" class="form-label">username</label>
        <input
          type="text"
          class="form-control"
          id="username"
          v-model="loginData.username"
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          type="password"
          v-model="loginData.password"
          class="form-control"
          id="password"
          autocomplete="on"
        />
      </div>
      <button type="submit" class="btn btn-primary w-100">login</button>
    </v-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginData: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    async login() {
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
  }
};
</script>
<style></style>
