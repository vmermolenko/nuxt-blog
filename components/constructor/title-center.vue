<template>
  <div>
    <p class="font-weight-bold" style="text-align: center">{{text}}</p>
  </div>
</template>
<script>
export default {
  props: ['text']
}
</script>
<style scoped>
  p {
    font-size: 20px
  }
</style>
