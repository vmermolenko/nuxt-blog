<template>
  <div>
    <v-snackbar
      max-width="150"
      color="success"
      top
      v-model="snackbar"
      elevation="24"
      rounded="pill"
      right
    >
      <div class="text-center">
        {{ message }}
      </div>
    </v-snackbar>
  </div>
</template>
<script>
  export default {
    props: ['message'],
    data: () => ({
      snackbar: true,
    }),
  }
</script>
