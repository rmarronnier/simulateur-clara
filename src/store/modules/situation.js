import ClaraService from "@/api/clara";

export default {
    state: {
        changed: false,
        disabled: false,
        spectacle: false,
        diploma: "",
        inscription_period: "",
        allocation_type: "",
        monthly_allocation_value: 0,
        age: 0,
        location_citycode: "",
        category: "",

    },
    mutations: {
        updateChanged(state, changed) {
            state.changed = changed
        },
        updateDisabled(state, disabled) {
            state.disabled = disabled
        },
        updateSpectacle(state, spectacle) {
            state.spectacle = spectacle
        },
        updateDiploma(state, diploma) {
            state.diploma = diploma
        },
        updateInscriptionPeriod(state, inscription_period) {
            state.inscription_period = inscription_period
        },
        updateAllocationType(state, allocation_type) {
            state.allocation_type = allocation_type
        },
        updateMonthlyAllocationValue(state, monthly_allocation_value) {
            state.monthly_allocation_value = monthly_allocation_value
        },
        updateAge(state, age) {
            state.age = age
        },
        updateLocationCitycode(state, location_citycode) {
            state.location_citycode = location_citycode
        },
        updateCategory(state, category) {
            state.category = category
        },

    },
    actions: {
        submitInscription({ commit }, inscription_period) {

        },
        submitAddress({ commit, state }, location_citycode) {
            if (location_citycode != state.location_citycode) {
                commit('updateLocationCitycode', location_citycode)
                commit('updateChanged', true)
            }
            this.$router.push('other')
        },
        submitAge({ commit, state }, age) {
            if (age != state.age) {
                commit('updateAge', age)
                commit('updateChanged', true)
            }
            this.$router.push('grade')
        },
        submitAllocation({ commit, state }, allocation_type) {
            if (allocation_type != state.allocation_type) {
                commit('updateAllocationType', allocation_type)
                commit('updateChanged', true)
            }
            this.$router.push('ARE')
        },
        submitARE({ commit, state }, monthly_allocation_value) {
            if (monthly_allocation_value != state.monthly_allocation_value) {
                commit('updateMonthlyAllocationValue', monthly_allocation_value)
                commit('updateChanged', true)
            }
            this.$router.push('age') //est-ce vraiment nécessaire si l'âge est déjà renseigné ?
        },
        submitCategory({ commit, state }, category) {
            if (category != state.category) {
                commit('updateCategory', category)
                commit('updateChanged', true)
            }
            this.$router.push('allocation')
        },
        submitGrade({ commit, state }, diploma) {
            if (diploma != state.diploma) {
                commit('updateDiploma', diploma)
                commit('updateChanged', true)
            }
            this.$router.push('address')
        },
        submitOther({ commit, state }, disabled, spectacle) {
            if (disabled != state.disabled) {
                commit('updateDisabled', disabled)
                commit('updateChanged', true)
            }
            if (spectacle != state.spectacle) {
                commit('updateSpectacle', spectacle)
                commit('updateChanged', true)
            }
            //if (state.filters.length == 0) { put those actions in the result component when loaded.
            // dispatch('getFilters')
            // //}
            // dispatch('getResults')
            // dispatch('getEligible')
            // dispatch('getNonEligible')
            //dispatch('getUncertain') ???
            this.$router.push('results')
        },
    },

    getters: {

        changed: state => state.changed,
        disabled: state => state.disabled,
        spectacle: state => state.spectacle,
        diploma: state => state.diploma,
        inscription_period: state => state.inscription_period,
        allocation_type: state => state.allocation_type,
        monthly_allocation_value: state => state.monthly_allocation_value,
        age: state => state.age,
        location_citycode: state => state.location_citycode,
        category: state => state.category,

    }

}