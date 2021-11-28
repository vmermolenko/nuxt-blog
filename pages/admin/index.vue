<template>
  <v-data-table
    :headers="headers"
    :items="compContent"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>

      <v-toolbar
        flat
      >
        <v-toolbar-title class="my-auto" @click="getAllTours">Все туры</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-btn
          color="primary"
          class="white--text link"
          @click="dialogCreate=!dialogCreate"
        >
        <v-icon
          dark
          left
        >
          mdi-plus-thick
        </v-icon>
          Создать
        </v-btn>
        <v-spacer></v-spacer>

        <v-btn
          color="primary"
          class=""
        >
        <NuxtLink to='/' class="white--text link"> Выйти </NuxtLink>
        </v-btn>

        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card class="pa-5">
            <p class="text-center text-h6">
              Удалить навсегда?
            </p>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="confirmDelete">да</v-btn>
              <v-btn color="blue darken-1" text @click="dialogDelete=!dialogDelete">нет</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogCreate" max-width="500px">
          <v-card class="pa-5">
            <p class="text-center text-h6">
              Создать новый тур?
            </p>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="confirmCreate">да</v-btn>
              <v-btn color="blue darken-1" text @click="dialogCreate=!dialogCreate">нет</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>

    <template v-slot:[`item.actions`]="{ item }">

        <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>

      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>

    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="getAllTours"
      >
        Перезагрузить
      </v-btn>
    </template>

  </v-data-table>
</template>

<script>
  export default {
    auth : true,
    layout : 'admin',
    head() {
        return {
          title : 'Админка'
      }
    },
    data: () => ({
      //tours: [],
      editedIndex: -1,
      deleteId: -1,
      dialogDelete: false,
      dialogCreate: false,
      headers: [
          { text: 'Id', align: 'start', sortable: false, value: 'id'},
          { text: 'Дата создания', value: 'datestart' },
          { text: 'Название тура', value: 'title' },
          { text: 'Группа', value: 'team' },
          { text: 'Стоимость экскурсии', value: 'amount' },
          { text: 'Действия', value: 'actions' },
        ],
    }),
    mounted(){
      this.$store.dispatch('getAllTours')
    },
    computed: {
      compContent () {
        return this.$store.state.tours
      },
    },
    methods: {
      async getAllTours() {
        this.$store.dispatch('getAllTours')
      },
      async fetchSomethingDelete() {
        const headers = {
          'Content-Type': 'application/json'
        };
        const tours = await this.$axios.$get('/api/turs/all', headers)
        .then((response) => {
            console.log('response.', response);
            this.tours = response
            console.log('tours: ', this.tours);
        }).catch((error) => {
            console.warn('error');
        })
        //this.tours = tours

      },
      confirmCreate(){
        //this.$store.commit('createNewTur')
        this.$store.dispatch('setTourCreate')
        this.dialogCreate=!this.dialogCreate
      },
      deleteItem(item){
        console.log('deleteItem:' , item);
        this.deleteId = item.id
        this.dialogDelete=!this.dialogDelete
      },
      confirmDelete(){

        const id = this.deleteId
        console.log('id: ',id);
        this.$store.dispatch('setTourDelete', id )
        this.deleteId = -1
        this.dialogDelete=!this.dialogDelete
      },
      editItem (item) {
        // this.editedIndex = this.content.indexOf(item)
        this.$router.push(`/admin/edit?id=${item.id}`)
      },
    },
  }
</script>
<style >
  .link{text-decoration:none;}
</style>
