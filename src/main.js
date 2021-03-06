import App from './App.vue'
import router from './router/index'
import store from './store'
import axios from "axios";
import dsbrige from 'dsbridge'
import {Icon, NumberKeyboard, PasswordInput, Popup} from 'vant';
Vue.use(PasswordInput);
Vue.use(NumberKeyboard);
Vue.use(Icon);
Vue.use(Popup);
axios.defaults.withCredentials = true

Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios
Vue.prototype.$dsBridge= dsbrige

axios.defaults.baseURL = 'http://121.40.178.96:8089/app'
axios.interceptors.request.use(config => {

    if (process.env.NODE_ENV === "development") {
        config.headers.token = localStorage.getItem('token')
    }else {
        config.headers.token = dsbrige.call("getToken");
    }

    return config
})


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
