
<template>
  <div>
    <v-card
      style="position: sticky; top: 0px"
      md="3"
      elevation="4"
      height="425"
    >
  <!-- site search -->
   <search-site></search-site>

      <div @click="clickCheckbox">
        <v-checkbox
          class="ml-2 mt-0"
          v-model="selected"

          color="primary"
          value="all"
          hide-details
          @click="setAllFilter"
        >
          <template v-slot:label>
            <span>
              Все туры
              &nbsp; <span class="primary--text" style="font-size: 0.8em;">{{$store.state.turs.length}}</span>
            </span>
          </template>
        </v-checkbox>

        <v-checkbox v-for="check in checkbox" :key="check.value"
          class="ml-2"
          v-model="selected"
          color="primary"
          :value="check.value"
          hide-details
        >
          <template v-slot:label>
            <span>
              {{check.label}}
              &nbsp; <span class="primary--text" style="font-size: 0.8em;">{{check.value | counter($store.state.turs)}}</span>
            </span>
          </template>
        </v-checkbox>
      </div>

      <v-progress-linear v-show="loader"
        class="mt-5"
        indeterminate
        color="primary"
      ></v-progress-linear>

    </v-card>
  </div>
</template>
<script>

export default {
  data() {
    return {
      loader: false,
      selected:[],
      checkbox: [
        {label: 'Туры по Санкт-Петербургу', value: 'spb'},
        {label: 'Туры по пригородам Санкт-Петербурга', value: 'prigorod'},
        {label: 'Туры по Карелии', value: 'karelia'},
        {label: 'Вип туры', value: 'vip'},
      ]
    }
  },
  methods: {
    clickCheckbox() {
      this.loader = true
      setTimeout(() => {this.loader=false}, 1500)
    },
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
    compFilersSelected() {
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
    },
  }
}
</script>
