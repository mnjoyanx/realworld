// import { register } from '@/api/auth'
import axios from 'axios'

export default {
    state: {
        isSubmitting: false,
        errors: null,
        user: null
    },
    mutations: {
        REGISTER_START(state) {
            state.isSubmitting = false
        },
        
        REGISTER_SUCCESS(state, payload) {
            state.user = payload
        },

        REGISTER_FAILURE(state, payload) {
            state.error = payload
        },
        
        SET_ERRORS(state) {
            state.errors = null
        }
    },
    actions: {
        REGISTER_HANDLER({ commit }, payload) {
            return new Promise((res, rej) => {
                commit('REGISTER_START')
                commit('SET_ERRORS')
                try {
                    axios.post('http://devcamp-api-node.herokuapp.com/api/v1/auth/register', payload)
                        .then(result => {
                            commit('SET_ERRORS')
                            commit('REGISTER_SUCCESS', result.data)
                        })
                    res()
                } catch (err) {
                    commit('REGISTER_FAILURE', err)
                    rej(err)
                }
            })
        }
    },
    getters: {
        submitForm(state) {
            return state.isSubmitting
        }
    },
}