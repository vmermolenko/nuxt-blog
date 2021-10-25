<template>
  <div>
    <Navigation />
    Here is id {{ id }}
  </div>
</template>
<script>

export default ({
  data: () => ({
    id : null
  }),
  mounted() {
    //this.id = this.$route.params.id
  },
  async asyncData(context){
    const id = context.params.id
    return {id}
  }

})
</script>
