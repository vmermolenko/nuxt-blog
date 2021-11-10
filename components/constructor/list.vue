<template>
  <div class="mb-5">
    <p class="text-h6 mb-2">
      {{title}}
    </p>
    <v-row v-for="item in items" :key="item"
    dflex class="my-1"
    >
        <v-badge
          dot
          inline
          left
          class="my-auto"
        >
        <p dflex class="pl-3 text-subtitle-2 my-auto" >
          {{item}}
        </p>
        </v-badge>
    </v-row>
  </div>
</template>
<script>
export default {
  props: ['title', 'items']
}
</script>
