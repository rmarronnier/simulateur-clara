//import ClaraService from "@/api/clara";

export default {
    state: {
        eligible: [],
        nonEligible: [],
        // uncertain: [], ???
        filters: [],
    },
    mutations: {
        updateEligible(state, eligible) {
            state.eligible = eligible
        },
        updateNonEligible(state, nonEligible) {
            state.nonEligible = nonEligible
        },
        // updateUncertain(state, uncertain) {
        //     state.uncertain = uncertain
        // },
        updateFilters(state, filters) {
            state.filters = filters
        }
    },
    actions: {
        // getFilters({ commit }) {
        //     // promise + fetch + API call
        // },
        // getResults({ commit, dispatch }) {
        //     // promise + fetch + API call
        //     this.$store.commit("updateChanged", false)
        // },
    },
    getters: {
        eligible: state => state.eligible,
        eligible_quantity: state => state.eligible.length,
        non_eligible: state => state.nonEligible,
        non_eligible_quantity: state => state.nonEligible.length,
        //uncertain: state => state.uncertain,
        filters: state => state.filters,
        filters_quantity: state => state.filters.length,
    },
}