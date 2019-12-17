import Vue from 'vue'
import Vuex from 'vuex'
import Situation from './modules/Situation'
import Results from './modules/Results'
import Filters from './modules/Filters'


Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        situation: Situation,
        results: Results,
        filters: Filters,
    },
    state: {},
    mutations: {},
    actions: {},
    getters: {},
    // plugins: [vuexLocal.plugin] useless ?
})
