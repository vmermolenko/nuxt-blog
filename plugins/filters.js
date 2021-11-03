import Vue from 'vue'

Vue.filter('counter', (val, turs) => {
  return val? turs.filter(t => t.type===val).length : 0
})
