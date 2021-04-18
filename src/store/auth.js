import { register, login } from '@/api/auth'
import { setitem } from '@/helpers/localeStorage'

export default {
    state: {
        isSubmitting: false,
        errors: null,
        currentUser: null,
        isLoggedIn: null
    },
    mutations: {
        REGISTER_START(state) {
            state.isSubmitting = true
            state.errors = null
        },

        REGISTER_SUCCESS(state, payload) {
            state.currentUser = payload
            state.isLoggedIn = true
            state.isSubmitting = false
        },

        REGISTER_FAILURE(state, payload) {
            state.errors = payload
            state.isLoggedIn = false
            state.isSubmitting = false
        },

        LOGIN_START(state) {
            state.isSubmitting = true
            state.errors = null
        },

        LOGIN_SUCCESS(state, payload) {
            state.isSubmitting = false
            state.isLoggedIn = true
            state.currentUser = payload
        },

        LOGIN_FAILURE(state, payload) {
            state.errors = payload
            state.isSubmitting = false
            state.isLoggedIn = false
        }

    },
    actions: {
        REGISTER_HANDLER({ commit }, payload) {
            return new Promise(res => {
                commit('REGISTER_START')
                register(payload)
                    .then(result => {
                        commit('REGISTER_SUCCESS', result.data.user)
                        setitem('accessToken', result.data.user.token)
                        res(result)
                    })
                    .catch(err => {
                        commit('REGISTER_FAILURE', err.response.data.errors)
                    })
            })

        },


        LOGIN_HANDLER({ commit }, payload) {
            return new Promise((res, rej) => {
                commit('LOGIN_START')
                login(payload)
                    .then(result => {
                        commit('LOGIN_SUCCESS')
                        console.log(result)
                        res()
                    })
                    .catch(err => {
                        commit('LOGIN_FAILURE')
                        rej(err)
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
                return Object.keys(state.errors).map(item => {
                    const messages = state.errors[item].join(', ')
                    return `${item}: ${messages}`
                })

            }
        }
    }
}