
<template>
  <div>
    <v-card
      md="3"
      elevation="0"
      height="350"
    >
    <!-- site search -->
    <div>
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
              Todos los tours
              &nbsp; <span class="primary--text" style="font-size: 0.8em;">{{ getAllTours.length }}</span>
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
              &nbsp; <span class="primary--text" style="font-size: 0.8em;">{{ counter(check.value) }}</span>
            </span>
          </template>
        </v-checkbox>
      </div>

      <v-progress-linear v-show="loader"
        class="mt-5"
        indeterminate
        color="primary"
      ></v-progress-linear>

    </div>

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
        { label: 'Tours de San Petersburgo', value: 'San Petersburgo' },
        { label: 'Tours por los suburbios de San Petersburgo', value: 'Suburbio' },
        { label: 'Tours en Karelia', value: 'Carelia' },
        { label: 'Tours VIP', value: 'VIP' },
      ]
    }
  },
  mounted() {
    this.selected = this.selectedFromVuex
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
    },
    counter(val){
      return val? this.getAllTours.filter(t => t.typetour === val).length : 0
    }
  },
  computed: {
    getAllTours(){
      return this.$store.getters.getTours
    },
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
  watch: {
    selected () {
      this.$store.commit('setFilterByCategory',this.compFilersSelected)
    },
  }
}
</script>
