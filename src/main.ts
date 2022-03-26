import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Navigation from "@/components/Navigation.vue"
import Layout from "@/components/Layout.vue"
import Icon from "@/components/Icon.vue"
import "@/assets/style/reset.scss"
import tagListModel from './tagListModel'

Vue.config.productionTip = false
// eslint-disable-next-line vue/multi-word-component-names
Vue.component("Navigation", Navigation)
Vue.component("Layout", Layout)
Vue.component("Icon", Icon)
window.tagList = tagListModel.fetch();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
