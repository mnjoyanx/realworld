import {register} from '@/api/auth'

export default {
    state: {
        isSubmitting: false,
        errors: null,
        user: null
    },
    mutations: {
        REGISTER_START(state) {
            state.isSubmitting = false
        }
        
        // REGISTER_SUCCESS() {

        // }

        // REGISTER_FAILURE() {

        // }
    },
    actions: {
        REGISTER_HANDLER({ commit }, payload) {
            return new Promise((res, rej) => {
                commit('REGISTER_START')
                try {
                    // context.commmit()
                    register(payload)
                    res()
                    // context.commit('REGISTER_SUCCESS')
                } catch (err) {
                    // context.commit('REGISTER_FAILURE')
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