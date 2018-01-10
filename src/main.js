import Vue from "vue"

import App from "./App.vue"
import store from "./store/Store"

import population from "./utilities/Populations"

new Vue({
    el: "#app",
    store,
    render: h => h(App),
    created() {
        population
            .loadYearlyTotalPopulation(2013, 2018)
            .then(data => {
                this.$store.commit("setYearlyPopulations", data)
            })
            .catch(error => {
                console.error(error)
            })
    }
})
