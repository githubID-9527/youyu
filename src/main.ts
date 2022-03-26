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
window.createTag = (name: string) => {
  const message = tagListModel.create(name);
  if (message === 'duplicated') {
    window.alert('标签名重复了');
  } else if (message === 'success') {
    window.alert('添加成功');
  }
};
window.removeTag = (id: string) => {
  return tagListModel.remove(id);
};
window.updateTag = (id: string, name: string) => {
  return tagListModel.update(id, name);
};
window.findTag = (id: string) => {
  return window.tagList.filter(t => t.id === id)[0];
};

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
