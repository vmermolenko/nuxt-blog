<template>
  <div>
    <v-alert
      border="left"
      colored-border
      color="blue-grey lighten-1"
      elevation="1"
    >
    <v-card-subtitle class="pa-0 " style="font-size: 16px">{{text}}</v-card-subtitle>

    </v-alert>
  </div>
</template>
<script>
export default {
  props: ['text']
}
</script>
