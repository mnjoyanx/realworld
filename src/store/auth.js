import { register } from '@/api/auth'
// import axios from 'axios'

export default {
    state: {
        isSubmitting: false,
        errors: null,
        user: null
    },
    mutations: {
        REGISTER_START(state) {
            state.isSubmitting = true
        },
        
        REGISTER_SUCCESS(state, payload) {
            state.user = payload
            state.isSubmitting = false
        },

        REGISTER_FAILURE(state, payload) {
            console.log(payload, 666666)
            state.errors = payload
            state.isSubmitting = false
        },
        
        SET_ERRORS(state) {
            state.errors = null
        }
    },
    actions: {
        REGISTER_HANDLER({ commit }, payload) {
            return new Promise(res => {
                commit('SET_ERRORS')
                commit('REGISTER_START')
                    register(payload)
                        .then(result => {
                            commit('SET_ERRORS')
                            commit('REGISTER_SUCCESS', result.data)
                            res(result)
                        })
                .catch(err => {
                    commit('REGISTER_FAILURE', err.response.data.errors)
            }) 
            })
                
        }
    },
    getters: {
        isSubmitting(state) {
            return state.isSubmitting
        },
        getErrors(state) {
            if (state.errors) {
                return Object.entries(state.errors).map(item => {
                return item
            })
            }
        }
    },
}