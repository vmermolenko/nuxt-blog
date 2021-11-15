<template>
  <v-data-table
    :headers="headers"
    :items="content"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>

      <v-toolbar
        flat
      >
        <v-toolbar-title>Все туры</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>

        <v-btn
          color="primary"
          class="mb-2"
        >
        <NuxtLink :to="`admin/create`" class="white--text link"> Создать</NuxtLink>
        </v-btn>

        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card class="pa-5">
            <p class="text-center text-h6">
               Удалить навсегда?
            </p>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red" text >да</v-btn>
              <v-btn color="blue darken-1" text @click="dialogDelete=!dialogDelete">нет</v-btn>
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
        @click="dialogDelete=!dialogDelete"
      >
        mdi-delete
      </v-icon>
    </template>

    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Перезагрузить
      </v-btn>
    </template>

  </v-data-table>
</template>

<script>
  export default {
    auth : false,
    layout : 'admin',
    head() {
        return {
      title : 'Админка'
      }
    },
    created () {
      this.initialize()
    },
    data: () => ({
      dialogDelete: false,
      headers: [
          { text: 'Id', align: 'start', sortable: false, value: 'id'},
          { text: 'Дата создания', value: 'created' },
          { text: 'Название тура', value: 'title' },
          { text: 'Группа', value: 'group' },
          { text: 'Стоимость экскурсии', value: 'amount' },
          { text: 'Действия', value: 'actions' },
        ],
      content: [],
    }),
    methods: {
      initialize () {
        this.content = this.$store.state.turs
      },
      editItem (item) {
      },
    },
  }
</script>
<style >
  .link{text-decoration:none;}
</style>
