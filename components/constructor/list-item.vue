
<template>
  <div>
    <v-row dflex class="my-2">
        <v-badge
          dot
          inline
          left
        >
        <p dflex class="align-inline pl-3 text-subtitle-2">
          {{text}}
        </p>
        </v-badge>
    </v-row>
  </div>
</template>
<script>
export default {
  props: ['text']
}
</script>
