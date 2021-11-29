<template>
  <div class="mb-5 ml-10">
    <p class="text-h6 mb-2">
      {{title}}
    </p>
    <v-row v-for="(item, idx) in items" :key="idx"
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
