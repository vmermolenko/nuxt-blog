<template>
 <v-footer
    color="white"
    padless
  >
    <v-row

    justify="center"
          >
          <v-col md="4">
   <v-card
          flat
          tile
          class=" text-center "
        >
          <v-card-text class="pt-2">
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-2 "
              icon
            >
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-text>
          </v-card>
          </v-col>
          <v-col md="8">
               <v-btn
        v-for="link in links"
        :key="link"
        color=""
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
          </v-col>
    </v-row>




  </v-footer>
</template>
<script>
  export default {
    data: () => ({
      links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us',
      ],
        icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>
