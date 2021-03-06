import Vue from "vue"
import Vuetify from "vuetify"
import VueRouter from "vue-router"

import "node_modules/vuetify/dist/vuetify.min.css"

import App from "./App.vue"
import router from "./router/Router"

Vue.use(Vuetify)
Vue.use(VueRouter)

new Vue({
    el: "#app",
    router,
    render: h => h(App)
})
