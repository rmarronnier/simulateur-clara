import * as clara from "@/services/clara";

export default {
    state: {
        eligible: [],
        nonEligible: [],
        // uncertain: [], ???
        filters: [],
        contracts: [],
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
        },
        updateContracts(state, contracts) {
            state.contracts = contracts
        }
    },
    actions: {
        getFilters({ commit }) {
            // promise + fetch + API call
            commit("updateFilters", clara.filtersService());
        },
        getResults({ commit }) {
            // promise + fetch + API call
            commit("updateChanged", false);
            commit("updateContracts", clara.contractsService());
            commit("updateEligible", clara.aidsService(50));
            commit("updateNonEligible", clara.aidsService(50));
        },
    },
    getters: {
        eligible: state => state.eligible,
        eligible_quantity: state => state.eligible.length,
        non_eligible: state => state.nonEligible,
        non_eligible_quantity: state => state.nonEligible.length,
        //uncertain: state => state.uncertain,
        filters: state => state.filters,
        filters_quantity: state => state.filters.length,
        contracts: state => state.contracts,
        contracts_quantity: state => state.contracts.length,
    },
}