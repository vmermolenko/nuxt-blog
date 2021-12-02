<template>
  <div>
    <v-divider class="mb-5 mt-5"></v-divider>
    <v-app>
      <v-container >
        <!-- <v-card>Как с нами связаться</v-card>
        <a class="ml-3  d-none d-sm-flex nuxtLink  black--text" href="tel:+79817816068">
          <v-icon class="deep-purple--text d-none d-sm-flex mr-3">mdi-phone-classic</v-icon>
          +7(981)781-60-68
        </a> -->




<a href="#openModal">Открыть модальное окно</a>


<div id="openModal" class="modalDialog">




        <v-img class="div" max-width="800" contain src="https://life-is-travel.ru/wp-content/gallery/d180d183d181d0bad0b5d0b0d0bbd0b0/8FMx1M0X28M.jpg">
          <a href="#close" title="Закрыть" class="close">X</a>
        </v-img>



</div>



        <v-divider class="mt-7"></v-divider>
      </v-container>
    </v-app>
  </div>
</template>
<script>
export default {
  auth : false
}
</script>
<style scoped>

	.modalDialog {
    position: fixed;

    font-family: Arial, Helvetica, sans-serif;

    top: 0;

    right: 0;

    bottom: 0;

    left: 0;

    background: rgba(0,0,0,0.8);

    z-index: 99999;

    -webkit-transition: opacity 400ms ease-in;

    -moz-transition: opacity 400ms ease-in;

    transition: opacity 400ms ease-in;

    display: none;

    pointer-events: none;

}
.modalDialog:target {

    display: block;

    pointer-events: auto;

}



.modalDialog > .div {

    width: 800px;

    position: relative;

    margin: 10% auto;

    padding: 5px 20px 13px 20px;

    border-radius: 10px;



    background: -moz-linear-gradient(#fff, #999);

    background: -webkit-linear-gradient(#fff, #999);

    background: -o-linear-gradient(#fff, #999);

}
.close {

    background: #606061;

    color: #FFFFFF;

    line-height: 25px;

    position: absolute;

    right: 10px;

    text-align: center;

    top: 10px;;

    width: 24px;

    text-decoration: none;

    font-weight: bold;

    -webkit-border-radius: 12px;

    -moz-border-radius: 12px;

    border-radius: 12px;

    -moz-box-shadow: 1px 1px 3px #000;

    -webkit-box-shadow: 1px 1px 3px #000;

    box-shadow: 1px 1px 3px #000;

}

.close:hover { background: #00d9ff; }



</style>
