import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import store from './store'
import router from './router'
import './registerServiceWorker'
import "./css/tailwind.css"
import VCalendar from 'v-calendar';
import VueCarousel from 'vue-carousel';
import Calendar from 'v-calendar/lib/components/calendar.umd'
import DatePicker from 'v-calendar/lib/components/date-picker.umd'
import ApiService from './service/api.service'
import TransitionExpand from 'vue-transition-expand'
import 'vue-transition-expand/dist/vue-transition-expand.css'
import ReadMore from 'vue-read-more'
import {
  LanguageProvider
} from './provider/language.storage'


Vue.component('vc-calendar', Calendar)
Vue.component('vc-date-picker', DatePicker)

Vue.use(VCalendar, {
  componentPrefix: 'vc',
});

Vue.use(ReadMore)
Vue.use(TransitionExpand)
Vue.use(require('vue-moment'));
Vue.use(VueCarousel);

Vue.config.productionTip = false
Vue.config.silent = true

init();

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')


function init() {
  ApiService.init(process.env.VUE_APP_BACKEND_URL)
  if (LanguageProvider.getLanguage() == undefined) {
    LanguageProvider.setLanguage("EN");
  }
}