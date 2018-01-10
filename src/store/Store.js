import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const state = {
    yearlyPopulations: []
}

const getters = {}

const actions = {}

const mutations = {
    setYearlyPopulations(state, populationData) {
        state.yearlyPopulations = populationData
    }
}

const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})

export default store
