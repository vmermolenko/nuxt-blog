<template>
<div>
  <v-autocomplete
  v-model="model"
  :items="items"
  :loading="isLoading"
  :search-input.sync="search"
  class="ma-2"
  color="primary"
  hide-no-data
  hide-selected
  item-text="Description"
  item-value="API"
  label="Поиск по турам"
  prepend-icon="mdi-database-search"
  return-object
  ></v-autocomplete>
</div>

</template>
<script>
  export default {
    data: () => ({
      descriptionLimit: 50,
      entries: [],
      isLoading: false,
      model: null,
      search: null,
    }),
    computed: {
      items () {
        return this.entries.map(entry => {
          const title = entry.title.length > this.descriptionLimit
            ? entry.title.slice(0, this.descriptionLimit) + '...'
            : entry.title
          return title
        })
      },
    },

    watch: {
      search () {
        this.entries = this.$store.getters.getTours
      },
      model(val) {
        const tur = this.$store.getters.getTours.filter(t => t.title === val)
        const turId = tur[0].id
        this.$router.push(`tours/${turId}`)
      }
    },
  }
</script>
