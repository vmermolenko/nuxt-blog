<template>
  <div>
    <p class=" font-weight-bold ml-10" style="text-align: left">{{text}}</p>
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
