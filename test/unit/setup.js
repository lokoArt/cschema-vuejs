import Vue from 'vue'
import VueResource from 'vue-resource';

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.http.options.root = 'https://nck21nadi2.execute-api.ap-southeast-1.amazonaws.com/dev'
