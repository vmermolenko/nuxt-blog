<template>
  <div>

     <v-app>
      <p class="text-h5 font-weight-bold" style="text-align: center">Индивидуальные туры по Санкт-Петербургу и Карелии</p>
          <p align="justify" class="pa-2">
            Lorem ipsum dem temporibus aliquam et assumenda cupiditate quasi? Omnis in eaque explicabo est reprehenderit? Non vel sequi vitae iure quia dolorem voluptates libero sapiente in aspernatur officiis, nihil molestiae maiores ipsam, laborum cum laboriosam ullam consequuntur quisquam cupiditate modi perferendis iste, a labore? Facilis officiis totam, vero voluptatem incidunt nobis magni reprehenderit, tempore distinctio assumenda exercitationem deserunt, dignissimos omnis aliquid deleniti. Consequatur sint inventore nisi magni facilis! Porro, quidem illum amet officia veniam, rem nostrum aperiam vitae exercitationem tenetur corporis excepturi repellat sed eveniet sapiente repellendus voluptas architecto pariatur.
          </p>
<!--
            <v-divider class="mb-7" color="blue"></v-divider> -->

          <v-row >
            <!-- fixed panel -->
            <v-col md="3" class="d-none  d-sm-none d-md-flex" @click="setFilter">
            <fixed-panel ></fixed-panel>
            </v-col>

            <!-- list turs -->
            <v-col md="9">
              <v-row >
                <v-col  v-for="tur in turs" :key="tur.id" md="6">
                  <v-card
                    elevation="10"
                    height="100%"
                  >
                    <v-img
                    contain
                    height="250"
                    :src="tur.img"
                    >
                    </v-img>

                    <v-card-title font-size=14px style="padding-bottom: 0px; height:140px" >
                      {{tur.title}}
                    </v-card-title>

                    <v-card-text font-size=8px class="grey--text">
                      {{tur.date}}
                    </v-card-text>
                    <v-card-text align="justify" style="height:140px">
                      {{tur.description}}
                    </v-card-text>
              <NuxtLink :to="`turs/${tur.id}`">
                    <v-card-actions  class="a justify-center">
                      <v-btn class="mb-5"
                        rounded
                        color="primary"
                        text
                        @click.stop=""
                      >
                        Посмотреть тур
                      </v-btn>
                    </v-card-actions>
</NuxtLink>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
<v-divider class="mt-7"></v-divider>
     </v-app>



  </div>
</template>

<script>
export default {
  auth : false,
  layout : 'default',
  head :{
    title : 'Главная'
  },
  name: 'House',
  data() {
    return {
      drawer: false,
      turs: [],
      filter: []
    }
  },
  mounted() {
    this.turs = this.$store.state.turs
  },
  methods: {
    setFilter() {
      this.filter = this.$store.getters.SelectedCategory
      this.turs = this.$store.state.turs.filter(t => this.filter.includes(t.type))
    }
  }
}
</script>
<style>

</style>
