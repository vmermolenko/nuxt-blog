<template>
  <v-footer
    color="white"
    padless
  >
    <v-row justify="center">
      <v-col md="4">
        <v-card
          flat
          tile
          class=" text-center "
        >
          <v-card-text class="pt-2">
            <v-btn
              v-for="(icon, idx) in iconsLinks"
              :key="idx"
              class="mx-2"
              icon
            >
              <a :href="icon.link" target="_blank" class="link">
                <v-icon size="24px">
                  {{ icon.icon }}
                </v-icon>
              </a>
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col md="8">
        <v-btn
          v-for="(link, idx) in links"
          :key="idx"
          color=""
          text
          rounded
          class="my-2"
        >
          <NuxtLink :to="link.path" class="link">{{ link.title }}</NuxtLink>

        </v-btn>
      </v-col>
    </v-row>
  </v-footer>
</template>
<script>
  export default {
    data: () => ({
      links: [
        {
          title: 'Home',
          path : '/'
        },
        {
          title: 'About Us',
          path : '/about'
        },
        // {
        //   title: 'Services',
        //   path : '/'
        // },
        {
          title: 'Blog',
          path : '/'
        },
        {
          title: 'Contact Us',
          path : '/contact'
        },
      ],
        iconsLinks: [
          {
            icon: 'mdi-facebook',
            link: '/'
          },
          {
            icon: 'mdi-twitter',
            link: '/'
          },
          {
            icon: 'mdi-linkedin',
            link: '/'
          },
          {
            icon: 'mdi-instagram',
            link: 'https://www.instagram.com/explore/tags/%D0%B3%D0%BE%D0%B2%D0%BD%D0%BE/'
          }
      ],
    }),
  }
</script>
