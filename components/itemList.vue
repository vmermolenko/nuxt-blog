<template>
  <div>
    <v-col md="12" class="pb-0 ">
      <div id="el">
        <span >* {{itemListInput}}</span>
        </div>
    </v-col>
  </div>
</template>
<script>
export default {
  props: ['itemListInput']
}
</script>
<style>
  #el {
   width: 200px;
	overflow: hidden;
  white-space: nowrap;
	text-overflow: ellipsis;

}
</style>
