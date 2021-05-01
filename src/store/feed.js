import {getTags} from '@/api/feed'

export default {
    state: {
        tags: [],
        articles: [],
        errors: null,
        isLoading: true
    },
    mutations: {
        GET_TAGS_START(state) {
            state.isLoading = true
            state.errors = null
        },

        GET_TAGS_SUCCESS(state, payload) {
            state.isLoading = false
            state.errors = null
            state.tags = payload
        },

        GET_TAGS_FAILURE(state, payload) {
            state.isLoading = false
            state.errors = payload
            state.tags = []
        }
    },
    actions: {
        GET_TAGS({ commit }) {
            return new Promise((res, rej) => {
                commit('GET_TAGS_START')
                getTags()
                    .then(result => {
                        commit('GET_TAGS_SUCCESS', result.data.tags)
                        res(result)
                    })
                    .catch(err => {
                        console.log(err, 'err')
                        commit('GET_TAGS_FAILURE')
                        rej(err)
                    }) 
            })
        }
    },
    getters: {
        allTags(state) {
                return state.tags                
        }
    }
}