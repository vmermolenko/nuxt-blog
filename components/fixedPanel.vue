
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
      <v-checkbox
        class="ml-4"
        v-model="selected"
        label="Все туры"
        color="primary"
        value="all"
        hide-details
        @click="setAllFilter"
      ></v-checkbox>
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
      selected:[]
    }
  },
  methods: {
    setAllFilter() {
      if (this.selected.indexOf('all')  >= -1 ) {
        this.selected = ['all']
      }
    }
  },
  computed: {
    selectedFromVuex() {
      return this.$store.getters.SelectedCategory
    },
    compFilersSelected(){
      if ((this.selected.length > 1) && (this.selected.indexOf('all')  >= 0 )) {
        this.selected.splice(this.selected.indexOf('all'), 1);
      }
      if (this.selected.indexOf('all')  >= 0 ) {
        this.selected = ['all']
      }

      return this.selected
    }
  },
  mounted() {
    this.selected = this.selectedFromVuex
  },
  watch: {
    selected () {
      this.$store.commit('setFilterByCategory',this.compFilersSelected)
    }
  }
}
</script>
