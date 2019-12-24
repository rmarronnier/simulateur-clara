import ZRRService from "@/services/zrr";

export default {
    state: {
        changed: false,
        disabled: false,
        spectacle: false,
        manager: false,
        diploma: "",
        inscription_period: "",
        allocation_type: "",
        monthly_allocation_value: 0,
        age: 0,
        address: "",
        location_citycode: "",
        zrr: "non renseigné",
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
        updateManager(state, manager) {
            state.manager = manager
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
        updateAddress(state, address) {
            state.address = address
        },
        updateLocationCitycode(state, location_citycode) {
            state.location_citycode = location_citycode
        },
        updateZRR(state, zrr) {
            state.zrr = zrr
        },
        updateCategory(state, category) {
            state.category = category
        },

    },
    actions: {
        submitInscription({ commit, state }, inscription_period) {
            if (inscription_period != state.inscription_period) {
                commit('updateInscriptionPeriod', inscription_period)
                commit('updateChanged', true)
            }
        },
        submitAddress({ commit, state }, address) {
            if (address != state.address) {
                commit('updateAddress', address)
                commit('updateChanged', true)
            }
        },
        submitCitycode({ commit, dispatch, state }, location_citycode) {
            if (location_citycode != state.location_citycode) {
                commit('updateLocationCitycode', location_citycode)
                commit('updateChanged', true)
                ZRRService(location_citycode)
                    .then(res => res.json())
                    .then(res => {
                        dispatch('submitZRR', res.records[0].fields.zrr_2017);
                    })
            }
        },
        submitZRR({ commit, state }, zrr) {
            if (zrr != state.zrr) {
                commit('updateZRR', zrr)
                commit('updateChanged', true)
            }
        },
        submitAge({ commit, state }, age) {
            if (age != state.age) {
                commit('updateAge', age)
                commit('updateChanged', true)
            }
        },
        submitAllocation({ commit, state }, allocation_type) {
            if (allocation_type != state.allocation_type) {
                commit('updateAllocationType', allocation_type)
                commit('updateChanged', true)
            }
            //  this.$router.push('ARE')
        },
        submitARE({ commit, state }, monthly_allocation_value) {
            if (monthly_allocation_value != state.monthly_allocation_value) {
                commit('updateMonthlyAllocationValue', monthly_allocation_value)
                commit('updateChanged', true)
            }
            // this.$router.push('age') //est-ce vraiment nécessaire si l'âge est déjà renseigné ?
        },
        submitCategory({ commit, state }, category) {
            if (category != state.category) {
                commit('updateCategory', category)
                commit('updateChanged', true)
            }
            //this.$router.push('allocation')
        },
        submitGrade({ commit, state }, diploma) {
            if (diploma != state.diploma) {
                commit('updateDiploma', diploma)
                commit('updateChanged', true)
            }
        },
        submitDisabled({ commit, state }, disabled) {
            if (disabled != state.disabled) {
                commit('updateDisabled', disabled)
                commit('updateChanged', true)
            }
            //if (state.filters.length == 0) { put those actions in the result component when loaded.
            // dispatch('getFilters')
            // //}
            // dispatch('getResults')
            // dispatch('getEligible')
            // dispatch('getNonEligible')
            //dispatch('getUncertain') ???
            //this.$router.push('results')
        },
        submitSpectacle({ commit, state }, spectacle) {
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
            //this.$router.push('results')
        },
        submitManager({ commit, state }, manager) {
            if (manager != state.manager) {
                commit('updateManager', manager)
                commit('updateChanged', true)
            }
            //if (state.filters.length == 0) { put those actions in the result component when loaded.
            // dispatch('getFilters')
            // //}
            // dispatch('getResults')
            // dispatch('getEligible')
            // dispatch('getNonEligible')
            //dispatch('getUncertain') ???
            //this.$router.push('results')
        },
    },

    getters: {

        changed: state => state.changed,
        disabled: state => state.disabled,
        spectacle: state => state.spectacle,
        manager: state => state.manager,
        diploma: state => state.diploma,
        inscription_period: state => state.inscription_period,
        allocation_type: state => state.allocation_type,
        monthly_allocation_value: state => state.monthly_allocation_value,
        age: state => state.age,
        address: state => state.address,
        location_citycode: state => state.location_citycode,
        zrr: state => state.zrr,
        category: state => state.category,

    }

}