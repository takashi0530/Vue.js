import Vue from 'vue'
import App from './App.vue'

// trueにするとconsole.logでメッセージが表示されるだけ
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
// .$mount('#app')    el: '#app'と同じ意味
