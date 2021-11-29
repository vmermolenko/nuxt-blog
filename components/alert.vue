<template>
  <div>
    <v-snackbar
      min-width="950"
      color="success"
      top
      v-model="snackbar"
      elevation="24"
      rounded="pill"
    >
      <div class="text-center">
        {{ text }}
      </div>
    </v-snackbar>
  </div>
</template>
<script>
  export default {
    data: () => ({
      snackbar: true,
      text: `Заказ отправлен!`,
    }),
  }
</script>
