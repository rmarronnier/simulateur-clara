import Vue from 'vue'
import Vuex from 'vuex'
import Situation from './modules/situation'
import Results from './modules/results'
import Filters from './modules/filters'


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
