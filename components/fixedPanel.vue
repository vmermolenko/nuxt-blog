
<template>
  <div>
    <v-card
      style="position: sticky; top: 56px"
      md="3"
      elevation="4"
      height="525"
    >
      <v-autocomplete
        class="ma-3"
        color="primary"
        hide-no-data
        hide-selected
        item-text="Description"
        item-value="API"
        label="Поиск по сайту"
        prepend-icon="mdi-database-search"
        return-object
      ></v-autocomplete>

     <v-switch
      class="ml-5"
      v-model="switch1"
      label="Все туры"
    ></v-switch>
      <!-- <v-checkbox
        class="ml-4"
        v-model="selected"
        label="Все туры"
        color="primary"
        value="all"
        hide-details -->
      <!-- </v-checkbox> -->
      <v-checkbox
        class="ml-4"
        v-model="selected"
        label="Туры по Санкт-Петербургу"
        color="primary"
        value="spb"
        hide-details
      ></v-checkbox>
      <v-checkbox
        class="ml-4"
        v-model="selected"
        label="Туры по пригородам Санкт-Петербурга"
        color="primary"
        value="prigorod"
        hide-details
      ></v-checkbox>
      <v-checkbox
        class="ml-4"
        v-model="selected"
        label="Туры по Карелии"
        color="primary"
        value="karelia"
        hide-details
      ></v-checkbox>
      <v-checkbox
        class="ml-4"
        v-model="selected"
        label="Вип туры"
        color="primary"
        value="vip"
        hide-details
      ></v-checkbox>

      <v-divider class="mb-7 mt-7"></v-divider>

      <v-btn block class="mb-2" color="primary">
        О нас
      </v-btn>

      <v-btn block class="mb-2" color="primary">
        Блог
      </v-btn>

      <v-btn block color="primary">
        Контакты
      </v-btn>
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      switch1: true,
      selected:[],
    }
  },
  computed: {
    selectedFromVuex() {
      return this.$store.getters.SelectedCategory
    }
  },
  mounted() {
    this.selected = this.selectedFromVuex
  },
  watch: {
    switch1() {
      this.selected = selected['spb']
          }
    // selected () {
    //   this.$store.commit('setFilterByCategory',this.selected)
    // }
  }
}
</script>
